import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class MonCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2013/11/13/12/27/mountains-209956_1280.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2013/11/13/12/27/mountains-209956_1280.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2013/11/13/12/27/mountains-209956_1280.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
         );
    }
}
 
export default MonCarousel;