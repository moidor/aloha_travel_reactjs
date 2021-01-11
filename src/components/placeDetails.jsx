import React, { Component } from 'react';
import PlaceDataService from '../services/place.service';

class PlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPlace: {
                id: null,
                name: '',
                island: '',
                image: '',
                description: '',
                longDescription: '',
                //gallery: '',
                price: 0,
                available: false
            }
         }
    }

    componentDidMount() {
        this.getPlace(this.props.match.params.id);
    }

    getPlace(id) {
        PlaceDataService.get(id)
          .then(response => {
            this.setState({
              currentPlace: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e.response);
          });
    }

    render() { 
        const { history } = this.props;
        const { currentPlace } = this.state;

        return ( 
            <React.Fragment>
                <div className="jumbotron">
                    <h1 className="display-3">{currentPlace.name}</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                    calling extra attention to featured content or information.</p>
                    <hr className="my-2"/>
                    <p>{currentPlace.longDescription}</p>
                    <p className="lead">
                        {/* Ajouter un toast.success pour indiquer que le site a été reservé par le client avec succès et un toast.info/error s'il le retire */}
                        <button className="btn btn-primary" 
                                onClick={() => history.push("/places")}>
                            Ajouter cette destination
                        </button>
                    </p>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default PlaceDetails;