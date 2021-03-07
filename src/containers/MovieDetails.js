import {
    Card,  CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import React, { Component } from 'react';
  import { InputGroup, Input } from 'reactstrap';
  import * as actions from '../actions'

  
  //import connect for connection bet actions and reducers
import {connect} from 'react-redux'



 class MovieDetails extends Component
{
    constructor(){
        super()
        this.state={

            movieId:0,
        }
    }


    render(){

        return (
            
            <div className="m-3 text-center">
               
                  <label  className="text-left" >Search for Movie:</label>
                  <InputGroup>
              <Input placeholder="enter the movie ID" type="number"
              //  value={this.state.movieId}
                onChange={(e)=>{this.state.movieId=parseInt(e.target.value)}}
              defaultValue={this.state.movieId}
            //  readOnly={false}
               />
               </InputGroup>
              <Button color="info" 
           
                   onClick= {()=>{
                    console.log("id "+this.state.movieId) 
                    this.props.getMovieById(this.state.movieId);
                    // this.setState({id:this.state.movieId})
                  }}
                  >Search</Button>{' '}
             
            
            <br />
            
            
                  <div>
                  {this.showDetails(this.props)}
                  </div>
            </div>
          )

    }


    showDetails({mDetails}){
        
            if(mDetails){
              console.log("in show details function "+this.mDetails)
            
              
                return(
                  <div key={mDetails.id}>
                    <Card>
            <CardBody>
              <CardTitle tag="h4">{mDetails.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {mDetails.year}</CardSubtitle>
            
            </CardBody>
          </Card>
                  </div>
    
                )
    
              }
    
              
    
            return <div className=" my-3 alert alert-danger">
            not defined id</div>  
     
      }


      componentDidMount(){
        //props will have get movies as we added all actions to App
        console.log("2- init props (intial state,actions)");
        console.log(this.props);
        //on calling action update will performed
        
         
      }
      componentDidUpdate(){
        console.log("5- component state is updated ")
     console.log ("in did update "+this.props)
    //  this.props.getMovieById(this.state.movieId);
      }
    }
    //this function will be called when redux is updated
    //maps redux state to component props
    const mapStateToProps =(state)=>{
      //state carry moviesList 
    console.log("state "+state)
    
    return {
      mDetails:state.details
    }
    }
    
    //will add this functions to App container
    //I can not make a function and send null instead if the component don't want to be awareby updates == bb3tha lo m7tag 7aga fil state 
    // convert normal component to container using connect
    export default connect (mapStateToProps,actions)(MovieDetails)
    

