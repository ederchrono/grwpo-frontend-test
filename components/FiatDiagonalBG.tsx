import * as React from 'react'

export default class FiatDiagonalBG extends React.Component<{color:string}, {}>  {

    styleBG:any;

    constructor(props:any){
        super(props);

        this.styleBG={
            width:'100%',
            position: 'absolute',
            height: 800,
            top: 0,
            backgroundColor: props.color,
            zIndex:-1,
        }
    }

    public render() {
        return (
            <div style={ {width:'100%', overflow:'hidden'} }>
                <div className="trapezoid" style={ this.styleBG }></div>
            </div>
        )
    }
}

