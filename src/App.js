import React from 'react';
// import Component from 'react-components';
import Particles from "react-particles-js";
import Clarifai from 'clarifai';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content.js'
import Footer from './components/Footer/Footer'
import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 170,
      "density": {
        "enable": true,
        "value_area": 868.0624057955
      }
    },
    "color": {
      "value": "#8e6363"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8e6363",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  // "interactivity": {
  //   "detect_on": "canvas",
  //   "events": {
  //     "onhover": {
  //       "enable": true,
  //       "mode": "repulse"
  //     },
  //     "onclick": {
  //       "enable": true,
  //       "mode": "push"
  //     },
  //     "resize": true
  //   },
  //   "modes": {
  //     "grab": {
  //       "distance": 400,
  //       "line_linked": {
  //         "opacity": 1
  //       }
  //     },
  //     "bubble": {
  //       "distance": 400,
  //       "size": 40,
  //       "duration": 2,
  //       "opacity": 8,
  //       "speed": 3
  //     },
  //     "repulse": {
  //       "distance": 100,
  //       "duration": 0.4
  //     },
  //     "push": {
  //       "particles_nb": 4
  //     },
  //     "remove": {
  //       "particles_nb": 2
  //     }
  //   }
  // },
  "retina_detect": true
}
//Clarifai setup
const app = new Clarifai.App({apiKey: 'cd5cc4c12a61426b9f541b830cadf9fb'});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      boxes: []
    }
  }

  onInputChange = (event) => {
    // setState = () event.target.value)
  }

  onButtonSubmit = () => {
    console.log('submitted')
    app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80")
      .then((response) => {
        const array = response.outputs[0].data.regions;
        array.forEach(faceregion => {console.log(faceregion.region_info.bounding_box)});
      })
      .catch((err) =>{
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App code dark-green">
        {/* <Particles className="particles" params={particlesOptions}/> */}
        <Navbar />
        <Content onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} url={this.state.input}/>
        <Footer />
      </div>
    );
  }
}

export default App;
