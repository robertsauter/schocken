import React from 'react';
import DiceWrapper from '../components/DiceWrapper';
import RevealButton from '../components/RevealButton';
import RollDiceButton from '../components/RollDiceButton';

export default class Schocken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'start',
      move: 1,
      diceAmount: 3,
      ones: 0
    };
    this.newGame = this.newGame.bind(this);
    this.layOutOnes = this.layOutOnes.bind(this);
  }

  newGame() {
    this.setState({ mode: 'start', move: 1, diceAmount: 3 });
  }

  layOutOnes(ones, sixes) {
    let value = sixes.length > 1 ? sixes.length - 1 : 0;
    value += ones.length;
    this.setState({ ones: this.state.ones + value });
  }

  render() {
    console.log(this.state.ones);
    return (
      <div className="min-w-screen h-screen">
        <nav className="w-full h-1/6 flex items-center justify-between p-4 bg-gray-100">
          <div onClick={ this.newGame } className="bg-red-500 rounded-full text-white p-2">Neues Spiel</div>
          <div className="bg-sky-500 rounded-full p-2 text-white">Menü</div>
        </nav>
        <main className="w-full h-5/6">
          <div className="h-1/6 bg-gray-500 text-xl font-semibold p-8">{ this.state.move }/3</div>
          <div className="h-5/6 p-4">
            {
              this.state.mode === 'start'
              ?  <RollDiceButton handleClick={ () => this.setState({ mode: 'revealButton' }) }></RollDiceButton>
              :this.state.mode === 'revealButton'
              ? <RevealButton handleClick={ () => this.setState({ mode: 'showResult' }) }></RevealButton>
              : this.state.mode === 'showResult' 
              ? <DiceWrapper diceAmount={ this.state.diceAmount } handleOnes={ this.layOutOnes }></DiceWrapper>
              : ''
            }
          </div>
        </main>
      </div>
    )
  }
}
