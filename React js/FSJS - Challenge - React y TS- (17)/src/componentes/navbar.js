import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import  {Padre}  from './hijo' 
import  {GroupExample}  from './body' 
import { Tablets } from './tablets';
import { Celulares } from './celulares';


export function JustifiedExample() {
    return(
        <>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        <Padre  />
      </Tab>
      <Tab eventKey="Televisores" title="Televisores  ">
        <GroupExample/>
      </Tab>
      <Tab eventKey="Celulares" title="Celulares">
        <Tablets />
      </Tab>
  
      <Tab eventKey="contact" title="Tablets" >
        <Celulares />
      </Tab>
    </Tabs>

  
  </>
  );
}