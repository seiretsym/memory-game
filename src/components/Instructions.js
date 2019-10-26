import React from 'react'

function Instructions () {
    return (
        <div className="jumbotron my-3 p-3 bg-dark text-light text-center">
            <h4 className="text-warning">Instructions</h4>
            <p className="p-0 m-0">
                To play, simply click on a card. You gain 1 score per card clicked, but be careful! Your score will reset if you click on the same card twice!
            </p>
        </div>
    )
}

export default Instructions