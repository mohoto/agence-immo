import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import Card from '../../components/Card'
import SearchFilter from '../../components/Property/SearchFilter'

export default function Search() {

    const router = useRouter();

    const [properties, setProperties] = useState([]);

    useEffect(() =>{
        async function getProperty(){
            const {data} = await axios.post('https://aqueous-meadow-07678.herokuapp.com/api/property/list/search', {

                filters: {
                    title: router.query.title,
                    category: router.query.category
                }
            })
            setProperties(data.data);
        }
        getProperty();
    }, [router.query.title, router.query.category])


    return (
        <>
            <SearchFilter />
            <div className="container">
                <h3 className="text-center responsive-h2 mt-5 mb-5 globalColor font-weight-bolder">{properties.length} {properties.length > 1 ? 'Biens trouvés' : 'Bien trouvé'}</h3>
                {router.query.title || router.query.category ? (
                    <div>
                        {properties && properties.map(property => (
                            <Card property={property} />
                        ))}
                    </div>
                ) : (
                    <h3>Aucun résultat</h3>
                )}
            </div>
        </>
    )
}
