import React, { Component } from 'react'; 
import { Table ,Button} from 'react-bootstrap';
import Hobbies from './hobbies';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 import TableRow from './TableRow';
 import axios from 'axios';

import {Container,Row,Col} from 'react-bootstrap';
class App extends Component{
 
    constructor(props) {
        super(props);
      this.state={
        Username:[],
        name:'',
      }
      }

   
 
    componentDidMount(){
      axios.get('http://localhost:8081/api/users')
        .then(response => {
          this.setState({ Username: response.data });
       
        })
        .catch(function (error) {
          console.log(error);
        })

    }
    tabRow(){
      return this.state.Username.map(function(object, i){

          return <TableRow obj={object} key={i} />;
      });
 

    }

changeHandler=(e)=>{
this.setState({[e.target.name]:e.target.value})
}
submitHandler=(e)=>
{
  
      const obj = {
        name: this.state.name,
      };

      axios.post('http://localhost:8081/api/user', obj)
          .then(res =>{ 

         
            this.componentDidMount();
          });
}


    render(){ 
const {name}=this.state
        return (
           <>
           <Container>
             <h1> React App</h1>
  <Row>
    <Col  sm={4}>

      <form  onSubmit={this.submitHandler}>
      
    <input style={{width:"80%"}} placeholder="name" name='name' value={name} onChange={this.changeHandler}/>
              <Button variant="primary" type="submit">Add</Button>
 </form>
 <Table  striped bordered hover>
 <thead >

              
        
            </thead>
          
            <tbody>{this.tabRow()}
            
            
            </tbody>
          </Table></Col>
    <Col sm={8} > <Hobbies></Hobbies></Col>
  </Row>
 
</Container>
            
         
          </>
   )
    }
}
export default App;