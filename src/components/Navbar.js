import React from 'react';
import SimpleModal from './Meme';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue accent-2">
                <a href="#!" className="brand-logo" style={{ paddingLeft: 20 }}>
                    Financial Independence Dashboard
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">Menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <SimpleModal />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
