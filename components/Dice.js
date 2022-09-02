import React from 'react';

export default class Dice extends React.Component {

    constructor(props) {
        super(props);
        this.diceThemes = {
            light: 'border-black',
            dark: 'border-white'
        };
    
        this.dotThemes = {
            light: 'bg-black',
            dark: 'bg-white'
        };
    
        const rotationValues = [
            'rotate-0',
            'rotate-1',
            'rotate-2',
            'rotate-3',
            'rotate-6',
            'rotate-12',
            'rotate-45',
            '-rotate-1',
            '-rotate-2',
            '-rotate-3',
            '-rotate-6',
            '-rotate-12',
            '-rotate-45'
        ];
    
        this.randomRotation = rotationValues[Math.floor(Math.random()*rotationValues.length)];
    }
    
    render() {
        switch (this.props.value) {
            case 1:
                return  (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.props.diceType === 'big' ? this.randomRotation : '' }`}>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] } `}></div>
                </div>);
            case 2:
                return (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.randomRotation }`}>
                    <div></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                </div>);
            case 3:
                return (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.randomRotation }`}>
                    <div></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                </div>);
            case 4:
                return (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.randomRotation }`}>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                </div>);
            case 5:
                return (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.randomRotation }`}>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                </div>);
            case 6:
                return (<div className={`dice ${ this.props.diceType } ${ this.diceThemes[this.props.theme] } ${ this.randomRotation }`}>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                    <div></div>
                    <div className={`dot ${ this.props.diceType } ${ this.dotThemes[this.props.theme] }`}></div>
                </div>);
        }
    }
}