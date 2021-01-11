import React, { Component } from 'react';
import PlaceDataService from '../services/place.service';
import { toast } from 'react-toastify';

class PlacesPutForm extends Component {
    constructor(props) {
        super(props);
        this.getPlace = this.getPlace.bind(this);
        this.updatePlace = this.updatePlace.bind(this);
        this.state = { 
            places: [],
            currentPlace: {
                id: null,
                name: '',
                island: '',
                image: '',
                description: '',
                //gallery: '',
                price: 0,
                available: false,
                submitted: false
            }
         }
    }

    componentDidMount() {
        this.getPlace(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log("Modification en cours du site touristique");
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

    onChangeName(e) {
        const name = e.target.value;
        this.setState(function(prevState) {
          return {
            currentPlace: {
              ...prevState.currentPlace,
              name: name}
          };
        });
    }

    onChangeInput = ({ currentTarget: input}) => {
        const currentPlace = { ...this.state.currentPlace};
        const value = input.type === 'checkbox' ? input.checked : input.value;
        currentPlace[input.name] = input.value && value;
        this.setState({
            currentPlace
        });
      }

    updatePlace() {
        PlaceDataService.update(
          this.state.currentPlace.id,
          this.state.currentPlace)
          .then(response => {
            this.props.history.push("/admin");
            console.log(response.data);
            toast.success(`Le site touristique ${response.data.name} a été mis à jour !`);
          })
          .catch(e => {
            console.log(e.response);
            toast.error("Erreur lors de la mise à jour...");
          });
      }

    render() { 
        const {currentPlace} = this.state;

        return ( 
            <div>
                <h3>Modifier un site touristique</h3>
                {currentPlace ? (
                    <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                value={currentPlace.name}
                                onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="island">Île</label>
                            <input
                                type="text"
                                className="form-control"
                                id="island"
                                name="island"
                                required
                                value={currentPlace.island}
                                onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={currentPlace.image}
                                onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentPlace.description}
                                onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="longDescription">Description détaillée</label>
                            <textarea
                                type="textarea"
                                className="form-control"
                                id="longDescription"
                                name="longDescription"
                                value={currentPlace.longDescription}
                                onChange={this.onChangeInput}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Prix</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={currentPlace.price}
                                onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="available">Disponibilité</label>
                            <input
                                type="checkbox"
                                className="form-control"
                                id="available"
                                name="available"
                                //const value = input.type === 'checkbox' ? input.checked : input.value;
                                checked={currentPlace.available === true ? 'checked' : ''}
                                onChange={this.onChangeInput}/>
                        </div>
                    </form>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={this.updatePlace}>
                        Mettre à jour
                    </button>
                    </div>
                    // <div>
                    //     <h4>{currentPlace.name}</h4>
                    //     <p>{currentPlace.available ? 'Disponible' : 'Indisponible'}</p>
                    // </div>
                ) : (
                    <div>
                        <h4>Erreur</h4>
                    </div>
                )}
            </div>
         );
    }
}
 
export default PlacesPutForm;