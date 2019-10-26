import React from 'react';

function Card(props) {

    const style = {
        card: {
            background: props.color,
            width: 150,
            height: 150,
            border: "1px solid black",
            borderRadius: 20,
            margin: 0,
            padding: 0
        },
        icon: {
            color: "#DDDDDD",
            fontSize: 100,
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