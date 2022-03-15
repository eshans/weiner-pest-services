import Ant from '../img/ant.jpeg';
import Bee from '../img/bee.jpeg';
import Bedbug from '../img/bedbug.jpeg';
import Wasp from '../img/wasp.jpeg';
import Mouse from '../img/mouse.jpeg'

const Pests = () => {
  return (
    <>
      {/* <div>
        <h3>We treat a variety of pests which include but not limited to bedbugs, roaches, camel crickets, wasps, termites, and more. Please don't hesitate to contact us with any questions.</h3>
      </div> */}
      <div className="row">
        <div className="column">
          <h3> Ants </h3>
          <img className="pest_gallery" alt="logo" src={Ant} />
        </div>
        <div className="column">
          <h3>  Bees </h3>
          <img className="pest_gallery" alt="logo" src={Bee} />
        </div>
        <div className="column">
          <h3> Bedbug </h3>
          <img className="pest_gallery" alt="logo" src={Bedbug} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>  Wasp </h3>
          <img className="pest_gallery" alt="logo" src={Wasp} />
        </div>
        <div className="column">
          <h3> Mouse </h3>
          <img className="pest_gallery" alt="logo" src={Mouse} />
        </div>
        <div className="column">
          <h3> Ants </h3>
          <img className="pest_gallery" alt="logo" src={Ant} />
        </div>
      </div>
    </>
  )
}

export default Pests