import React from 'react';
import Dice from './dice';
import { getDescription } from '../lib/descriptions';

export default class DiceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            valuesLoaded: false,
            description: '',
            descriptionShown: false
        };
        this.newGameButton = {
            light: 'border-sky-900 text-sky-900 hover:text-white hover:bg-sky-900',
            dark: 'border-sky-200 text-sky-200 hover:text-sky-900 hover:bg-sky-200'
        };
    }

    componentDidMount() {
        let newValues = [];
        for(let i = 0; i < this.props.diceAmount; i++) {
            const min = Math.ceil(1);
            const max = Math.floor(7);
            newValues.push(Math.floor(Math.random() * (max - min) + min));
        }
        
        window.setTimeout(() => {
            this.setState({ values: newValues, valuesLoaded: true });
            if(this.props.specialMode) {
                const description = getDescription(newValues, this.props.layedOutOnes, this.props.move);
                window.setTimeout(() => {
                    this.setState({ description: description, descriptionShown: true });
                }, 200);
            }
        }, 200);
    }

    onOnesLayout(ones, sixes) {
        let sixesRemoved = [];
        let onesRemoved = [];
        if(sixes.length > 1) {
            sixesRemoved = this.state.values.filter(value => value !== 6);
            onesRemoved = sixesRemoved.filter(value => value !== 1);
        }
        else {
            onesRemoved = this.state.values.filter(value => value !== 1);
        }
        window.setTimeout(() => {
            this.props.handleOnes(ones, sixes);
            this.setState({ values: onesRemoved });
        }, 200);
    }

    render() {
        let ones = this.state.values.filter(value => value === 1);
        let sixes = this.state.values.filter(value => value === 6);
        const onesPresent = ones.length > 0 || sixes.length > 1;
        return(
            <div className="w-full h-full relative">
                <div className={ `${ this.state.descriptionShown ? 'visible scale-100' : 'invisible scale-50' } duration-200 transition-transform w-full flex justify-center absolute font-bold text-3xl sm:text-4xl text-center` }>
                    { this.state.description }
                </div>
                <div className={ `${ this.state.valuesLoaded ? 'opacity-100' : 'opacity-0 translate-y-1' } w-full h-4/6 md:h-5/6 flex content-center gap-y-6 justify-center gap-x-6 flex-wrap mb-2 transition-all duration-200` }>
                    { this.state.values.map((value, i) => <Dice key={ `bigDice${ i }` } value={value} diceType="big" theme={ this.props.theme }></Dice>) }
                </div>
                {this.props.move < 3 && ones.length < 3 && this.props.currentOnes + ones.length < 3
                    ? <div className="h-2/6 md:h-1/6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-4">
                        <div onClick={ this.props.handleNewDiceRoll } className={ `${ this.newGameButton[this.props.theme] } border-4 text-2xl sm:text-3xl md:text-4xl duration-200 transition-all cursor-pointer py-2 px-6 rounded-full text-center font-bold w-fit` }>Nochmal würfeln</div>
                        <div onClick={ onesPresent ? () => this.onOnesLayout(ones, sixes) : ()=>{} } className={ `${ onesPresent ? 'schocken-ones cursor-pointer' : 'opacity-50 cursor-default' } rounded-full py-2 pl-4 pr-2 flex items-center` }>
                            <span className="pb-1 sm:pb-3 text-2xl sm:text-3xl md:text-4xl font-medium">Einsen rauslegen</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={ 2 }>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    : <div className="h-2/6 md:h-1/6 flex items-center justify-center">
                        <div onClick={ this.props.newGame } className="schocken-reload flex items-center justify-center cursor-pointer">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold pb-1 mr-4">Neues Spiel</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={ 2 }>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                    </div>
                }
            </div>
        );
    }
}