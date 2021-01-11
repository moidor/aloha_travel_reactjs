import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/place.css';

class Place extends Component {
    state = { isClicked: false }

    changeClass = () => {
        this.setState(prevState => ({ isClicked: !prevState.isClicked }));
    };

    render() {
        const { id, name, island, image, description, price } = this.props.placeParentComponent;
        const { isClicked } = this.state;

        return ( 
            <React.Fragment>
                <div className="card mt-3 mr-5 mb-2">
                    <img className="card-img-top" src={image === '' || null ? 'https://cdn.pixabay.com/photo/2012/10/26/02/31/hawaii-63111_1280.jpg' : image} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to={`/places/details/${id}`}>{name}</Link>
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted">Île : {island}</h6>
                        <p className="card-text">👉{description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-around align-items-baseline">
                        <button onClick={this.changeClass} 
                        className={`${!isClicked ? 'btn btn-primary' : 'btn btn-success'}`}>
                            { !isClicked ? 'Réserver' : 'Ajouté'}
                        </button>
                        <p>Prix : {`${price === 0 ? 'Gratuit' : price + " €"}`}</p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Place;