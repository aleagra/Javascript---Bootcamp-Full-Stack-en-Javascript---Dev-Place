import foto from "./img/foto1.jpg";
import foto1 from "./img/foto2.jpg";
import foto2 from "./img/foto3.jpg";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
export function Carrousel() {
  return (
    <>
      <MDBCarousel showIndicators showControls fade className="carrousel">
        <MDBCarouselItem className="img" itemId={1} src={foto} alt="...">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem className="img" itemId={2} src={foto1} alt="...">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem className="img" itemId={3} src={foto2} alt="...">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
