

import React, { useContext, useState } from 'react'
import { GlobalContext} from '../context/GlobalState'
import { Bar } from 'react-chartjs-2'
import { Grid, Typography, CircularProgress, Card, CardContent } from '@material-ui/core';
import NumberFormat from 'react-number-format';



export const CountryRecord = () => {

    const {countryData, loading, error}  = useContext(GlobalContext);
    const [country, setCountry] = useState("Pakistan")

    const selectedCountry = countryData.filter(item => { 
        return country !== "" ? item.country === country: setCountry("Pakistan")
    });

    const countryDataDetail = selectedCountry.map((data, index) =>{
        // const chart1 = {}
        // const chart2 = {}
        return (
            <div key={index}>
                <Typography variant="h3" component="h1">{country}</Typography>
                    <img src={data.countryInfo.flag} alt={data.country}/>
                    <Typography  color="textSecondary">
                    Last Update : {new Date(data.updated).toDateString()}
                    </Typography>
                <Grid container>
                    
               
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" component="h3">Total Cases Report</Typography>
                        <Bar
                        data={{
                                labels:['infected', 'recovered', 'deaths'],
                                datasets:[
                                    {
                                        label: 'Confirmed Cases',
                                        data: [data.cases, data.recovered, data.deaths],
                                        backgroundColor: [
                                        'rgba(19, 22, 177,0.4)',
                                        'rgba(0, 128, 0, 0.4)',
                                        'rgba(85, 85, 85, 0.4)'
                                        ],
                                        borderColor:[
                                        'rgb(19, 22, 177',
                                        'rgb(0, 128, 0)',
                                        'rgb(85, 85, 85)'
                                        ],
                                        borderWidth: 1,
                                        hoverOffset: 4
                                }
                            ]}}/>
                        <Card className="blue"> 
                            <CardContent>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Infected 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.cases} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Recovered 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.recovered} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Deaths 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.deaths} />
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" component="h3">Daily Cases Report</Typography>
                        <Bar
                        data={{
                                labels:['infected', 'recovered', 'deaths'],
                                datasets:[
                                    {
                                        label: 'Daily Cases Report',
                                        data: [data.todayCases, data.todayRecovered, data.todayDeaths],
                                        backgroundColor: [
                                        'rgba(19, 22, 177, 0.4)',
                                        'rgba(0, 128, 0, 0.4)',
                                        'rgba(85, 85, 85, 0.4)'
                                        ],
                                        borderColor:[
                                        'rgb(19, 22, 177)',
                                        'rgb(0, 128, 0)',
                                        'rgb(85, 85, 85)'
                                        ],
                                        borderWidth: 1,
                                        hoverOffset: 4
                                }
                            ]}}/>

                        <Card className="green"> 
                            <CardContent>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Infected 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.todayCases} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Recovered 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.todayRecovered} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Deaths 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.todayDeaths} />
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" component="h3" >Active / Critical /Tested Cases </Typography>
                        <Bar
                        data={{
                                labels:['Active cases', 'Critical cases'],
                                datasets:[
                                    {
                                        label: 'Total Cases',
                                        data: [data.active, data.critical],
                                        backgroundColor: [
                                        'rgba(19, 22, 177,0.4)','rgba(177, 19, 53,0.4)'
                                        ],
                                        borderColor:[
                                        'rgb(19, 22, 177)','rgb(177, 19, 53)'
                                        ],
                                        borderWidth: 1,
                                        hoverOffset: 4
                                }
                            ]}}/>
                   
                        <Card className="red"> 
                            <CardContent>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Active 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.active} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Critital 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.critical} />
                                </Typography>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Tested 
                                </Typography>
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {data.tests} />
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>                
        </div>
        )
    })

    return (
        <Grid container>
            { loading && error === {}? 
                <div className="centered">
                <CircularProgress />
                </div>:
                (
            <Grid item xs={12} className="section">
                 <select 
                        className="form-control" 
                        placeholder={country} 
                        aria-label="type" 
                        value={country} 
                        onChange={(e) =>(setCountry(e.target.value))} >
                        <option key="Pakistan" value="Pakistan">--- Select Country ---</option>
                        { countryData.map(((data, index) =>(
                            <option 
                                key={index}
                                value={data.country}
                                >         
                                {data.country}
                        </option>
                        )))}                        
                    </select>
                {countryDataDetail}
                </Grid>
                )}
        </Grid>
    )
}
