import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Card from './components/Card';
import cardList from "./components/cardList.json"
import Instructions from "./components/Instructions"

class App extends Component {

  // define state
  state = {
    score: 0,
    maxScore: 0,
    // cuz we have 16 cards
    cards: cardList
  }

  // do stuff when card is clicked
  handleCardClick = i => {
    // wrap score conditions in a promise
    return new Promise(resolve => {
      // if card has already been clicked...
      if (this.state.cards[i].clicked) {
        // welp, user lost. restart!
        this.restartGame()
      } else {
        this.setState({
          cards: this.state.cards.map((card, index) => {
            // if current card index matches i
            if (index === i) {
              // change clicked to true
              card.clicked = true;
            }
            // return the card data back to array
            return card;
          }),
          score: this.state.score + 1,
        })
        // resolve so we can process the next step
        resolve()
      }
    })
      // then...
      .then(() => {
        // max moves is 16, so..
        if (this.state.score === 16) {
          // restart if that's true
          this.restartGame();
        } else {
          // continue the game and shuffle if not
          this.shuffleCards();
        }
      })
  }

  // things to do when user loses
  restartGame = () => {
    // check if score is higher than maxScore before updating
    if (this.state.score > this.state.maxScore) {
      this.setState({
        maxScore: this.state.score
      })
    }
    // reset score, set maxScore, reset clicked to false
    this.setState({
      score: 0,
      cards: this.state.cards.map(card => {
        card.clicked = false;
        return card;
      })
    })
    // shuffle the cards again
    this.shuffleCards();
  }

  // shuffles the cards around
  shuffleCards = () => {
    // clone state.cards into temp
    let temp = this.state.cards.slice();

    // every day i shuffle!
    for (let day = temp.length - 1; day > 0; day--) {
      let i = Math.floor(Math.random() * (day + 1));
      [temp[day], temp[i]] = [temp[i], temp[day]]
    }

    // damn right you're shuffled!
    this.setState({ cards: temp })
  }

  // magically makes things appear
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} maxScore={this.state.maxScore} />
        <div className="container">
          {/* display instructions */}
          <Instructions />
          <div className="row">
            <div className="col-md-9 d-flex flex-wrap justify-content-center p-0 mx-auto">
              {/* display the cards */}
              {this.state.cards.map((card, index) =>
                <button onClick={() => this.handleCardClick(index)} key={index}>
                  <Card
                    color={card.color}
                    key={index}
                    icon={card.icon}
                  ></Card>
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
