import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";

export default function Imprint(props) {
    return(
        <div>
            <Head>
                <title>Impressum</title>
                <meta name="theme-color" content="#0c4a6e" />
            </Head>
            <main className="p-10 bg-theme-dark-blue h-screen">
                <Link href="/">
                    <a className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                    </a>
                </Link>
                <div className="mt-10 text-white">
                    <p>Gemacht von Robert Sauter</p>
                    <p>Diese Seite erfasst oder verarbeitet keinerlei Daten!</p>
                    <p>Icons von: <a href="https://heroicons.com/" target="_blank" rel="noreferrer">heroicons.com</a></p>
                    <p>Icon und einige Abbildungen erstellt mithilfe von: <a href="https://app.haikei.app/" target="_blank" rel="noreferrer">app.haikei.app</a></p>
                    <p>Öffentliches repository: <a href="https://github.com/robertsauter/schocken" target="_blank" rel="noreferrer">github.com</a></p>
                </div>
            </main>
        </div>
    );
}