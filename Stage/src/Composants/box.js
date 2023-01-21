import React, {Component} from 'react';
import '../css/box.css';
import Cards from './cards.js';

export class Box extends Component{
    render(){
        return(
            <div class="box">
                <Cards/>
            </div>

        )
    }
}

export default Box;
