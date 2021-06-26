import React from 'react'
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from 'mdbreact'
import {priceFormatted} from './Helpers'

export default function PropertyVip({propertiesVip}) {
    return (
        <>
            <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Biens sponsorisés</h2>
            <MDBRow>
                {propertiesVip && propertiesVip.map(propertyVip => (
                    <>
                    <MDBCol md="4" lg="4" key={propertyVip._id}>
                        <MDBView zoom>
                            <img className="globalImg" src={propertyVip.pictures[0]} alt={propertyVip.title} />
                        </MDBView>
                        <MDBCardBody>
                            <MDBCardTitle>{propertyVip.title}</MDBCardTitle>
                            <MDBCardText><strong>{priceFormatted(propertyVip.price)}</strong></MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    </>
                ))}
            </MDBRow>
        </>
    )
}
