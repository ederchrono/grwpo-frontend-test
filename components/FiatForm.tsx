import * as React from 'react'
import {
    FormGroup, FormControl, ControlLabel,
    HelpBlock, Checkbox, Button, Row, Col, Glyphicon
} from 'react-bootstrap'
import FormTitle from './FormTitle'

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

export default class FiatForm extends React.Component<{ xs: boolean }, {preferredContact:number, preferredPayment:number}>  {

    contStyle: any;

    constructor(props: any) {
        super(props);
        this.contStyle = styles.container;
        this.state = {
            preferredContact:1,
            preferredPayment:1
        }
        this.setPreferredContact = this.setPreferredContact.bind(this);
        this.setPreferredPayment = this.setPreferredPayment.bind(this);
    }

    private setPreferredContact(id:number){
        this.setState({
            preferredContact:id
        });
    }

    private setPreferredPayment(id:number){
        this.setState({
            preferredPayment:id
        });
    }

    public render() {

        this.contStyle.padding = '40px 10px';
        this.contStyle.width = '700px';
        this.contStyle.maxWidth = '100%';
        var preferredContact:number = this.state.preferredContact;
        var preferredPayment:number = this.state.preferredPayment;

        if (!this.props.xs) {
            //on big screens give more horizontal padding
            this.contStyle.padding = '40px 50px';
            this.contStyle.width = '80%';
            this.contStyle.maxWidth = 1200;
        }

        return (
            <div style={this.contStyle}>
                <form>
                    <Row>
                        <Col xs={12} sm={6}>
                            <FormGroup>
                                <ControlLabel>Modelo</ControlLabel>
                                <img className="customCaret" src="/static/down-arrow.svg" alt="" />
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Selecciona</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup>
                                <ControlLabel>Versión</ControlLabel>
                                <img className="customCaret" src="/static/down-arrow.svg" alt="" />
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Selecciona</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup>
                                <ControlLabel>Estado</ControlLabel>
                                <img className="customCaret" src="/static/down-arrow.svg" alt="" />
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Selecciona</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6}>
                            <FormGroup>
                                <ControlLabel>Distribuidor</ControlLabel>
                                <img className="customCaret" src="/static/down-arrow.svg" alt="" />
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Selecciona</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormTitle title="Datos personales" subtitle="Escribe tus datos personales" />

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

                    <Row>
                        <Col xs={12}>
                            <ControlLabel>Deseo ser contactado por</ControlLabel>
                        </Col>
                    </Row>
                    <div>
                        <div onClick={()=>this.setPreferredContact(1)} className={preferredContact===1?"btnSelect btnSelectLeft btnSelectActive":"btnSelect btnSelectLeft"}>
                            <Glyphicon glyph="earphone" />                            
                            <span>Teléfono</span>
                        </div>
                        <div onClick={()=>this.setPreferredContact(2)} className={preferredContact===2?"btnSelect btnSelectActive":"btnSelect"}>
                            <Glyphicon glyph="envelope" />                            
                            <span>Email</span>
                        </div>
                        <div style={ {float:'right', width:'34%'} } onClick={()=>this.setPreferredContact(3)} className={preferredContact===3?"btnSelect btnSelectRight btnSelectActive text":"btnSelect btnSelectRight text"}>
                            <span>Ambos</span>
                        </div>
                    </div>
                    


                    <FormTitle title="Forma de pago" subtitle="Personaliza tu cotización" />

                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <ControlLabel>Elije tu tipo de pago</ControlLabel>
                        </Col>
                        <Col xs={12} sm={8} smOffset={2}>
                            <div onClick={()=>this.setPreferredPayment(1)} className={preferredPayment===1?"btnSelect btnSelect50 text btnSelectLeft btnSelectActive":"btnSelect btnSelectLeft btnSelect50 text"}>
                                Contado
                            </div>
                            <div onClick={()=>this.setPreferredPayment(2)} className={preferredPayment===2?"btnSelect btnSelect50 text btnSelectActive":"btnSelect btnSelectRight btnSelect50 text"}>
                                Credito
                            </div>
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
                                <img className="customCaret" src="/static/down-arrow.svg" alt="" />
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">72 meses</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormTitle title="Comentarios" subtitle="Nos importan tus comentarios" />

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>¿Dudas? ¿Comentarios?</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Escríbenos" />
                    </FormGroup>


                    <div style={{ position: 'relative' }}>
                        <Checkbox>
                            He leído y acepto el <a href="#">aviso de privacidad</a>
                        </Checkbox>

                        <Checkbox>
                            No deseo recibir promociones
                        </Checkbox>

                        <Button className="hidden-xs" style={{ right: 0, position: 'absolute', bottom: 0 }} >Enviar</Button>

                    </div>

                    <Button className="visible-xs-block" style={{ margin: '0 auto' }} >Enviar</Button>


                </form>
            </div>

        )
    }
}

// component specific styles
const styles = {
    container: {
        zIndex: 1,
        backgroundColor: 'white',
        // height:1000,
        margin: '-30px auto 50px',
        width: '80%',
        maxWidth: 1200,
        overflowX: 'hidden',
        padding: '40px 10px',
    },
}