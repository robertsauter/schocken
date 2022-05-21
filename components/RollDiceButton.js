export default function RollDiceButton(props) {
    return (<div onClick={ props.handleClick } className="w-full h-full flex items-center justify-center text-4xl font-bold">
        Würfel werfen
    </div>);
}