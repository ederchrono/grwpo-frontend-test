import * as React from 'react'
import Head from 'next/head'

interface HeaderProps{
    title?: string
}

interface HeaderState{
    title: string
}

export default class Header extends React.Component<HeaderProps, HeaderState>  {

    public static defaultProps: Partial<HeaderProps> = {
        title: "My App"
    };

    constructor(props : HeaderProps){
        super(props);
        // set initial state
        this.state= { title: this.props.title };
    }

    public render() {
        return (
            <Head>
                <title>{this.state.title}</title>
                
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                
                {/*Latest compiled and minified boostrap CSS*/}
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />

                {/*import google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i|Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet" />

                {/*Global styles*/}
                <style>{`
                body { 
                    background: #FF0000;
                    font: 12px Lato;
                    font-weight: 900;
                }
                .navbar-default .navbar-toggle .icon-bar{
                    background-color: #CD2F32;
                }
                .navbar-default .navbar-nav>li>a{
                    text-transform: uppercase;
                    color: #000000;
                    text-align: center;
                }
                .titleFont{
                    font-family: Playfair Display;
                    font-weight: 900;
                    font-style: italic;
                }
                .subtitleFont{
                    font-family: Playfair Display;
                    font-weight: 700;
                }
                .trapezoid{
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 67%, 0% 100%);
                    clip-path: polygon(0 0, 100% 0, 100% 67%, 0% 100%);
                }
                `}</style>

            </Head>
        )
    }
}
