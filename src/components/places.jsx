import React, { Component } from 'react';
import Place from './place';
import PlaceDataService from '../services/place.service';

class Places extends Component {
    constructor(props) {
        super(props);
        //this.getAllPlaces = this.getAllPlaces.bind(this);

        this.state = { 
            places: []
        }
    }

         // Méthode appelée lors du rendu de l'instance du composant concerné
    async componentDidMount() {
        await this.getAllPlaces();
    }

    getAllPlaces() {
    PlaceDataService.getAll()
        .then(response => {
        this.setState({
            places: response.data
        });
        console.log(response.data);
        })
        .catch(e => {
        console.log(e.response);
        });
    }

    render() { 
        const { places } = this.state;

        return ( 
            <div>
                <div className="container">
                    Come and see our <span className="badge badge-primary">{places.length}</span> superb places to visit in Hawaii... 🌴. Just click to add and once again to cancel the adding.
                    <div className="row justify-content-md-center">
                            { places.map(place =>
                            <Place 
                            key={place.id}
                            place={place}
                            places={places} /> )}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Places;