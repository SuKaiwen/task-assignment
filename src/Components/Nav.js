import React from 'react';

import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className = "nav">
            <p className = "title"><i class="fas fa-lightbulb"></i> Tracker</p>
            <div className = "row">
                <Link to="/"><p>Dashboard</p></Link>
                <Link to="/about"><p>About</p></Link>
            </div>
        </div>
    );
}

export default Nav;