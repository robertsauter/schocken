import React from 'react';
import Dice from './Dice';

export default class DiceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
        }
    }

    componentDidMount() {
        let newValues = [];
        for(let i = 0; i < this.props.diceAmount; i++) {
            const min = Math.ceil(1);
            const max = Math.floor(7);
            newValues.push(Math.floor(Math.random() * (max - min) + min));
        }
        this.setState({ values: newValues });
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
                <div className="w-full h-5/6 flex items-center justify-center gap-x-6 flex-wrap">
                    { this.state.values.map((value, i) => <Dice key={i} value={value} diceType="big"></Dice>) }
                </div>
                {this.props.move < 3 && ones.length < 3
                    ? <div className="h-1/6 flex items-center justify-around">
                        <div onClick={ onesPresent ? () => this.onOnesLayout(ones, sixes) : ()=>{} } className={ `${ onesPresent ? '' : 'opacity-50' } bg-sky-900 text-white p-2 rounded-full` }>Einsen rauslegen</div>
                        <div onClick={ this.props.handleNewDiceRoll } className="bg-red-900 text-white p-2 rounded-full">Nochmal würfeln</div>
                    </div>
                    : <div className="h-1/6 flex items-center justify-center">
                        <div onClick={ this.props.newGame } className="bg-sky-900 text-white p-2 rounded-full">Neues Spiel</div>
                    </div>
                }
            </div>
        );
    }
}