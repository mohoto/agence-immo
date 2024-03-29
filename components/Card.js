import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {priceFormatted} from './Helpers'
import Link from 'next/link'

const Card = ({property}) => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid globalImg"
                src={property.pictures[0]}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <span className="globalColor">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon={property.category.name === ("Villa" ?? "Maison") ? "home" : "city" } className="pr-2" />
                {property.category.name}
              </h6>
            </span>
            <Link href="/property/[slug]" as={`/property/${property.slug}`}>
              <a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>{property.title}</strong>
                </h3>
              </a>
            </Link>
            <p>{property.description.slice(0,150)} ...</p>
            <p className="globalColor"><strong>{priceFormatted(property.price)}</strong></p>
            <p className="globalColor">
                <MDBIcon icon="map-marker-alt" className="pr-2" />
                <strong>{property.city}</strong>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card;