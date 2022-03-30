import React, { useEffect, useState } from "react";
import "./css/style.css"

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('jaipur');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b92f9631a7ef3264d30c7bec377f0d2b`;
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log("res", resjson)
            setCity(resjson.main);
        }
        fetchApi()
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event)=>{setSearch(event.target.value)}}/> 
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                            <>
                                <div className="info"> 
                <h2 className="location">
                    <i className="fas fa-street-view" />{search}
                </h2>
                                    <h1 className="temp">{city.temp}°Cel</h1>
                <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel |</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
                            </>
                    )
                }
            
            </div>

        </>
     )
}

export default Tempapp;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={b92f9631a7ef3264d30c7bec377f0d2b}