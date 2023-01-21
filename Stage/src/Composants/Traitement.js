import React, { Component } from 'react';

class Traitement extends Component {
    constructor(props){
        super(props);
        this.state = {
            Colis: "",
            Volume: "",
            Amorcage: ""
        }  
     }
    
    //tonage 
    render() {
        function debarquement (props,prop){
            if(props === "Neuve" ){
                if(prop == 1){return 160}else
                if(prop == 2){return 200}else
                if(prop == 4){return 250}else
                if(prop == 6){return 300}else
                if(prop == 10){return 350}else
                if(prop == 11){return 400}
            }else {return "coming soon"}
        }

        const a = debarquement ();


       if(this.props.type ==="Neuve"){
        return (
            <div>
            <div className='form2'>
                <input className='desable' type="number" placeholder="Poids du colis" disabled/>
                <input className='desable' type="number" placeholder="Volume du véhicule" disabled/>
                <input className='desable' type='number' placeholder="Taux d'amorçage (en %)" disabled/>
             </div>

            <div className='form3'>
                <Neuve type={props.type} nombre={props.nombre}/>
            </div>
             
             
        </div>
        );
       }
       else{
        return(
            <div className='form2'>
                <input type="number" placeholder="Poids du colis"/>
                <input type="number" placeholder="Volume du véhicule"/>
                <input type='number' placeholder="Taux d'amorçage (en %)"/>
            </div>)

       }
    }
}

export default Traitement;