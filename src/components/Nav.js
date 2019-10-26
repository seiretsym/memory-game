import React from 'react';

function Nav(props) {
    return (
        <div>
            <ul className="nav bg-dark text-light">
                <li className="nav-item ml-auto">
                    <span className="nav-link text-warning font-weight-bold">Score: <span className="text-light">{props.score}</span></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-success font-weight-bold">Max Score: <span className="text-light">{props.maxScore}</span></span>
                </li>
            </ul>
        </div>

    )
}

export default Nav;