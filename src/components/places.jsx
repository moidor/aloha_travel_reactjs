import React, { Component } from 'react';
import Place from './place';
import PlaceDataService from '../services/place.service';
//import MyModal from '../components/common/modal';
import Pagination from './common/pagination';
import { paginate } from './../utils/paginate';

class Places extends Component {
    constructor(props) {
        super(props);
        //this.getAllPlaces = this.getAllPlaces.bind(this);
        this.state = { 
            places: [],
            currentPage: 1,
            pageSize: 5
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

    handlePageChange = page => {
        this.setState({ currentPage: page});
    };

    availablePlaces() {
        const lengthPlaces = this.state.places.filter(place => place.available === true );
        return lengthPlaces.length;
    } 

    render() { 
        const { currentPage, pageSize, places } = this.state;
        const { length: count } = this.state.places;
        if (count === 0) return <p>La base de données ne s'est pas chargée ou est vide.</p>
        
        const allPlaces = paginate(places, currentPage, pageSize);

        return ( 
            <div>
                <div className="container">
                    {/* <MyModal /> */}
                    Venez découvrir nos <span className="badge badge-primary">{this.availablePlaces()}</span> magnifiques sites touristiques à Hawaï... 🌴
                    <div className="row justify-content-md-center">
                            { allPlaces.map(place =>
                            <Place 
                            key={place.id}
                            placeParentComponent={place}
                            places={places} /> )}
                            
                    </div>
                </div>
                <Pagination 
                    itemsCount={count} 
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange} 
                />
            </div>
         );
    }
}
 
export default Places;