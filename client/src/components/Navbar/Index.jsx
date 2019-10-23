import React from 'react'

const Navbar = () => {
    return (
    <nav>
        <div className="nav-wrapper blue">
            <a href="/" className="center brand-logo">Google Books</a>
            <ul id="nav-mobile" className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar