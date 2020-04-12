import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";

const Carousel = (props) => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    {props.items.map((item, id) => {
                        if(item.backdrop_path){
                        return (

                            <MDBCarouselItem itemId={id}>
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={`http://image.tmdb.org/t/p/w1280//${item.backdrop_path}`}
                                    />
                                    <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>

                                    <h3 className="h3-responsive">{item.title ? item.title : item.name}</h3>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        );
                        }
                    })}
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Carousel;