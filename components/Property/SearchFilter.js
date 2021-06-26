import React, {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import {MBDIcon} from 'mdbreact'
import useSWR from 'swr'


export default function SearchFilter() {

    const router = useRouter();

    const [values, setValues] = useState({
        title: '',
        category: ''
    });

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div>
            
        </div>
    )
}
