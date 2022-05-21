import React from 'react';
import Dice from '../components/Dice';
import DiceWrapper from '../components/DiceWrapper';
import RevealButton from '../components/RevealButton';
import Link from 'next/link';

export default class Schocken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'revealButton',
      move: 1,
      diceAmount: 3,
      ones: 0,
      menuOpen: false
    };
    this.newGame = this.newGame.bind(this);
    this.layOutOnes = this.layOutOnes.bind(this);
    this.newDiceRoll = this.newDiceRoll.bind(this);
  }

  newGame() {
    this.setState({ mode: 'revealButton', move: 1, diceAmount: 3, ones: 0 });
  }

  layOutOnes(ones, sixes) {
    let value = sixes.length > 1 ? sixes.length - 1 : 0;
    value += ones.length;
    this.setState({ ones: this.state.ones + value, diceAmount: this.state.diceAmount - value });
  }

  newDiceRoll() {
    this.setState({ mode: 'revealButton', move: this.state.move + 1 });
  }

  render() {
    const oneElements = [];
    for(let i = 0; i < this.state.ones; i++) {
      oneElements.push(<Dice key={ i } value={ 1 } diceType="small"></Dice>);
    }
    return (
      <div className="min-w-screen h-screen relative">
        <nav className="w-full h-1/10 flex items-center justify-between px-6 sm:px-16">
          <div onClick={ this.newGame } className="hover:rotate-180 duration-500 transition-transform cursor-pointer p-4 -ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div onClick={ () => this.setState({ menuOpen: true }) } className="p-4 -mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </nav>
        <main className="schocken-lower w-full h-9/10">
          <div className="h-1/10 flex items-center justify-between px-6 sm:px-16">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{ this.state.move }/3</div>
            <div className="flex items-center gap-x-2">{ oneElements }</div>
          </div>
          <div className="h-9/10 p-4">
            {
              this.state.mode === 'revealButton'
              ? <RevealButton handleClick={ () => this.setState({ mode: 'showResult' }) }></RevealButton>
              : this.state.mode === 'showResult' 
              ? <DiceWrapper move={ this.state.move } currentOnes={ this.state.ones } diceAmount={ this.state.diceAmount } handleOnes={ this.layOutOnes } handleNewDiceRoll={ this.newDiceRoll } newGame={ this.newGame }></DiceWrapper>
              : ''
            }
          </div>
        </main>
        <div className={` ${ this.state.menuOpen ? 'visible bg-sky-900/90' : 'invisible bg-sky-900/0' } absolute top-0 w-full h-full duration-200` }>
          <div className="h-1/10 flex items-center justify-end px-6 sm:px-16 text-white">
            <div onClick={ () => this.setState({ menuOpen: false }) } className="p-4 -mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className={ `${ this.state.menuOpen ? 'translate-y-0' : 'translate-y-1'} flex flex-col items-center p-10 duration-200` }>
            <Link href="/imprint">
              <a className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Impressum</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
