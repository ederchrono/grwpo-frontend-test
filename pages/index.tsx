import * as React from 'react'
import Header from '../components/Header'
import FiatNav from '../components/FiatNav'

function handleSelect(eventKey) {
  event.preventDefault();
  alert(`selected ${eventKey}`);
}

export default () => 
  <div>
    <Header title="Fiat - Cotizador"/>
    <FiatNav />
  </div>