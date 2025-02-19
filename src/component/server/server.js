const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const dataBase = require("../../../DB/database");
const User = require("../../../DB/Models/User");
const Adds = require("../../../DB/Models/adds");
const multer = require("multer");
const fs = require("fs");
const stripe = require("stripe")(
  "sk_test_51PRTCcKV8v1ChEJC3q2Al2LZkZjBRrXnFbbEJ38tHd4QvDeHWaJKn15v1FWW3Di8CF3EJmuUJ91xBk9s4dd9w33Q00u0ryYpOL"
);

const myApp = express();

myApp.use(cors());
myApp.use(express.json());

const uploadsDir = path.join(__dirname, "../uploads");

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
// ffmpeg
myApp.use(express.static(uploadsDir));
myApp.use("/uploads", express.static("uploads"));

myApp.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// +++++++++++ Routes +++++++++++++++

// Login
myApp.post("/login", async (req, res) => {
  try {
    const userFound = await User.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    if (!userFound) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: userFound._id }, "CatDogLion", {
      expiresIn: "1d",
    });
    res.json({ user: userFound, token, message: "Login Successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Register
myApp.post("/register", async (req, res) => {
  try {
    const { FullName, FirstName, LastName, Email, Password } = req.body;
    if (!Email) {
      res.json({ msj: "Email Required" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(401).json({ msg: "Email Already Exists" });
    }

    // Create new user
    const newUser = new User({
      FullName: FirstName + " " + LastName,
      FirstName,
      LastName,
      Email,
      Password: Password,
    });

    await newUser.save();
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Checking Session
myApp.post("/checkSession", async (req, res) => {
  try {
    if (!req.body || !req.body.abc) {
      return res.json(null);
    }

    const token = req.body.abc;
    const secret = "CatDogLion";

    const data = await new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });

    const user = await User.findOne({ _id: data._id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Session check error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Add creation
myApp.post("/createAdd", upload.single("image"), async (req, res) => {
  try {
    const { title, price, image, description, category } = req.body;
    const newAdd = new Adds({
      title,
      description,
      category,
      price,
      image: req.file.filename ?? image, // Store the file name generated by multer
    });
    await newAdd.save();
    res.json({ msg: "Add created successfully" });
  } catch (error) {
    console.error("Add creation error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get Adds
myApp.get("/getAdds", async (req, res) => {
  try {
    const adds = await Adds.find();
    res.json(adds);
  } catch (error) {
    console.error("Get Adds error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get Adds by category
myApp.get("/getAdds/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const adds = await Adds.find({ category });
    res.json(adds);
  } catch (error) {
    console.error("Get Adds error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get Product
myApp.get("/getProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Adds.findOne({ _id: id });
    res.json(product);
  } catch (error) {
    console.error("Get Product error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete Add
myApp.delete("/deleteAdd/:id", async (req, res) => {
  try {
    const addId = req.params.id;
    const add = await Adds.findById(addId);
    if (!add) {
      console.log("add not Found");
      console.log(req.params.id);

      return res.status(404).json({ msg: "Add not found" });
    }
    await add.deleteOne();
    res.json({ msg: "Add deleted successfully" });
  } catch (error) {
    console.log(req.params.id);

    console.error("Delete Add error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get Users
myApp.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Get Users error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete User
myApp.delete("/deleteUser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    await user.deleteOne();
    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Delete User error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Checkout Via Stripe
myApp.post("/create-checkout-session", async (req, res) => {
  const products = req.body || [];
  const lineItems = products.map((product)=>({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/sucess",
    cancel_url:"http://localhost:3000/cancel"
  });
  res.json(session.id)
  
});

// App Listener
myApp.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
