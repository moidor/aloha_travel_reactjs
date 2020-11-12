import React, { Component } from 'react';
import MonCarousel from './common/monCarousel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>Bienvenue sur Aloha Travel, l'agence de voyage pour planifier votre séjour inoubliable à Hawaï...🌴</p>
                <MonCarousel />
            </div>
       );
    }
}
 
export default Home;