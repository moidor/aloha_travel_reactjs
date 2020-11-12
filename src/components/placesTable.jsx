import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from "./common/table";

class PlacesTable extends Component {
    columns = [
        { path: 'name', label: 'Nom du site', 
        content: place => <Link to={`/places/${place.id}`}>{place.name}</Link>},
        { path: 'island', label: 'Île'},
        { path: 'description', label: 'Description'},
        { path: 'price', label: 'Prix', 
        content: place => `${place.price === 0 ? 'Gratuit' : place.price + " €"}`},
        { path: 'available', label: 'Disponibilité', 
        content: place => `${place.available ? 'Disponible' : 'Indisponible'}`},
        // { key: 'like', 
        // content: movie => <Like liked={movie.liked} 
        // onClick={() => this.props.onLike(movie)} />},
        { key: 'delete', 
        content: place => <button onClick={() => this.props.onDelete(place)}
        className="btn btn-danger btn-sm">Supprimer</button>}
    ]

    render() { 
        const { places, onSort, sortColumn } = this.props;
        return (
            <Table 
            columns={this.columns}
            data={places}
            sortColumn={sortColumn}
            onSort={onSort} />
        );
    }
}
 
export default PlacesTable;