import React from 'react';

export default function Dice(props) {
    switch (props.value) {
        case 1:
            return  (<div className={`dice ${ props.diceType }`}>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
        case 2:
            return (<div className={`dice ${ props.diceType }`}>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
        case 3:
            return (<div className={`dice ${ props.diceType }`}>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
        case 4:
            return (<div className={`dice ${ props.diceType }`}>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
        case 5:
            return (<div className={`dice ${ props.diceType }`}>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
        case 6:
            return (<div className={`dice ${ props.diceType }`}>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div className={`dot ${ props.diceType }`}></div>
                <div></div>
                <div className={`dot ${ props.diceType }`}></div>
            </div>);
    }
}