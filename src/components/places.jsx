import React, { Component } from 'react';
import Place from './place';

class Places extends Component {
    state = {  }

    render() { 
        const { places, totalPlaces } = this.props;

        return ( 
            <div>
                <div className="container">
                    Come and see our {totalPlaces} superb places to visit in Hawaii... 🌴. Just click to add and once again to cancel the adding.
                    <div className="row justify-content-md-center">
                            { this.props.places.map(place =>
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