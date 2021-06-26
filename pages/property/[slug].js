import React from 'react'
import axios from 'axios'
import CardCarousel from '../../components/Property/CardCarousel'
import {MDBContainer, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow, MDBIcon} from 'mdbreact'
import Slug from '../../components/Property/Slug'
import CardVip from '../../components/Property/CardVip'
import CardRelated from '../../components/Property/CardRelated'

const styles = {
    fontSize: 15
}

export default function Property({property, propertiesVip, propertiesRelated}) {

    return (
        <>
            {property && (
                <MDBContainer className="mt-4">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="9" lg="9">
                                <CardCarousel property={property}/>
                                <Slug property={property}/>
                                </MDBCol>
                                <MDBCol md="3" lg="3">
                                    <h4 className="mt-5">Contactez-nous</h4>
                                    <div style={styles}>
                                        <MDBIcon icon="calculator" className="mr-1"/>
                                        10 rue des vainqueurs
                                    </div>
                                    <div style={styles}>
                                        <MDBIcon icon="phone-alt" className="mr-1"/>
                                        01 45 67 87 43
                                    </div>
                                    <div style={styles}>
                                        <MDBIcon icon="mobile-alt" className="mr-1"/>
                                        06 78 67 65 34
                                    </div>
                                    <div style={styles}>
                                        <MDBIcon icon="envelope" className="mr-1"/>
                                        contact@agence-immo.com
                                    </div>
                                    <h3 className="mt-4 mt-3">Biens sponsorisés</h3>
                                    <CardVip propertiesVip={propertiesVip} />
                                </MDBCol>
                            </MDBRow>
                            <hr className="my-4"/>
                            <MDBRow>
                                {propertiesRelated && propertiesRelated.length > 0 && (
                                <MDBCol>
                                    <h2 className="mb-5">Biens similaires</h2>
                                    <CardRelated propertiesRelated={propertiesRelated}/>
                                </MDBCol>
                                )}
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            )}
        </>
    )
}

export const getStaticPaths = async () => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com/api/properties'
    const {data} = await axios.get(url);
    const properties = data.data;
    const paths = properties.map(property => ({
        params: {slug: property.slug}
    }));
    return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com/api/property';
    const slug = params.slug;
    const {data: property} = await axios.get(`${url}/${slug}`);

    const urlVip = 'https://aqueous-meadow-07678.herokuapp.com/api/properties/vip'
    const {data: propertiesVip} = await axios.get(urlVip);

    const urlRelated = 'https://aqueous-meadow-07678.herokuapp.com/api/properties/related'
    const {data: propertiesRelated} = await axios.get(`${urlRelated}/${property._id}`);
    return {
        props: {
            property, 
            propertiesVip,
            propertiesRelated
        }
    }
}