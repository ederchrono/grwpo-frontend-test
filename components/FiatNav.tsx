import * as React from 'react'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'

export default class FiatNav extends React.Component<{}, {}>  {

    public render() {
        return (
            <Navbar style={styles.navbar} collapseOnSelect>
                <div style={ {maxWidth:800, margin: '0 auto'} } >
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img style={styles.logo} src="/static/logo.png" alt="Fiat logo"/>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle  style={styles.menu} />
                    </Navbar.Header>
                    <Navbar.Collapse style={ { borderColor:'rgba(0,0,0,0)' } }>
                        
                        <div className="visible-md-block visible-lg-block">    
                            <Nav style={styles.nav}>
                                <NavItem style={styles.menuDesktop} eventKey={1} href="#">Modelos</NavItem>
                                <NavItem style={styles.menuDesktopLg} eventKey={2} href="#">Prueba de manejo</NavItem>
                                <NavItem style={styles.menuDesktop} eventKey={3} href="#">Cotizar</NavItem>
                                <NavItem style={styles.menuDesktop} eventKey={4} href="#">Promociones</NavItem>
                                <NavItem style={styles.menuDesktop} eventKey={5} href="#">Distribuidores</NavItem>
                            </Nav>
                        </div>

                        <div className="visible-sm-block">
                            <Nav style={styles.nav}>
                                <NavItem style={styles.menuTablet} eventKey={1} href="#">Modelos</NavItem>
                                <NavItem style={styles.menuTabletLg} eventKey={2} href="#">Prueba de manejo</NavItem>
                                <NavItem style={styles.menuTablet} eventKey={3} href="#">Cotizar</NavItem>
                                <NavItem style={styles.menuTablet} eventKey={4} href="#">Promociones</NavItem>
                            </Nav>
                        </div>

                        <div className="visible-xs-block">
                            <Nav>
                                <NavItem style={styles.menuMobile} eventKey={1} href="#">Modelos</NavItem>
                                <NavItem style={styles.menuMobile} eventKey={2} href="#">Prueba de manejo</NavItem>
                                <NavItem style={styles.menuMobile} eventKey={3} href="#">Cotizar</NavItem>
                                <NavItem style={styles.menuMobile} eventKey={4} href="#">Promociones</NavItem>
                                <NavItem style={styles.menuMobile} eventKey={5} href="#">Distribuidores</NavItem>
                            </Nav>
                        </div>
                    
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

// component specific styles
const styles = {
    navbar:{
        borderRadius: 0,
    },
    nav:{
        width: 'calc( 100% - 134px )'
    },
    menu:{
        borderColor:'rgba(0,0,0,0)',
    },
    menuDesktop:{
        width: '17.5%',
    },
    menuDesktopLg:{
        width: '25%',
    },
    menuTablet:{
        width: '20%',
    },
    menuTabletLg:{
        width: '30%',
    },
    menuMobile:{
        width: '100%',
    },
    logo:{
        marginTop:-27,
        zIndex:99,
    }
}