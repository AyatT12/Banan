import React, { useEffect, useState } from 'react'
import {Trans } from 'react-i18next';
import axios from 'axios';
import CarsTable from './CarsTable';
import logo from '../../src/Assets/images/benan_logo.svg';

export default function CarsForSale() {
    const [cars, setCars] = useState()
    const [Categories, SetCategories] = useState()
    const [Isloading, setIsloading] = useState(false)
    const [activeButton, setActiveButton] = useState('all');

    async function GetAllCars() {
        setIsloading(true)

        try {
            const { data } = await axios.get('https://bnan.ghyum.sa/BnanApi/api/cars/')
            setCars(data)
        } catch (error) {
            console.log(error)
        }
        setIsloading(false)

    }
    async function GetAllCategories() {

        try {
            const { data } = await axios.get('https://bnan.ghyum.sa/BnanApi/api/Cars/Categories')
            SetCategories(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetAllCars();
        GetAllCategories()
    }, [])

    async function GetCategoryCars(code) {

        try {
            const { data } = await axios.get(`https://bnan.ghyum.sa/BnanApi/api/Cars/GetCarsByCategory?Code=${code}`)
            setCars(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleButtonClick = (buttonCode) => {
        setActiveButton(buttonCode);
        if (buttonCode === 'all') {
            GetAllCars();
        } else {
            GetCategoryCars(buttonCode);
        }
    };
    return <>
        <div className="section">
            <div className="container mt-5 pt-3">
                <h2>   <Trans i18nKey="carsTitle">   اختر سياراتك   </Trans>   </h2>
                <div className="row pt-5  ">
                    <div className="col-lg-3 col-xl-2 car-catogeries d-flex gap-3 py-4 ">

                        <div id="scrollContainer" className='w-100'>
                            <div className="d-flex gap-1" id="buttonContainer">
                                <div>
                                    <button type="button" className={`btn btn-primary categoray-button  ${activeButton === 'all' ? 'active' : ''}`} onClick={() => handleButtonClick('all')}>
                                        <Trans i18nKey="all">  الكل   </Trans>
                                    </button>
                                </div>
                                {Categories?.map((index, i) => (
                                    <div key={i}>
                                        <button
                                            type="button"
                                            className={`btn btn-primary categoray-button ${activeButton === index.code ? 'active' : ''}`}
                                            onClick={() => handleButtonClick(index.code)}
                                        >
                                            {document.body.dir === 'rtl' ? index.arName : index.enName}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-9 col-xl-10 scrollable-content">
                        {Isloading ?
                            <div className="loader_container">

                                <div className="loader">
                                    <img src={logo} className="imj"  alt='logo loader'/>
                                    <svg viewBox="0 0 80 80">
                                        <rect x="8" y="8" width="64" height="64"></rect>
                                    </svg>
                                </div>
                            </div>
                            : <table width="100%" className="table table-hover" id="ListCars">
                                <tbody>
                                    {cars?.map((car, index) => (
                                        <tr key={index} className="Benan-cars-list">
                                            <CarsTable car={car} />
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}

                    </div>
                </div>
            </div>
        </div>
    </>
}
