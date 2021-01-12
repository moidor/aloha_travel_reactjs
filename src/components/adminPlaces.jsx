import React, { Component } from 'react';
import PlacesTable from './placesTable';
// import ListGroup from "./common/listGroup";
// import {getMovies} from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
// import {Link} from 'react-router-dom';
import PlaceDataService from '../services/place.service';
import { toast } from "react-toastify";
import {Link} from 'react-router-dom';
import SearchBox from './searchBox';

class AdminPlaces extends Component {
    constructor(props) {
        super(props);
        this.getAllPlaces = this.getAllPlaces.bind(this);
        this.getUnavailablePlaces = this.getUnavailablePlaces.bind(this);
        
    this.state = {
            /* On initialise ces tableaux vides afin que ces 2 propriétés ne soient pas
            "undefined", le temps de récupérer les données via getMovies() et getGenres() */
            places: [],
            unavailablePlaces: 0,
            currentIndex: -1,
            //genres: [],
            currentPage: 1,
            pageSize: 4,
            sortColumn: {path: 'name', order: 'asc'},
            searchQuery: ""
            // currentPlace: {
            //     id: null,
            //     name: '',
            //     island: '',
            //     image: '',
            //     description: '',
            //     //gallery: '',
            //     price: 0,
            //     available: false,
            //     submitted: false
            // }
        }
    }
    // Méthode appelée lors du rendu de l'instance du composant concerné
    async componentDidMount() {
        await this.getAllPlaces();
        await this.getUnavailablePlaces();
    }

    componentWillUnmount() {
        console.log("Composant démonté et/ou rechargé");
    }

    getAllPlaces() {
    PlaceDataService.getAll()
        .then(response => {
        this.setState({
            places: response.data
        });
        console.log("Sites touristiques chargés depuis la base de données : ", response.data);
        })
        .catch(e => {
        console.log(e.response);
        });
    }

    getUnavailablePlaces() {
        PlaceDataService.getUnavailablePlaces()
        .then(response => {
        this.setState({
            unavailablePlaces: response.data
        });
        console.log(`Unavailable places loaded : ${response.data}`);
        })
        .catch(e => {
        console.log(e.response);
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Gestion des sites</h2>
                    {/* <h3>Showing <span>{this.countMovies()}</span> movies in the database.</h3> */}
                    {this.renderPlaces()}
                </div>
            </React.Fragment>
        )
    }

    getPagedData = () => {
        const {pageSize, currentPage, sortColumn, selectedGenre, searchQuery, places: allPlaces} = this.state;
        let filtered = allPlaces;
        if (searchQuery)
        filtered = allPlaces.filter(p =>
            p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            || p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
        filtered = allPlaces.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const places = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: places };
    }

    handleDelete = async place => {
        toast.success('Site touristique supprimé.');
        // Appel du serveur uniquement après afin de pouvoir supprimer instantanément le site côté utilisateur
        const places = this.state.places.filter(p => p.id !== place.id);
        this.setState({ places });
        console.log(place.id);
        await PlaceDataService.delete(place.id)
    };

    handlePageChange = page => {
        this.setState({ currentPage: page});
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, currentPage: 1 });
    };

    displaySingularOrPlural = () => {
        const {length: count, } = this.state.places;
        const { unavailablePlaces } = this.state;

        if (unavailablePlaces === 0) {
            return <p>La base de données contient <span className="badge badge-primary">{count}</span> sites touristiques.</p>
        } else if (unavailablePlaces === 1) {
            return <p>La base de données contient <span className="badge badge-primary">{count}</span> sites touristiques dont {<span className="badge badge-danger">{unavailablePlaces}</span>} est indisponible.</p>
        } else {
            return <p>La base de données contient <span className="badge badge-primary">{count}</span> sites touristiques dont {<span className="badge badge-danger">{unavailablePlaces}</span>} sont indisponibles.</p>
        }
    }

    renderPlaces() {
        // Destructuration
        const {length: count} = this.state.places;
        const {pageSize, currentPage, sortColumn, searchQuery} = this.state;
        const { totalCount, data: places } = this.getPagedData();

        return (
            <div className="row">
                <div className="col">
                    <p>{count === 0 ? "La base de données est soit vide soit non chargée !" : this.displaySingularOrPlural()}</p>
                    <div className="d-flex flex-row">
                        <Link to="/addPlace">
                            <button className="btn btn-primary mb-3">Ajouter un site touristique</button>
                        </Link>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    </div>
                    <PlacesTable 
                        //"places" remplace "data" qui est le nom générique dans le comp. "placesTable"
                        places={places}
                        sortColumn={sortColumn}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    />
                </div>
            </div>
        )}
}

export default AdminPlaces;