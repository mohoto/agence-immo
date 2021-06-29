import React from 'react'
import axios from 'axios'
import Card from '../components/Card'
import {MDBContainer} from 'mdbreact'
import {useRouter} from 'next/router'
import ReactPaginate from 'react-paginate'
import SearchFilter from '../components/Property/SearchFilter'


export default function Properties({properties, currentPage, pageCount}) {

  const router = useRouter();
  /*const paths = properties.map(property => ({
    params: {slug: property.slug}
  }));
  console.log('paths:', paths)*/

    return (
        <>
        <SearchFilter />
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Liste des biens
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          {properties && properties.map(property => (
              <Card key={property._id} property={property}/>
          ))}
        </MDBContainer>
        </>
    )
}

export const getServerSideProps = async () => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com/api/properties'
    const {data} = await axios.get(url);
    const properties = data.data;
    const currentPage = data.currentPage;
    const pageCount = data.totalPages;
    return {
      props: {
        properties,
        currentPage,
        pageCount
      }
    }
  }
