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
        icon: "fa fa-arrow-left"
      },
      {
        color: "darkgreen",
        clicked: false,
        icon: "fa fa-arrow-right"
      },
      {
        color: "darkolivegreen",
        clicked: false,
        icon: "fa fa-arrow-up"
      },
      {
        color: "olive",
        clicked: false,
        icon: "fa fa-arrow-down"
      },
      {
        color: "red",
        clicked: false,
        icon: "fa fa-chevron-left"
      },
      {
        color: "darkred",
        clicked: false,
        icon: "fa fa-chevron-right"
      },
      {
        color: "firebrick",
        clicked: false,
        icon: "fa fa-chevron-up"
      },
      {
        color: "crimson",
        clicked: false,
        icon: "fa fa-chevron-down"
      },
      {
        color: "midnightblue",
        clicked: false,
        icon: "fa fa-caret-left"
      },
      {
        color: "darkblue",
        clicked: false,
        icon: "fa fa-caret-right"
      },
      {
        color: "darkcyan",
        clicked: false,
        icon: "fa fa-caret-up"
      },
      {
        color: "dodgerblue",
        clicked: false,
        icon: "fa fa-caret-down"
      },
      {
        color: "orange",
        clicked: false,
        icon: "fa fa-angle-double-left"
      },
      {
        color: "orangered",
        clicked: false,
        icon: "fa fa-angle-double-right"
      },
      {
        color: "darkorange",
        clicked: false,
        icon: "fa fa-angle-double-up"
      },
      {
        color: "sandybrown",
        clicked: false,
        icon: "fa fa-angle-double-down"
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
      this.shuffleCards();
    }
  }

  // things to do when user loses
  lose = () => {
    // reset score, set maxScore, reset clicked to false
    this.setState({
      maxScore: this.state.score,
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
          <div className="row">
            <div className="col-md-9 d-flex flex-wrap p-5 mx-auto">
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
