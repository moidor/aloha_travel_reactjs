import React, { Component } from 'react';
import PlaceDataService from '../services/place.service';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class AddPlace extends Component {
    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.savePlace = this.savePlace.bind(this);
        this.newPlace = this.newPlace.bind(this);
    
        this.state = {
            place: {
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
        };
      }
    
      onChangeInput = ({ currentTarget: input}) => {
        const place = { ...this.state.place};
        const value = input.type === 'checkbox' ? input.checked : input.value;
        place[input.name] = input.value && value;
        this.setState({
          place
        });
      }
    
      savePlace(event) {
        event.preventDefault();
        const { place } = this.state;
        let data = {
          name: place.name,
          island: place.island,
          image: place.image,
          description: place.description,
          //gallery: place.gallery,
          price: place.price,
          available: place.available,
        };
    
        PlaceDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              name: response.data.name,
              island: response.data.island,
              image: response.data.image,
              description: response.data.description,
              //gallery: response.data.gallery,
              price: response.data.price,
              available: response.data.available,
              submitted: true
            });
            toast.success(`Le site touristique ${response.data.name} a été ajouté avec succès !`);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      newPlace() {
        this.setState({
          id: null,
          name: "",
          island: "",
          image: "",
          description: "",
          //gallery: "",
          price: 0,
          available: false,
          submitted: false
        });
      }

    render() { 
        const { place } = this.state;

        return (
            <React.Fragment>
            <h3>Ajouter un site touristique</h3>
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <div className="alert alert-success" role="alert">Le site a été ajouté avec succès.</div>
                  <button className="btn btn-success mr-5" onClick={this.newPlace}>Ajouter</button>
                  <Link to="/admin">
                    <button className="btn btn-primary">Retour à la gestion des sites</button>
                  </Link>
                </div>
              ) : (
                <div className="mb-5">
                    <form onSubmit={this.savePlace}>
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={place.name}
                        onChange={this.onChangeInput}
                        name="name"
                      />
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="description">Île</label>
                      <input
                        type="text"
                        className="form-control"
                        id="island"
                        required
                        value={place.island}
                        onChange={this.onChangeInput}
                        name="island"
                      />
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="description">Image</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={place.image}
                        onChange={this.onChangeInput}
                        name="image"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        required
                        value={place.Description}
                        onChange={this.onChangeInput}
                        name="description"
                      />
                    </div>

                    {/* <div className="form-group">
                      <label htmlFor="description">Galerie</label>
                      <input
                        type="text"
                        className="form-control"
                        id="gallery"
                        required
                        value={place.gallery}
                        onChange={this.onChangeInput}
                        name="gallery"
                      />
                    </div> */}

                    <div className="form-group">
                      <label htmlFor="description">Prix</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        required
                        value={place.price}
                        onChange={this.onChangeInput}
                        name="price"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Disponibilité</label>
                      <input
                        type="checkbox"
                        className="form-control"
                        id="available"
                        checked={place.available}
                        onChange={this.onChangeInput}
                        name="available"
                      />
                    </div>

                    <button className="btn btn-success">
                        Ajouter
                    </button>
                    </form>
                  
                </div>
              )}
            </div>
            </React.Fragment>
          );
    }
}
 
export default AddPlace;