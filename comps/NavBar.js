import React from "react";
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <p className="text-2xl font-bold text-grey-800"> Navigation Bar</p>
            <div className="flex">
                <Link href="/">
                    <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Home</a>
                </Link> 
                <Link href="/contactList">
                    <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Contact List</a>
                </Link>
                <Link  href="/about">
                    <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">About</a>
                </Link>
            </div>
        </nav>
    );
    };

export default NavBar;
