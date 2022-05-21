import React from 'react';
import Dice from './Dice';

export default class DiceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            valuesLoaded: false
        }
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
        }, 100);
    }

    onOnesLayout(ones, sixes) {
        this.props.handleOnes(ones, sixes);
        let sixesRemoved = [];
        let onesRemoved = [];
        if(sixes.length > 1) {
            sixesRemoved = this.state.values.filter(value => value !== 6);
            onesRemoved = sixesRemoved.filter(value => value !== 1);
        }
        else {
            onesRemoved = this.state.values.filter(value => value !== 1);
        }
        this.setState({ values: onesRemoved });
    }

    render() {
        let ones = this.state.values.filter(value => value === 1);
        let sixes = this.state.values.filter(value => value === 6);
        const onesPresent = ones.length > 0 || sixes.length > 1;
        return(
            <div className="w-full h-full">
                <div className={ `${ this.state.valuesLoaded ? 'opacity-100' : 'opacity-0 translate-y-1' } w-full h-4/6 md:h-5/6 flex content-center gap-y-6 justify-center gap-x-6 flex-wrap mb-2 transition-all duration-200` }>
                    { this.state.values.map((value, i) => <Dice key={i} value={value} diceType="big"></Dice>) }
                </div>
                {this.props.move < 3 && ones.length < 3 && this.props.currentOnes + ones.length < 3
                    ? <div className="h-2/6 md:h-1/6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-4">
                        <div onClick={ this.props.handleNewDiceRoll } className="border-4 text-2xl sm:text-3xl md:text-4xl border-sky-900 text-sky-900 hover:text-white hover:bg-sky-900 duration-200 transition-all cursor-pointer py-2 px-6 rounded-full text-center font-bold w-fit">Nochmal würfeln</div>
                        <div onClick={ onesPresent ? () => this.onOnesLayout(ones, sixes) : ()=>{} } className={ `${ onesPresent ? 'schocken-ones cursor-pointer' : 'opacity-50 cursor-default' } rounded-full py-2 pl-4 pr-2 flex items-center` }>
                            <span className="pb-1 text-2xl sm:text-3xl md:text-4xl font-medium">Einsen rauslegen</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    : <div className="h-2/6 md:h-1/6 flex items-center justify-center">
                        <div className="schocken-reload flex items-center justify-center cursor-pointer">
                            <div onClick={ this.props.newGame } className="text-2xl sm:text-3xl md:text-4xl font-bold pb-1 mr-4">Neues Spiel</div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                    </div>
                }
            </div>
        );
    }
}