import React from 'react';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup,FormControl} from 'react-bootstrap';

function Hobbies (props){



return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr  >
 
        <th ><InputGroup className="mb-3">
    <FormControl
      placeholder="Enter User Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

  </InputGroup></th>
        <th><InputGroup className="mb-3">
    <FormControl
      placeholder="Enter User Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

  </InputGroup></th>
        <th><InputGroup className="mb-3">
    <FormControl
      placeholder="Enter User Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

  </InputGroup></th>
        <th className="w-auto p-3 "><Button variant="primary">Add</Button>{' '}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>Passion:Low</td>
        <td>Watching TV</td>
        <td>Since 1996</td>
        <td> <Button variant="danger">Delete</Button></td>
      </tr>
      <tr>
        
      <td>Passion:High</td>
        <td>Reading Books</td>
        <td>Since 2010</td>
        <td> <Button variant="danger">Delete</Button></td>
      </tr>
      <tr>
     
      <td>Passion:Medium</td>
        <td>Excercising</td>
        <td>Since 2016</td>
        <td> <Button variant="danger">Delete</Button></td>
      </tr>
      <tr>
     
     <td>Passion:Low</td>
       <td>Playing Cricket</td>
       <td>Since 2002</td>
       <td> <Button variant="danger">Delete</Button></td>
     </tr>
       
    </tbody>
  </Table>
  </>
)

}
export default Hobbies;