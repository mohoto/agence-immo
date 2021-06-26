import React from 'react'
import Collapse from './Collapse'
import {priceFormatted} from '../Helpers'
import Moment from 'react-moment'

export default function Slug({property}) {
    return (
        <div className="mt-4">
            <h1 className="globalColor">{property.title}</h1>
            <hr className="my-3" />
            <div>{property.category.name}</div>
            <div>{property.address}</div>
            <hr className="my-2" />
            <div className="description mt-4 mb-3">{property.description}</div>
            <Collapse titre="Adresse de la propriété ">
                <div className="mt-3 pl-3">
                    <div>
                        <span className="font-weight-bolder">Ville</span>: {property.city}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Adresse</span>: {property.address}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Région</span>: Monde
                    </div>
                </div>
            </Collapse>
            <Collapse titre="Détail de la propriété ">
                <div className="mt-3 pl-3">
                    <div>
                        <span className="font-weight-bolder">Surface</span>: {property.surface}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Prix</span>: {priceFormatted(property.price)}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Chambre</span>: {property.bedrooms}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Catégorie</span>: {property.category.name}
                    </div>
                    <div>
                        <span className="font-weight-bolder">Date de l'annonce</span>: 
                        <Moment format="DD/MM/YYYY à h:m">{property.createdAt}</Moment>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}
