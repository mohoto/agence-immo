import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data);
const url = 'https://aqueous-meadow-07678.herokuapp.com/api/categories';

export const useGetCategories = () => {
    
    const {data: categories, error} =  useSWR(url, fetcher);

    return  {categories, error};
};


const fetcherProperties = url => axios.get(url).then(res => res.data);
const urlProperties = 'https://aqueous-meadow-07678.herokuapp.com/api/properties?limit=30';

export const useGetProperties = () => {
    
    const {data: properties, error} =  useSWR(urlProperties, fetcherProperties);

    return  {properties, error};
};