import React from 'react';

export default function Dice(props) {
    const diceThemes = {
        light: 'border-black',
        dark: 'border-white'
    };

    const dotThemes = {
        light: 'bg-black',
        dark: 'bg-white'
    };

    switch (props.value) {
        case 1:
            return  (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
        case 2:
            return (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
        case 3:
            return (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
        case 4:
            return (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
        case 5:
            return (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
        case 6:
            return (<div className={`dice ${ props.diceType } ${ diceThemes[props.theme] }`}>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType } ${ dotThemes[props.theme] }`}></div>
            </div>);
    }
}