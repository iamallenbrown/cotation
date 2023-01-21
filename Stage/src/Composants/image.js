import React, {Component} from 'react';
import '../css/image.css';
import picture from './madagascar-port-1.jpg'

export class Image extends Component{
    render(){
        return(

            <div class="picturebox">
                <img src={picture} alt=""/>
                <h3>Neuve</h3>
            </div>

        )
    }
}

export default Image;
 