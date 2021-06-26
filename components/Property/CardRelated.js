import React from 'react'
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBCardImage, MDBCardFooter} from 'mdbreact'
import {priceFormatted} from '../Helpers'

export default function CardRelated({propertiesRelated}) {
    return (
        <MDBRow>
            {propertiesRelated && propertiesRelated.map(property => (
                <MDBCol className="mb-4" lg="4" key={property._id}>
                    <MDBCard>
                        <MDBCardHeader>
                            {property.titre}
                        </MDBCardHeader>
                        <MDBCardImage 
                        src={property.pictures[0]}
                        className="globalImg"
                        hover waves
                        />
                        <MDBCardFooter>
                            <div className="globalColor">
                                {priceFormatted(property.price)}
                            </div>
                            <div>
                                <p><small>{property.city}, Monde</small></p>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>
    )
}
