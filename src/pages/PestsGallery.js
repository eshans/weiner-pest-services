import { useState } from 'react'
import Ant from '../img/ant.jpeg'
import Bee from '../img/bee.jpeg'
import Bedbug from '../img/bedbug.jpeg'
import Wasp from '../img/wasp.jpeg'
import Mouse from '../img/mouse.jpeg'
import Stinkbug from '../img/stinkbug.jpeg'

// const images = [Bee, Ant, Bedbug, Wasp, Mouse];

const images_Arr = [
  { image: Ant, text: 'Ants' },
  { image: Bee, text: 'Carpenter Bees' },
  { image: Bedbug, text: 'Bedbugs' },
  { image: Mouse, text: 'Mice' },
  { image: Wasp, text: 'Wasps' },
  { image: Stinkbug, text: "Stinkbugs" }
]

function PestsGallery() {
  const [imageToShow, setImageToShow] = useState({})
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)

  //looping through our images array to create img elements
  const imageCards = images_Arr.map(({ image, text }) => (

    <div className="card-wrapper" key={image}>
      <h3 className="header">{text}</h3>
      <img
        key={image}
        alt={image}
        className='pest_gallery'
        onClick={() => showImage({ image, text })}
        src={image}
      />
    </div>
  ))

  //function to show a specific image in the lightbox, amd make lightbox visible - image is the object
  const showImage = (image) => {
    setImageToShow(image)
    setLightBoxDisplay(true)
  }

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  //show next image in lightbox 
  const showNext = (e) => {
    e.stopPropagation()
    let currentIndex = images_Arr.indexOf(imageToShow)
    if (currentIndex >= images_Arr.length - 1) {
      setLightBoxDisplay(false)
    } else {
      let nextImage = images_Arr[currentIndex + 1]
      setImageToShow(nextImage)
    }
  }

  const showPrev = (e) => {
    e.stopPropagation()
    let currentIndex = images_Arr.indexOf(imageToShow)
    if (currentIndex <= 0) {
      setLightBoxDisplay(false)
    } else {
      let nextImage = images_Arr[currentIndex - 1]
      setImageToShow(nextImage)
    }
  }

  return (
    <>
      <h2> Bugs we treat</h2>
      <div>{imageCards}</div>
      {lightboxDisplay ? (
        <div id='lightbox' onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img alt='gallery' id='lightbox-img' src={imageToShow.image}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
          ''
        )}
    </>
  )
}

export default PestsGallery