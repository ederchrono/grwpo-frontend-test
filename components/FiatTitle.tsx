import * as React from 'react'

export default class FiatTitle extends React.Component<{}, {}>  {

    public render() {
        return (
            <div style={styles.container}>
                <h3 style={styles.titleSmall}>
                    Cotizador
                </h3>
                <div>
                    <h2 style={styles.titleMedium} className='subtitleFont'>
                        Citadino, aventurero, deportivo
                    </h2>
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
    },
    titleBig:{
        color: '#FFFFFF',
        fontSize: 70,        
    },
    titleBigMobile:{
        color: '#FFFFFF',
        fontSize: 50,        
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