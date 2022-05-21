export default function RevealButton(props) {
    return (<div onClick={ props.handleClick } className="hover:text-sky-900 hover:-translate-y-2 duration-200 transition-all cursor-pointer w-full h-full flex items-center justify-center text-5xl sm:text-8xl md:text-9xl font-bold">
        Aufdecken
    </div>);
}