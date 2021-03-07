import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import React, { Component } from 'react';
  import { InputGroup, Input } from 'reactstrap';
  import * as actions from '../actions'

  
  //import connect for connection bet actions and reducers
import {connect} from 'react-redux'



 class Movies extends Component
{
    constructor(){
        super()
    }


    render(){

        return (
            // {this.showMovies(this.props)}
            <div className="m-3 text-center">
                  <Button color="info" 
                  onClick= {()=>{this.props.getMovies()}}
                  >Show Movies</Button>{' '}
                  {this.showMovies(this.props)}
                  {/* <div className=" my-3 alert alert-danger">no Movies are shown, press the button!!</div>   */}
                  <hr />
                 
            </div>
          )

    }


    showMovies({mList}){
        console.log("in show m function")
            if(mList){
             
              return mList.map((i)=>{
              
                return(
                  <div key={i.id}>
                    <Card>
            <CardBody>
              <CardTitle tag="h4">{i.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Year: {i.year}</CardSubtitle>
            
            </CardBody>
          </Card>
                  </div>
    
                )
    
              })
    
              }
    
            return <div className=" my-3 alert alert-danger">
            no Movies are shown</div>  
     
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
        this.props.getMovies();
      }
    }
    //this function will be called when redux is updated
    //maps redux state to component props
    const mapStateToProps =(state)=>{
      //state carry moviesList 
    console.log("state "+state)
    
    return {
      mList:state.moviesList
    }
    }
    
    //will add this functions to App container
    //I can not make a function and send null instead if the component don't want to be awareby updates == bb3tha lo m7tag 7aga fil state 
    // convert normal component to container using connect
    export default connect (mapStateToProps,actions)(Movies)
    

