import React from 'react';

function Card(props) {

    const style = {
        card: {
            background: props.color,
        },
        icon: {
            color: "#DDDDDD",
            fontSize: 75,
            margin: "auto",
            padding: 0
        }
    }

    return (
        <div className="card" style={style.card}>
            <i className={props.icon} style={style.icon}></i>
        </div>
    )
}

export default Card