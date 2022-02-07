<Router>
  <nav className="nav">
    <ul>
      <li class="item">
        <Link to="/">Home</Link>
      </li>
      <li class="item">
        <Link to="/about">About</Link>
      </li>
      <li class="item">
        <Link to="/bugs-we-treat">Bugs We Treat</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/bugs-we-treat" element={<Bugs />} />
    <Route path="/" element={<Home />}>
    </Route>
  </Routes>
</Router>



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal"
  })
};



//   const dropdownOptions = [
//     {
//       label: "Ants",
//       value: "ants",
//     },
//     {
//       label: "Bedbugs",
//       value: "bedbugs",
//     },
//     {
//       label: "Mice and Rats",
//       value: "mice"
//     },
//   ]



class Dropdown extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }

  render() {
    return (
      <div>
        <label htmlFor="cars">Choose a pest:</label>
        <select onChange={this.onChange}>
          <option value="ants">Second</option>
          <option value="roaches">First</option>
        </select>
      </div>
    )
  }
}

export default withRouter(Dropdown);


<div>
  <label htmlFor="cars">Choose a pest:</label>
  <select name="pests" id="pests">
    <option value="Roaches">Roaches</option>
    <option value="Crickets">Cricket</option>
    <option value="Mice">Mice</option>
    <option value="Bedbugs">Bedbugs</option>
  </select>
</div>
)




{/* <div className="dropdown">
        <button className="dropbtn">Select a Pest
        <CaretDownIcon className="caret" />
        </button>

        <div className="dropdown-content">
          <a href="/ants" >Ants</a>
          <a href="/bedbugs" >Bedbugs</a>
          <a href="/flies" >Flies</a>
          <a href="/roaches">Roaches</a>
          <a href="/wasps">Wasps</a>
        </div>
      </div> */}


const { useState } = React;

//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'
const image1 =
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image2 =
  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image3 =
  "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80";
const image4 =
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80";
const image5 =
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80";
const image6 =
  "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80";


//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6];


//MAIN APP COMPONENT
function App() {
  return (
    <div className="App">
      <h1>Simple React Lightbox</h1>
      <p>
        featuring adorable animal pictures from{" "}
        <a href="https://unsplash.com/" target="_blank">
          unsplash
        </a>
      </p>
      <ImageGallery />
    </div>
  );
}


//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };


  return (
    <>
      <div>{imageCards}</div>

      {
        lightboxDisplay ?
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow}></img>
            <button onClick={showNext}>⭢</button>
          </div>
          : ""
      }
    </>
  );
}