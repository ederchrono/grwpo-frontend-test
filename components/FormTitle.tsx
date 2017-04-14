import * as React from 'react'

export default class FormTitle extends React.Component<{title:string, subtitle:string}, {}>  {

    constructor(props){
        super(props);
    }

    public render() {
        return (
            <div>
                <div style={styles.container}>
                    <div className="hidden-xs" style={styles.line}></div>
                    <div style={styles.titleContainer}>
                        <h2 className="hidden-xs formTitle titleFont" style={styles.title} >
                            {this.props.title}
                        </h2>

                        <h2 className="visible-xs-inline-block formTitle titleFont" style={styles.titleMobile} >
                            {this.props.title}
                        </h2>
                    </div>
                </div>
                <div>
                    <p className="formSubtitle" >{this.props.subtitle}</p>
                </div>
            </div>
        )
    }
}

const styles={
    container:{
        padding: '0 20px'
    },
    line:{
        position:'relative',
        transform:"translateY(39px)",
        width: '100%',
        height:1,
        backgroundColor:'red',
        zIndex:1,
    },
    titleContainer:{
        position: 'relative',
        display: 'inline-block',
        padding: '0 15px',
        backgroundColor: 'white',
        zIndex: '2',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
    },
    title:{
        display: 'inline-block',
        position: 'relative',
        margin: '20px auto 0',
    },
    titleMobile:{
        display: 'inline-block',
        position: 'relative',
        margin: '20px auto 0',
        minWidth:320,
    }
}
