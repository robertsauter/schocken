import React from 'react';
import Link from 'next/link';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            themeMenuOpen : false
        };
        this.menuThemes = {
            light: 'bg-theme-dark-blue/90 backdrop-blur-sm text-white',
            dark: 'bg-white/90 backdrop-blur text-theme-dark-blue'
        };
        this.buttonThemes = {
            light: 'bg-white text-theme-dark-blue',
            dark: 'bg-theme-dark-blue text-white'
        }
        this.switchActiveThemes = {
            light: 'bg-theme-yellow',
            dark: 'bg-theme-orange'
        };
        this.switchInactiveThemes = {
            light: 'bg-gray-200',
            dark: 'bg-gray-500'
        };
    }

    render() {
        return (<div className={` ${ this.props.menuOpen ? '' : 'invisible opacity-0' } ${ this.menuThemes[this.props.theme] } absolute top-0 w-full h-full duration-200` }>
            <div className="h-1/10 flex items-center justify-end px-6 sm:px-16">
                <div onClick={ this.props.closeMenu } className="p-6 -mr-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <menu className={ `${ this.props.menuOpen ? 'translate-y-0' : 'translate-y-1'} flex flex-col items-center p-10 duration-200` }>
                <li className="w-full text-center">
                    <h2 onClick={ () => this.setState({ themeMenuOpen: !this.state.themeMenuOpen }) } className="text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer">Theme</h2>
                    <div className={`${ this.state.themeMenuOpen ? 'h-auto p-4' : 'h-0 overflow-hidden p-0' } transition-all duration-75 ease-in grid grid-cols-2 gap-x-4 gap-y-4 w-full bg-white rounded-3xl`}>
                        {this.props.themes.map((theme, i) => {
                            return <button type="button" onClick={ () => this.props.changeTheme(theme.id) } key={ `theme${ i }` } className={ `${ this.props.theme === theme.id ? 'border-4 border-theme-yellow' : '' } ${ this.buttonThemes[theme.id] } cursor-pointer py-2 rounded-2xl font-medium` }>{ theme.name }</button>;
                        })}
                    </div>
                </li>
                <li onClick={ this.props.toggleSpecialMode } className="flex items-center mt-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold cursor-pointer mr-2 sm:mr-4">Spezial Modus</h2>
                    <div className={ `${ this.props.specialMode ? `${ this.switchActiveThemes[this.props.theme] } justify-end pl-8` : `${ this.switchInactiveThemes[this.props.theme] } justify-start pr-8` } duration-200 transition-all cursor-pointer rounded-full p-1 relative flex items-center w-fit` }>
                        <div className={ `${ this.menuThemes[this.props.theme] } rounded-full w-6 h-6` }></div>
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
        </div>);
    }
}