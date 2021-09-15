import { useRef, useEffect, useState } from "react"
import { useSpringCarousel } from 'react-spring-carousel-js'

const CarouselItem = (props) => {

  const {
    image,
  } = props;

  return (
    <div className="w-full flex justify-center">
      <img className="align-top object-cover w-full h-full" src={image} />
    </div>
  )
}

const ThumbItem = ({id, currentItem, onClick}) => {
  
  const [highlight, setHighlight] = useState(false)

  useEffect(() => {
    if(currentItem.id === id) {
      setHighlight(true)
    }else {
      setHighlight(false)
    }
  }, [currentItem])

  return (
    <div 
      id={id}
      onClick={onClick} 
      className={`${highlight ? "bg-white" : "bg-shark-400"} cursor-pointer transition ease-in-out delay-200 w-5 h-1 m-1 shadow-md rounded-full hover:bg-white`}>
    </div>
  )
  
}

const Carousel = (props) => {

  const {
    imageList,
    autoScroll
  } = props

  const [currentItem, setCurrentItem] = useState({})

  useEffect(() => {
    if(autoScroll) {
      var intervalId = setInterval(function(){
        slideToNextItem()
        setCurrentItem(getCurrentActiveItem())
      }, 5000);
    }
    return () => {
      clearInterval(intervalId) 
    }
  }, [])

  const {
    carouselFragment,
    thumbsFragment,
    slideToNextItem,
    slideToItem,
    getCurrentActiveItem
  } = useSpringCarousel({
    withThumbs: true,
    withLoop: true,
    items: imageList.map((item, idx) => (
      {
        id: `carousel-${idx}`,
        renderItem: (
          <CarouselItem id={`carousel-${idx}`} image={item} />
        ),
        renderThumb: (
          <ThumbItem id={`carousel-${idx}`} currentItem={currentItem} onClick={() => slideToItem(`carousel-${idx}`)} />
        ),
      }
    ))
  });
  
  return (
    <div style={{height: "90vh"}} className="flex flex-col items-center justify-center">
      <div className="h-full">
        {carouselFragment}
      </div> 
      <div className="absolute bottom-3 left-2/4">
          {thumbsFragment}
        </div>
    </div>
  )
};

export default Carousel