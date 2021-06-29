import React, {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import {MDBIcon} from 'mdbreact'
import useSWR from 'swr'
import {useGetCategories} from '../../utilities/useRequest'
import Select from 'react-select'

//1er option pour avoir la liste des options dans le select classique: ici on crée un component
const CategoriesList = ({options}) => {
    return (
        <>
        {options && options.map(option => (
            <option 
            key={option._id}
            value={option._id}
            >
            {option.name}
            </option>
        ))}
        </>
    )
}




export default function SearchFilter() {

    const router = useRouter();

    const {categories, error} = useGetCategories();

    //2eme option pour avoir la liste des options dans le select de react-select
    /* const categoriesList = data => { 
        return data && data.map(item => ({value: item._id, label: item.name}) )
    };

    const options = categoriesList(categories); */
    
    //////////////////////////////////////////////////////////////////

    const [values, setValues] = useState({
        title: '',
        category: ''
    });

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleFilter = e => {
        //e.preventDefault();
        router.push(`/property/search?${values.category && `category=${values.category}`}${values.title && `&title=${values.title}`}
        `);
    }

    return (
        <div className="container">
            <form onSubmit={handleFilter}>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-6 firstCol">
                        <div className="input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text customColor">
                                    <MDBIcon icon="list-ul" />
                                </span>
                                {/* 1er option pour utiliser le select(classique) */}

                                <select
                                name="category"
                                onChange={handleChange}
                                value={values.category}
                                className="form-control form-field"
                                >
                                    <option value="selected">Categorie</option>
                                    <CategoriesList options={categories}/>
                                </select> 

                                {/* 2eme option utiliser le select de react-select */}
                                {/* <Select 
                                name="category"
                                options={options}
                                defaultValue= '0'
                                onChange={handleChange}
                                value={values.category}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-6 secondCol">
                        <div className="input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <input
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                                placeholder="Recherche"
                                className="form-control form-field"
                                />
                                <span className="input-group-text customColor">
                                    <MDBIcon icon="search" onClick={handleFilter}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <style jsx>
            {`
                .firstCol {
                    padding-right: 1px;
                }
                .secondCol {
                    padding-left: 1px;
                }
                .container {
                    margin-top: 30px;
                }
                .form-field {
                    background-color: #f5f5f5;
                }
                @media screen and (min-width: 768px) {
                    .container {
                    width: 50%;
                    margin-top: 30px;
                    }
                    .customColor {
                    background-color: white;
                    }
                }
                `}

            </style>
        </div>
    )
}
