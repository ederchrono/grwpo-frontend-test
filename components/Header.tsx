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
                
                {/*<!-- Latest compiled and minified boostrap CSS -->*/}
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />

            </Head>
        )
    }
}
