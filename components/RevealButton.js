export default function RevealButton(props) {
    const themes = {
        light: 'text-theme-dark-blue bg-theme-blue',
        dark: 'text-white bg-theme-orange'
    }
    return (<div onClick={ props.handleClick } className="cursor-pointer w-full h-full flex items-center justify-center">
        <div className={ `${ themes[props.theme] } animate-popUp w-60 h-60 xs:w-72 xs:h-72 sm:w-full sm:h-full flex justify-center items-center rounded-full active:scale-105 duration-75 transition-transform ease-in` }>
            <button type="button" className="text-4xl xs:text-5xl sm:text-8xl md:text-9xl font-bold text-white">Aufdecken</button>
        </div>
    </div>);
}