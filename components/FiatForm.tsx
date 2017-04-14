import * as React from 'react'
import {FormGroup, FormControl, ControlLabel, 
    HelpBlock, Checkbox, Button, Row, Col} from 'react-bootstrap'

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export default class FiatForm extends React.Component<{xs:boolean}, {}>  {

    contStyle:any;

    constructor(props:any){
        super(props);
        this.contStyle = styles.container;
        
    }

    public render() {

        this.contStyle.padding = '40px 10px';

        if(!this.props.xs){
            //on big screens give more horizontal padding
            this.contStyle.padding = '40px 50px';
        }

        return (
            <div style={this.contStyle}>
                <form>
                    <Row>
                        <Col xs={12} sm={6}>
                            <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Modelo</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Selecciona</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Versión</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Selecciona</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Estado</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Selecciona</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Distribuidor</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Selecciona</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>


                    <div>
                        <h2 className="formTitle titleFont" >Datos personales</h2>
                        <p className="formSubtitle" >Escribe tus datos personales</p>
                    </div>

                    <Row>
                        <Col xs={12} sm={4}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Nombre (s)"
                            placeholder="Escribe tu nombre"
                            />                        
                        </Col>
                        <Col xs={12} sm={4}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Apellido paterno"
                            placeholder="Escribe tu apellido"
                            />                        
                        </Col>
                        <Col xs={12} sm={4}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Apellido materno"
                            placeholder="Escribe tu apellido"
                            />                        
                        </Col>
                        <Col xs={12} sm={4}>
                            <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email"
                            placeholder="correo@email.com.mx"
                            />                        
                        </Col>
                        <Col xs={12} sm={4}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Teléfono"
                            placeholder="01.844.439.0654"
                            />                                
                        </Col>
                    </Row>


                    <FormGroup>
                        <ControlLabel>Deseo ser contactado por</ControlLabel>
                    </FormGroup>
                    <Row>
                        <Col xs={4}>
                            {/*icon*/}
                            Teléfono
                        </Col>
                        <Col xs={4}>
                            {/*icon*/}
                            Email
                        </Col>
                        <Col xs={4}>
                            {/*icon*/}
                            Ambos
                        </Col>
                    </Row>

                    
                    <div>
                        <h2 className="formTitle titleFont" >Forma de pago</h2>
                        <p className="formSubtitle">Personaliza tu cotización</p>
                    </div>

                    <Row>
                        <Col xs={6} md={4} mdOffset={2}>
                            Contado
                        </Col>
                        <Col xs={6} md={4}>
                            Crédito
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={6} md={4} mdOffset={2}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Cantidad de enganche"
                            placeholder="80,000.00"
                            />     
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Plazo</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">72 meses</option>
                                <option value="other">...</option>
                            </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>

                    <div>
                        <h2 className="formTitle titleFont" >Comentarios</h2>
                        <p className="formSubtitle">Nos importan tus comentarios</p>
                    </div>

                    <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>¿Dudas? ¿Comentarios?</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Escríbenos" />
                    </FormGroup>


                    <div style={ {position:'relative'} }>
                        <Checkbox>
                            He leído y acepto el <a href="#">aviso de privacidad</a>
                        </Checkbox>

                        <Checkbox checked>
                            No deseo recibir promociones
                        </Checkbox>

                        <Button style={ {right:0, position:'absolute', bottom:0} } >Enviar</Button>
                        
                    </div>



                </form>
            </div>
            
        )
    }
}

// component specific styles
const styles = {
    container:{
        zIndex:1,
        backgroundColor:'white',
        // height:1000,
        margin: '-30px auto 50px',
        width:700,
        maxWidth: '100%',
        overflowX: 'hidden',
        padding: '40px 10px',
    },
}