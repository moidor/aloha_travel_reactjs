import React, { Component } from 'react';

class PlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { match, history } = this.props;
        return ( 
            <React.Fragment>
                <p>Details</p>
                <p>{match.params.id}</p>
                <button className="btn btn-primary" 
                        onClick={() => history.push("/places")}>
                    Ajouter cette destination
                </button>
            </React.Fragment>
         );
    }
}
 
export default PlaceDetails;