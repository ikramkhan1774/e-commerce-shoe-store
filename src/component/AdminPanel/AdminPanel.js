import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

export default function AdminPanel() {
    const [selectedLink, setSelectedLink] = useState('');

    const handleSelectedLink = (event) => {
        const clickedLink = event.currentTarget.getAttribute('href');
        setSelectedLink(clickedLink);
    };

    const getLinkClassName = (path) => {
        return path === selectedLink
            ? "shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
            : "shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
    };

    return (
        <div>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>
                    <select id="Tab" className="w-full rounded-md border-gray-200">
                        <option>Users</option>
                        <option>Messages</option>
                        <option>Adds</option>
                        <option>Settings</option>
                        <option>Notifications</option>
                    </select>
                </div>

                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px justify-around flex gap-6" aria-label="Tabs">
                            <Link to="users" onClick={handleSelectedLink} className={getLinkClassName('/users')}>
                                Users
                            </Link>
                            <Link to="adds" onClick={handleSelectedLink} className={getLinkClassName('/adds')}>
                                Adds
                            </Link>
                            {/* <Link to="settings" onClick={handleSelectedLink} className={getLinkClassName('/settings')}>
                                Settings
                            </Link> */}
                            <Link to="notifications" onClick={handleSelectedLink} className={getLinkClassName('/notifications')}>
                                Notifications
                            </Link>
                            <Link to="createAdd" onClick={handleSelectedLink} className={getLinkClassName('/createAdd')}>
                                Create Add
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
