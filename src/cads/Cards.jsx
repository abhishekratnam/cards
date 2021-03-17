import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/burger.png';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            
            <div className="col-md-4">
            <Card imgsrc={img1} title="Console"/>
            </div>

            <div className="col-md-4">
            <Card imgsrc={img1} title="Playground"/>
            </div>

            <div className="col-md-4">
            <Card imgsrc={img1} title="Adventure"/>
            </div>

            </div>
            </div>
        );
    }
}
export default Cards;