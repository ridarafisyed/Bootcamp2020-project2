import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

// links of APIs to fetch data 
const LATEST_DATA_URL = "https://corona.lmao.ninja/v2/all"
const COUNTRY_DATA_URL ="https://corona.lmao.ninja/v2/countries"
const DAILY_REPORT_URL ="https://covid19.mathdro.id/api/daily"

export const GlobalProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)    
    const [error, setError] = useState("")
    
    const [latest, setLatest] = useState([])
    const [countryData, setCountryData] = useState([])
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        axios.all([
            axios.get(LATEST_DATA_URL),
            axios.get(COUNTRY_DATA_URL),
            axios.get(DAILY_REPORT_URL),
        ]).then(result => {
            setLoading(false)
            setLatest(result[0].data)
            setCountryData(result[1].data)
            setDailyData(result[2].data)
        }).catch(error =>{
            setLoading(false)
            setError("Opps! Somethingwent wrong. Please Try Again.")
        })
    })

    return (
        <div>
            <GlobalContext.Provider value={{
                countryData:countryData,
                latest:latest,
                dailyData:dailyData,
                loading:loading,
                error:error,
            }
            }>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}
