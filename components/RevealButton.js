export default function RevealButton(props) {
    const themes = {
        light: 'text-black hover:text-sky-900',
        dark: 'text-white hover:text-sky-200'
    }
    return (<div onClick={ props.handleClick } className={ `${ themes[props.theme] } h-4/6 md:h-5/6 hover:-translate-y-2 duration-200 transition-all cursor-pointer w-full flex items-center justify-center text-5xl sm:text-8xl md:text-9xl font-bold` }>
        Aufdecken
    </div>);
}