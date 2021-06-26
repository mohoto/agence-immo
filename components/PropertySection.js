import React from 'react'
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from 'mdbreact'
import {priceFormatted} from './Helpers'
import Link from 'next/link'

export default function PropertySection({properties}) {

    return (
        <>
            <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">Notre catalogue</h2>
            <MDBRow>
                {properties && properties.map(property => (
                    <>
                    <MDBCol md="4" lg="4" key={property._id}>
                        <MDBView zoom>
                            <img className="globalImg" src={property.pictures[0]} alt={property.title} />
                        </MDBView>
                        <MDBCardBody>
                            <MDBCardTitle>{property.title}</MDBCardTitle>
                            <MDBCardText><strong>{priceFormatted(property.price)}</strong></MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    </>
                ))}
            </MDBRow>
            <Link href="/properties" passHref>
                <div className="text-center">
                    <button className="globalButton">Afficher plus</button>
                </div>
            </Link>
        </>
    )
}
