import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Card from './components/Card';

class App extends Component {

      // define state
      state = {

        score: 0,
        // cuz we have 16 cards
        cards: [
            {
                color: "green",
                clicked: false,
                text: ""
            },
            {
                color: "darkgreen",
                clicked: false
            },
            {
                color: "darkolivegreen",
                clicked: false
            },
            {
                color: "olive",
                clicked: false
            },
            {
                color: "red",
                clicked: false
            },
            {
                color: "darkred",
                clicked: false
            },
            {
                color: "firebrick",
                clicked: false
            },
            {
                color: "crimson",
                clicked: false
            },
            {
                color: "midnightblue",
                clicked: false
            },
            {
                color: "darkblue",
                clicked: false
            },
            {
                color: "darkcyan",
                clicked: false
            },
            {
                color: "dodgerblue",
                clicked: false
            },
            {
                color: "orange",
                clicked: false
            },
            {
                color: "orangered",
                clicked: false
            },
            {
                color: "darkorange",
                clicked: false
            },
            {
                color: "sandybrown",
                clicked: false
            }
        ],
    }

    handleCardClick = i => {
        if (this.state.cards[i].clicked) {
            console.log("YOU ALREADY CLICKED THIS!");
        } else {
            this.state.cards[i].clicked = true;
            this.state.cards[i].text = "Clicked";
            this.shuffleCards();
        }
    }

    shuffleCards = () => {
        Promise.all(this.state.cards.map((card, i) => {
            // wrap in a promise to resolve one at a time
            let promise = new Promise(resolve => {
                // create a random number based on i
                let num = Math.floor(Math.random() * (this.state.cards.length));
                // store current card in temp
                let temp = this.state.cards[i];
                // do a shuffle
                this.state.cards[i] = this.state.cards[num]
                this.state.cards[num] = temp;
                // resolve this promise
                resolve();
            })
        }))
        // forceUpdate after all promises have been resolved
        .then(this.forceUpdate())

    }

    render() {
        return (
          <Wrapper>
            <Nav score={this.state.score}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 d-flex flex-wrap p-5 mx-auto">
                        {/* display the cards */}
                        {this.state.cards.map((card, index) =>
                            <button onClick={() => this.handleCardClick(index)} key={index}>
                                <Card
                                    color={card.color}
                                    key={index}
                                >{card.text}</Card>
                            </button>
                        )}
                    </div>
                </div>
            </div>
          </Wrapper>
        )
    }
}

export default App;
