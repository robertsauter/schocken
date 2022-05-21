import React from 'react';
import Dice from './Dice';

export default class DiceWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }

    componentDidMount() {
        let newValues = [];
        for(let i = 0; i < this.props.diceAmount; i++) {
            newValues.push(6);
        }
        this.setState({ values: newValues });
    }

    render() {
        const ones = this.state.values.filter(value => value === 1);
        const sixes = this.state.values.filter(value => value === 6);
        return(
            <div className="w-full h-full">
                <div className="w-full h-5/6 flex items-center justify-center gap-x-6 flex-wrap">
                    { this.state.values.map((value, i) => <Dice key={i} value={value}></Dice>) }
                </div>
                <div className="h-1/6 bg-gray-200 flex items-center justify-around">
                    <div onClick={ () => this.props.handleOnes(ones, sixes) } className={ `${ ones.length > 0 || sixes.length > 1 ? '' : 'opacity-50' } bg-sky-900 text-white p-2 rounded-full` }>Einsen rauslegen</div>
                    <div className="bg-red-900 text-white p-2 rounded-full">Nochmal würfeln</div>
                </div>
            </div>
        );
    }
}