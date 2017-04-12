import * as React from 'react'
import Header from '../components/Header'
import Link from 'next/link';
import MyComponent from '../components/MyComponent'
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

function handleSelect(eventKey) {
  event.preventDefault();
  alert(`selected ${eventKey}`);
}

export default () => 
  <div>
    <Header/>
    <h1>Hello world!</h1>
    <Nav bsStyle="tabs" activeKey="1" onSelect={handleSelect}>
      <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
      <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
      <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
      <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
        <MenuItem eventKey="4.1">Action</MenuItem>
        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <MyComponent />
    <div>Click <Link href={{ pathname:'single', query:{ id:1 } }}><a>here</a></Link> to read more</div>        
  </div>