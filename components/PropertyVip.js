import React from 'react'
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBView} from 'mdbreact'
import {priceFormatted} from './Helpers'
import Image from 'next/image'

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
                        <div className="imgTop">
                        <div className="d-inline-flex exclu">Exclusivité</div>
                    </div>
                        <MDBCardBody>
                            <MDBCardTitle>{propertyVip.title}</MDBCardTitle>
                            <MDBCardText><strong>{priceFormatted(propertyVip.price)}</strong></MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    </>
                ))}
                <style jsx>
                {`
                .imgTop {
                    position: absolute;
                    top: 10px;
                    left: 20px;
                }
                .vedette {
                    background-color: #00695c;
                    color: white;
                    text-transform: capitalize;
                    font-size: 10px;
                    font-weight: bolder;
                    border: 0px;
                    margin-right: 5px;
                }
                .exclu {
                    padding: 5px 10px;
                    border: 0px;
                    background-color: #ffa001;
                    color: white;
                    font-weight: bolder;
                    text-transform: capitalize;
                    font-size: 15px;
                }
                `}

            </style>
            </MDBRow>
        </>
    )
}
