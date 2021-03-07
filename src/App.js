// imports
//import React from 'react';

//import { Button } from 'reactstrap';


import React, { Component } from 'react';


import Movies from './containers/Movies'
import MovieDetails from './containers/MovieDetails'

//define app container
//this will represent a container that will join between actions and reducers 
 export default class App extends Component{


  render(){
    return (
      <div>
          <Movies />
          <MovieDetails />
           
      </div>
  )
   
  }

 }
 

 












// const App = ()=>{
//   return (
//     <div>
//       <Button color="info">Show Movies</Button>{' '}
//      <h1>hello from app</h1>  
//     </div>
//   )
// }




