import React from 'react';
import Dice from './Dice';
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
                <div className={ `${ this.state.descriptionShown ? 'visible scale-100' : 'invisible scale-50' } h-1/10 duration-200 transition-transform w-full flex justify-center font-bold text-3xl sm:text-4xl text-center` }>
                    { this.state.description }
                </div>
                <div onClick={ this.props.move < 3 && ones.length < 3 && this.props.currentOnes + ones.length < 3 ? this.props.handleNewDiceRoll : this.props.newGame } className={ `${ this.state.valuesLoaded ? 'opacity-100' : 'opacity-0 translate-y-1' } w-full h-8/10 flex content-center gap-y-6 justify-center gap-x-6 flex-wrap mb-2 transition-all duration-200` }>
                    { this.state.values.map((value, i) => <Dice key={ `bigDice${ i }` } value={value} diceType="big" theme={ this.props.theme }></Dice>) }
                </div>
                <div className=" h-1/10 flex items-center">
                    <button type="button" onClick={ onesPresent ? () => this.onOnesLayout(ones, sixes) : ()=>{} } className={ `${ onesPresent ? 'schocken-ones cursor-pointer' : 'opacity-50 cursor-default' } rounded-full flex items-center justify-between w-full bg-theme-blue pl-6 pr-1 py-2` }>
                        <span className="text-xl sm:text-3xl md:text-4xl font-medium text-white">Einsen rauslegen</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={ 2 }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}