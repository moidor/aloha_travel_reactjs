import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/place.css';

class Place extends Component {
    state = { isClicked: false }

    changeClass = () => {
        this.setState(prevState => ({ isClicked: !prevState.isClicked }));
    };

    render() {
        const { id, name, island, img } = this.props.place;
        const { isClicked } = this.state;

        return ( 
            <React.Fragment>
                <div className="card mt-3 mr-5 mb-2">
                    <img className="card-img-top" src={img} alt={name} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to={`/${id}`}>{name}</Link>
                        </h4>
                        <p className="card-text">
                        👉Discover the magnificient place of {name} on the island of {island}.
                        </p>
                        <button onClick={this.changeClass} 
                        className={`${!isClicked ? 'btn btn-primary' : 'btn btn-success'}`}>
                        { !isClicked ? 'Add' : 'Added to your trip plan'}</button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Place;