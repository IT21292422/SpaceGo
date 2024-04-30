import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
            <Link to="/"><img src="logo.png" alt="Logo" className="h-12 w-12 ml-2 mt-2"/></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                    <Link to="/earth"><a className='text-lg font-medium text-white'>Earth</a></Link>
                    </li>
                    <li>
                    <Link to="/mars"><a className='text-lg font-medium text-white'>Mars</a></Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end md:hidden">
            <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <Link to="/earth"><a>Earth</a></Link>    
                        </li>
                        <li>
                        <Link to="/mars"><a>Mars</a></Link>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
