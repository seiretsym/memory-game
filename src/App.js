import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Card from './components/Card';

class App extends Component {

  // define state
  state = {

    score: 0,
    maxScore: 0,
    // cuz we have 16 cards
    cards: [
      {
        color: "green",
        clicked: false,
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

  // do stuff when card is clicked
  handleCardClick = i => {
    // if card has already been clicked...
    if (this.state.cards[i].clicked) {
      // welp, user lost.
      this.lose()
    } else {
      this.setState({
        score: this.state.score + 1
      })
      this.state.cards[i].clicked = true;
      this.state.cards[i].text = "Clicked";
      this.shuffleCards();
    }
  }

  // things to do when user loses
  lose = () => {
    // reset score and set maxScore
    this.setState({
      maxScore: this.state.score,
      score: 0
    })
    // reset the cards' clicked to false
    this.state.cards.map(card => {
      card.clicked = false;
      card.text = "";
    })
    // shuffle the cards again
    this.shuffleCards();
  }

  // shuffles the cards around
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

  // magically makes things appear
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} />
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
