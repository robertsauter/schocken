import React from 'react';
import Dice from '../components/Dice';
import DiceWrapper from '../components/DiceWrapper';
import RevealButton from '../components/RevealButton';
import Menu from '../components/Menu'
import Head from 'next/head';

export default class Schocken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'revealButton',
      move: 1,
      diceAmount: 3,
      ones: 0,
      menuOpen: false,
      theme: 'light',
      specialMode: false
    };
    this.basicThemes = {
      light: 'bg-white text-theme-dark-blue',
      dark: 'bg-theme-dark-blue text-white'
    };
    this.themes = [
      {
        id: 'light',
        name: 'Hell',
      },
      {
        id: 'dark',
        name: 'Dunkel',
      }
    ];
    this.newGame = this.newGame.bind(this);
    this.layOutOnes = this.layOutOnes.bind(this);
    this.newDiceRoll = this.newDiceRoll.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleSpecialMode = this.toggleSpecialMode.bind(this);
  }

  componentDidMount() {
    const theme = localStorage.getItem('schocken-theme');
    const specialMode = localStorage.getItem('schocken-special-mode') === 'true';
    this.setState({ theme: theme ? theme : 'light', specialMode: specialMode });
    screen.orientation.lock('portrait')
    .catch(e => {
      //Do nothing, when lock is not supported by th device.
    });
  }

  newGame() {
    window.setTimeout(() => {
      this.setState({ mode: 'revealButton', move: 1, diceAmount: 3, ones: 0 });
    }, 200);
  }

  layOutOnes(ones, sixes) {
    let value = sixes.length > 1 ? sixes.length - 1 : 0;
    value += ones.length;
    this.setState({ ones: this.state.ones + value, diceAmount: this.state.diceAmount - value });
  }

  newDiceRoll() {
    window.setTimeout(() => {
      this.setState({ mode: 'revealButton', move: this.state.move + 1 });
    }, 200);
  }

  changeTheme(id) {
    this.setState({ theme: id });
    localStorage.setItem('schocken-theme', id);
  }

  toggleSpecialMode() {
    const newMode = !this.state.specialMode;
    this.setState({ specialMode: newMode });
    localStorage.setItem('schocken-special-mode', newMode);
  }

  render() {
    const oneElements = [];
    for(let i = 0; i < this.state.ones; i++) {
      oneElements.push(<Dice key={ `smallDice${ i }` } value={ 1 } diceType="small" theme={ this.state.theme }></Dice>);
    }
    return (
      <div>
        <Head>
          <title>Schocken</title>
          <meta name="theme-color" content={ this.state.theme === 'light' ? 'white' : '#0c4a6e' } />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
        </Head>
        <div className={`${ this.basicThemes[this.state.theme] } min-w-screen h-screen relative select-none`}>
          <nav className="w-full h-1/10 flex items-center justify-between px-6 sm:px-16">
            <div onClick={ this.newGame } className="hover:rotate-180 duration-500 transition-transform cursor-pointer p-4 -ml-4">
              <div className="bg-theme-yellow rounded-full p-2 active:scale-110 transition-transform duration-75 ease-in">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
            <div onClick={ () => this.setState({ menuOpen: true }) } className="p-6 -mr-4 cursor-pointer rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </nav>
          <main className="w-full h-9/10">
            <div className="h-1/10 flex items-center justify-between px-6 sm:px-16">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold">{ this.state.move }/3</div>
              <div className="flex items-center gap-x-2">{ oneElements }</div>
            </div>
            <div className="h-9/10 p-6">
              {
                this.state.mode === 'revealButton'
                ? <RevealButton handleClick={ () => { window.setTimeout(() => { this.setState({ mode: 'showResult' })}, 200) } } theme={ this.state.theme }></RevealButton>
                : this.state.mode === 'showResult' 
                ? <DiceWrapper layedOutOnes={ this.state.ones } specialMode={ this.state.specialMode } move={ this.state.move } currentOnes={ this.state.ones } diceAmount={ this.state.diceAmount } handleOnes={ this.layOutOnes } handleNewDiceRoll={ this.newDiceRoll } newGame={ this.newGame } theme={ this.state.theme }></DiceWrapper>
                : ''
              }
            </div>
          </main>
          <Menu theme={ this.state.theme } themes={ this.themes } menuOpen={ this.state.menuOpen } specialMode={ this.state.specialMode } closeMenu={ () => this.setState({ menuOpen: false, themeMenuOpen: false }) } changeTheme={ this.changeTheme } toggleSpecialMode={ this.toggleSpecialMode }></Menu>
        </div>
      </div>
    )
  }
}
