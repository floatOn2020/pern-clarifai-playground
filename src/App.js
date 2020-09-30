import React from 'react';
// import Component from 'react-components';
// import Particles from "react-particles-js";
import Clarifai from 'clarifai';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content.js'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer'
import './App.css';

//Clarifai setup
const app = new Clarifai.App({ apiKey: "80fa865a250543099f476d8496a40a26" });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      imageUrl: "",
      boxes: [],
      signedIn: false,
      route: 'home'
    };
  }
  // signInAndOut = () => {
  //   console.log(this.state.signedIn)
  //   this.setState({signedIn: this.signedIn ? false : true})
  // }
  routing = (route) => {
    this.setState({route: route})
    // console.log('going to ' + route + ' this.route is now: ' + this.state.route, this.state.signedIn)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    // get relative coordinates from api data
    const array = data.outputs[0].data.regions;
    const relativeFaceBoxes = array.map((faceregion) => {
      return faceregion.region_info.bounding_box;
    });
    // get image specs
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    // calculate coordinates relative to image
    const absoluteFaceBoxes = [];
    relativeFaceBoxes.forEach( (box) => {
      absoluteFaceBoxes.push({
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - box.right_col * width,
        height: box.bottom_row * height - box.top_row * height,
      });
    })
    this.setState({boxes: absoluteFaceBoxes});
  }

  predict = () => {
    this.setState({ imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response) => this.calculateFaceLocation(response))
    .catch((err) => console.log(err));
    this.setState({ input: "" });
  }

  onFormSubmit = () => this.predict();
  componentDidMount() { this.predict() }

  render() {
    return (
      <div className="App code dark-green">
        {/* <Particles className="particles" params={particlesOptions}/> */}
        <Navbar
          signedIn={this.state.signedIn}
          routing={this.routing}
        />
        { this.state.route === 'home'
          ? <Content
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              imageUrl={this.state.imageUrl}
              boxes={this.state.boxes}
              inputValue={this.state.input}
              />
          : ( this.state.route === 'signIn'
              ? <SignIn routing={this.routing}/>
              : <Register routing={this.routing} />
            )
        }
        <Footer />
      </div>
    );
  }
}

export default App;


// const particlesOptions = {
//   "particles": {
//     "number": {
//       "value": 170,
//       "density": {
//         "enable": true,
//         "value_area": 868.0624057955
//       }
//     },
//     "color": {
//       "value": "#8e6363"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#8e6363",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 2,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   // "interactivity": {
//   //   "detect_on": "canvas",
//   //   "events": {
//   //     "onhover": {
//   //       "enable": true,
//   //       "mode": "repulse"
//   //     },
//   //     "onclick": {
//   //       "enable": true,
//   //       "mode": "push"
//   //     },
//   //     "resize": true
//   //   },
//   //   "modes": {
//   //     "grab": {
//   //       "distance": 400,
//   //       "line_linked": {
//   //         "opacity": 1
//   //       }
//   //     },
//   //     "bubble": {
//   //       "distance": 400,
//   //       "size": 40,
//   //       "duration": 2,
//   //       "opacity": 8,
//   //       "speed": 3
//   //     },
//   //     "repulse": {
//   //       "distance": 100,
//   //       "duration": 0.4
//   //     },
//   //     "push": {
//   //       "particles_nb": 4
//   //     },
//   //     "remove": {
//   //       "particles_nb": 2
//   //     }
//   //   }
//   // },
//   "retina_detect": true
// }
