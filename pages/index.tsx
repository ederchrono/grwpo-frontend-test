import * as React from 'react'
import Header from '../components/Header'
import FiatNav from '../components/FiatNav'
import FiatDiagonalBG from '../components/FiatDiagonalBG'
import FiatTitle from '../components/FiatTitle'
import FiatForm from '../components/FiatForm'

function handleSelect(eventKey) {
  event.preventDefault();
  alert(`selected ${eventKey}`);
}

export default () => 
  <div>
    <Header title="Fiat - Cotizador"/>
    <FiatNav />
    <FiatDiagonalBG color="#4957D1"/>
    <FiatTitle />
    <FiatForm />
  </div>