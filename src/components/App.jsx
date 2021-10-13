import React, { Component } from "react";
import Countdown from "./Countdown";
import './App.css'

export default class App extends Component{
    render(){
        return(
            <div>                
                <Countdown />
                <div>
                    <div className='social'>
                       <a href="#"> <i class="fab fa-facebook-square"></i></a>
                       <a href="#"> <i class="fab fa-pinterest"></i></a>
                       <a href="#"> <i class="fab fa-instagram"></i></a>
                    </div>
                </div>
             </div>
        )
    }
}