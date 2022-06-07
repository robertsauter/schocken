import React from 'react';
import Dice from '../components/Dice';
import DiceWrapper from '../components/DiceWrapper';
import RevealButton from '../components/RevealButton';
import Link from 'next/link';
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
      themeMenuOpen: false,
      specialMode: false
    };
    this.basicThemes = {
      light: 'bg-white text-black',
      dark: 'bg-sky-900 text-white'
    };
    this.menuThemes = {
      light: 'bg-sky-900/90 text-white',
      dark: 'bg-white/90 text-sky-900'
    };
    this.switchActiveThemes = {
      light: 'bg-white',
      dark: 'bg-sky-900'
    };
    this.switchInactiveThemes = {
      light: 'bg-gray-200',
      dark: 'bg-gray-500'
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
          <meta name="google-site-verification" content="ypSteyjhxA8obSz8szYPnQYv9F-v0Tozoj9WP8De8G0" />
        </Head>
        <div className={`${ this.basicThemes[this.state.theme] } min-w-screen h-screen relative`}>
          <nav className="w-full h-1/10 flex items-center justify-between px-6 sm:px-16">
            <div onClick={ this.newGame } className="hover:rotate-180 duration-500 transition-transform cursor-pointer p-4 -ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div onClick={ () => this.setState({ menuOpen: true }) } className="p-4 -mr-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </nav>
          <main className="w-full h-9/10">
            <div className="h-1/10 flex items-center justify-between px-6 sm:px-16">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{ this.state.move }/3</div>
              <div className="flex items-center gap-x-2">{ oneElements }</div>
            </div>
            <div className="h-9/10 p-4">
              {
                this.state.mode === 'revealButton'
                ? <RevealButton handleClick={ () => { window.setTimeout(() => { this.setState({ mode: 'showResult' })}, 200) } } theme={ this.state.theme }></RevealButton>
                : this.state.mode === 'showResult' 
                ? <DiceWrapper layedOutOnes={ this.state.ones } specialMode={ this.state.specialMode } move={ this.state.move } currentOnes={ this.state.ones } diceAmount={ this.state.diceAmount } handleOnes={ this.layOutOnes } handleNewDiceRoll={ this.newDiceRoll } newGame={ this.newGame } theme={ this.state.theme }></DiceWrapper>
                : ''
              }
            </div>
          </main>
          <div className={` ${ this.state.menuOpen ? 'visible opacity-100' : 'invisible opacity-0' } ${ this.menuThemes[this.state.theme] } absolute top-0 w-full h-full duration-200` }>
            <div className="h-1/10 flex items-center justify-end px-6 sm:px-16">
              <div onClick={ () => this.setState({ menuOpen: false, themeMenuOpen: false }) } className="p-4 -mr-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <menu className={ `${ this.state.menuOpen ? 'translate-y-0' : 'translate-y-1'} flex flex-col items-center p-10 duration-200` }>
              <li>
                <h2 onClick={ () => this.setState({ themeMenuOpen: !this.state.themeMenuOpen }) } className="text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer">Theme</h2>
                <div className={`${ this.state.themeMenuOpen ? 'h-auto visible opacity-100' : 'invisible h-0 opacity-0' } duration-200 transition-all flex items-center flex-col`}>
                  {this.themes.map((theme, i) => {
                    if(theme.id !== this.state.theme) {
                      return <p onClick={ () => this.changeTheme(theme.id) } key={ `theme${ i }` } className="cursor-pointer py-2">{ theme.name }</p>;
                    }
                  })}
                </div>
              </li>
              <li onClick={ this.toggleSpecialMode } className="flex items-center mt-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer mr-2 sm:mr-4">Spezial Modus</h2>
                <div className={ `${ this.state.specialMode ? `${ this.switchActiveThemes[this.state.theme] } justify-end pl-8` : `${ this.switchInactiveThemes[this.state.theme] } justify-start pr-8` } mt-1 duration-200 transition-all cursor-pointer rounded-full p-1 relative flex items-center w-fit` }>
                  <div className={ `${ this.menuThemes[this.state.theme] } rounded-full w-6 h-6` }></div>
                </div>
              </li>
              <li>
                <Link href="/imprint">
                  <a>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8">Impressum</h2>
                  </a>
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </div>
    )
  }
}
