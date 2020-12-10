import React from 'react';
import {Link} from "react-router-dom";
import '../style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand logo" to="/"><img
                            src="https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/restaurant_photo/001/588/949/saltgrass.png" alt=""/></Link>
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="link mr-5 nav-item">Home</Link>
                            <Link to="/menu" className="link nav-item">Menu</Link>
                        </div>
                </nav>
            </div>
        </header>
)
}
export default Header;