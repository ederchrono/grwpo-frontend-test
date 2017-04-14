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
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
                    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
                }
                
                /* FORM */
                
                .formTitle{
                    color: red;
                    text-align: center;
                }
                .formSubtitle{
                    text-align:center;
                    text-transform:uppercase;
                    font-size:10px;
                }

                .form-control{
                    border-color:red;
                    border-radius: 0;
                    text-transform: uppercase;
                    font-size:11px;
                }
                .form-control:focus{
                    border-color:red;
                    box-shadow: none;
                }
                .customCaret{
                    width:10px;
                    height:10px;
                    position: absolute;
                    right: 25px;
                    bottom: 25px;
                    pointer-events:none;
                }
                select{
                    -webkit-appearance: none; 
                    -moz-appearance: none; 
                    -ms-appearance: none; 
                    -o-appearance: none; 
                    appearance: none
                }
                select::-ms-expand {
                    display: none;
                }
                label{
                    color: rgba(0,0,0,.5);
                    text-transform: uppercase;
                    font-size: 12px;
                    padding-left: 5px;
                }

                textarea.form-control{
                    height: 200px;
                    resize: none;
                    margin-bottom: 50px;
                }
                
                button.btn.btn-default{
                    border-radius: 0;
                    border-color:red;
                    text-transform: uppercase;
                    letter-spacing: 5px; 
                    font-size: 13px;
                    font-weight: 900;
                    padding: 10px 40px;                   
                }

                
                .checkbox label{
                    text-transform: none;
                    color: black;
                }

                .checkbox label a{
                    text-decoration: underline;
                    color: black;
                }

                .btnSelect{
                    border-color:red;
                    border-width: 1px;
                    border-style: solid;
                    background-color: white;
                    color: black;
                    padding: 10px;
                    text-align: center;
                    width:33%;
                    display: inline-block;
                    cursor: pointer;
                    margin-top: 0px;
                    margin-bottom: 30px;
                    transition: background-color 0.3s, color 0.2s;
                    min-height:39px;
                }
                .btnSelect span {
                    margin: 0 20px 5px;
                }
                @media (max-width: 506px) {
                    .btnSelect{
                        height:54px;
                    }
                    .btnSelect.text{
                        line-height: 3;
                    }
                    .btnSelect span {
                        margin: 0 40px 5px;
                    }
                }
                @media (max-width: 450px) {
                    .btnSelect span {
                        margin: 0 20px 5px;
                    }
                }
                .btnSelect50{
                    width: 50%;
                }
                .btnSelectLeft{
                    border-right: none;
                }
                .btnSelectRight{
                    border-left: none;
                }
                .btnSelectActive{
                    background-color: red;
                    color: white;
                }
                


                `}</style>

            </Head>
        )
    }
}
