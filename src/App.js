import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Places from './components/places';
import Account from './components/account';
import Home from './components/home';
import PlaceDetails from './components/placeDetails';
import AddPlace from './components/addPlace';
import PlacesPutForm from './components/PlacesPutForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPlaces from './components/adminPlaces';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      places: [
        {id: 1, name: "Waikiki Beach", island: "Oahu", img: 'https://cdn.pixabay.com/photo/2014/12/02/07/58/waikiki-beach-553621_1280.jpg'},
        {id: 2, name: "Diamond Head", island: "Oahu", img: 'https://cdn.pixabay.com/photo/2014/12/27/15/10/waikiki-beach-581102_1280.jpg'},
        {id: 3, name: "Koko Head Crater", island: "Oahu", img: 'https://cdn.pixabay.com/photo/2020/08/20/20/47/hawaii-5504660_1280.jpg'},
        {id: 4, name: "Lanikai Beach", island: "Oahu", img: 'https://cdn.pixabay.com/photo/2015/04/23/14/26/lanikai-736111_1280.jpg'},
        {id: 5, name: "Black Rock Beach", island: "Maui", img: 'https://www.hawaiimagazine.com/sites/default/files/field/image/Maui-Kaanapali-7Michael-GettyImages-533055947.jpg'},
        {id: 6, name: "Makena Beach", island: "Maui", img: 'https://cdn.pixabay.com/photo/2020/05/07/13/12/maui-5141477_1280.jpg'}
      ]
    }
  }

  render() { 
    return (
      <React.Fragment>
        <ToastContainer />
        <Header />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/places/:id" component={PlacesPutForm} />
            <Route path="/places" render={(props) => <Places 
                   places={this.state.places}
                   totalPlaces={this.state.places.length} {...props} />} />
            <Route path="/account" component={Account} />
            <Route path="/admin" component={AdminPlaces} />
            <Route path="/addPlace" component={AddPlace} />
            {/* Remanier le comp. PlaceDetails  */}
            <Route path="/:id" render={(props) => <PlaceDetails 
                   totalPlaces={this.state.places.length} {...props} />} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
        
      
     );
  }
}


export default App;
