import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue accent-2">
                <a href="#!" className="brand-logo" style={{ paddingLeft: 20 }}>
                    Financial Independence Calculator
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">Menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="sass.html">Sass</a>
                    </li>
                    <li>
                        <a href="badges.html">Components</a>
                    </li>
                    <li>
                        <a href="collapsible.html">Javascript</a>
                    </li>
                    <li>
                        <a href="mobile.html">Mobile</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
