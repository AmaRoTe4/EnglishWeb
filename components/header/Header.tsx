/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Script from "next/script";

//import Icon from "pictures/icon.png"

interface Props{
    Title:string;
}

export default function Header({Title = "Titulo"}:Props):JSX.Element{
    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>

                <title>{Title}</title>

                {/*<link rel="icon" type="image/png" href='pictures/icon.png' />*/}

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <Script src="main.js" strategy="lazyOnload"></Script>
        </>
    )
}