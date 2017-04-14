import * as React from 'react'

export default class FiatTitle extends React.Component<{}, {}>  {

    public render() {
        return (
            <div style={styles.container}>
                <h3 style={styles.titleSmall}>
                    Cotizador
                </h3>
                <div style={styles.titleMediumContainer}>
                    <div className="hidden-xs" style={styles.line}></div>
                    <div className="hidden-xs" style={styles.titleMediumCenter}>
                        <h2 style={styles.titleMedium} className='subtitleFont'>
                            Citadino, aventurero, deportivo
                        </h2>
                    </div>
                    <div className="visible-xs-block" style={styles.titleMediumCenterMobile}>
                        <h2 style={styles.titleMedium} className='subtitleFont'>
                            Citadino, aventurero, deportivo
                        </h2>
                    </div>
                </div>
                <h1 style={styles.titleBig} className='titleFont hidden-xs' >
                    Elige el tuyo
                </h1>
                <h1 style={styles.titleBigMobile} className='titleFont visible-xs-block' >
                    Elige el tuyo
                </h1>
                <img className="hidden-xs" style={styles.car} src="/static/car.png" alt="Fiat car"/>
                <img className="visible-xs-inline" style={styles.carMobile} src="/static/car.png" alt="Fiat car"/>
            </div>
            
        )
    }
}

// component specific styles
const styles = {
    container:{
        textAlign:'center',
        fontFamily: 'Lato',
        marginTop: 30,
        zIndex:2
    },
    line:{
        position:'relative',
        transform:"translateY(8px)",
        width: '65%',
        marginLeft: '17.5%',
        height:1,
        backgroundColor:'black',
        zIndex:1,
    },
    titleMediumContainer:{
        maxWidth: '100%',
        width: 640,
        margin: '0 auto',
    },
    titleMediumCenter:{
        position: 'relative',
        display: 'inline-block',
        padding: '0 15px',
        backgroundColor: '#4957D1',
        zIndex: '2',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
    },
    titleMediumCenterMobile:{
        position: 'relative',
        display: 'inline-block',
        padding: '0 15px',
        backgroundColor: '#4957D1',
        zIndex: '2',
    },
    titleSmall:{
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontSize: 10,
        letterSpacing: 3,
    },
    titleMedium:{
        textTransform: 'uppercase',        
        color: '#000000',
        fontSize: 12,
        letterSpacing: 2,
        marginBottom: 0,
        marginTop: 0,
    },
    titleBig:{
        color: '#FFFFFF',
        fontSize: 70,
        marginTop:0,
    },
    titleBigMobile:{
        color: '#FFFFFF',
        fontSize: 50,
        marginTop:0,
    },
    car:{
        maxWidth: '85%',
        marginTop: -25,
        marginLeft: -10,
        width: 300,
    },
    carMobile:{
        maxWidth: '70%',
        marginTop: -10,
    }
}