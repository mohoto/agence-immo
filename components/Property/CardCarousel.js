import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CardCarousel = ({property}) => {

    console.log(property);

  return (
      <div className="myCarousel">
        <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
        >
            <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
                {property && property.pictures[0] ? (
                    <MDBView>
                    <img
                        className="d-block w-100 carousel-image"
                        src={property.pictures[0]}
                        alt="First slide"
                    />
                    </MDBView>
                ) : null}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
                {property && property.pictures[1] ? (
                    <MDBView>
                    <img
                        className="d-block w-100 carousel-image"
                        src={property.pictures[1]}
                        alt="Second slide"
                    />
                    </MDBView>
                ) : null}
            </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
      </div>
  );
}

export default CardCarousel;
