import React from 'react';

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                Score: {props.score}
            </nav>
        </div>
    )
}

export default Nav;