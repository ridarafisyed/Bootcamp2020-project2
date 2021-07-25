import React, { Suspense, useContext  } from 'react'
import {GlobalContext} from '../context/GlobalState'
import NumberFormat from 'react-number-format';
import { Line } from 'react-chartjs-2'
import { Grid, Card,CircularProgress, CardContent,Typography } from '@material-ui/core';


export const DailyReport = () => {
    const {latest, loading, error} = useContext(GlobalContext)
    const {dailyData} = useContext(GlobalContext)
    const modified = dailyData.map((daily) =>({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));

    return (
        <div>
            <Grid container spaceing={3}>
                {/* showing day by day progress of covid-19 cases and deaths */}
                <Grid item sm={8} xs={12}>
                    <h3>Day By Day Graph</h3>
                    <div className="container">
                    { loading && error === {}? 
                        <div className="centered">
                        <CircularProgress />
                        </div>:
                        (
                    <Suspense fallback={<CircularProgress/>}>
                        <Line 
                            data={{
                                labels: modified.map(({date}) => date),
                                // labels:['red', 'green', 'blue'],
                                datasets:[
                                    {
                                        label: 'Confirmed Cases',
                                        data: modified.map(({confirmed}) => confirmed),
                                        // data: [25,30,25],
                                        backgroundColor:'rgba(54, 162, 235, 0.2)',
                                        borderColor:"blue",
                                        fill:true,
                                        borderWidth:0.3
                                },
                                {
                                        label: 'Deaths ',
                                        data: modified.map(({deaths}) => deaths),
                                        // data: [25,30,25],
                                        backgroundColor:'rgba(255, 99, 132, 0.2)',
                                        borderColor:"red",
                                        fill:true,
                                        borderWidth:0.3
                                }
                            ], 
                                
                            }}
                            options ={{
                                maintainAspectRatio:true,
                                scales: {
                                    x:{
                                        // type:'linear'
                                    },
                                    y: {
                                        // type: 'linear',

                                        beginAtZero: true
                        }
                    }}}
                    />
                </Suspense>
                )}
                </div>
                
                </Grid>


                {/* Daily report total cases, recovered and deaths  */}
                <Grid item sm={4} xs={12} >
                    <h3>Today's Report</h3> 
                    <Card className="blue">
                        <CardContent>
                            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                            Infected 
                            </Typography>
                            { loading && error === {}? 
                            <div className="centered">
                            <CircularProgress />
                            </div>:
                            (<>
                            <Typography variant="h4" component="h1">
                                <NumberFormat 
                                    thousandSeparator={true} 
                                    displayType={'text'} 
                                    value = {latest.todayCases}/>
                            </Typography>
                            </>)}
                        </CardContent>
                    </Card>
                    <br/>
                    <Card className="green">
                        <CardContent>
                            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                            Recovered 
                            </Typography>
                            { loading && error === {}? 
                            <div className="centered">
                            <CircularProgress />
                            </div>:
                            (<>
                            <Typography variant="h4" component="h1">
                                <NumberFormat 
                                    thousandSeparator={true} 
                                    displayType={'text'} 
                                    value = {latest.todayRecovered}/>
                            </Typography>
                            </>)}
                        </CardContent>
                    </Card>
                    <br/>
                    <Card className="gray">
                        <CardContent>
                            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                            Deaths 
                            </Typography>
                            { loading && error === {}? 
                            <div className="centered">
                            <CircularProgress />
                            </div>:
                            (<>
                            <Typography variant="h4" component="h1">
                                <NumberFormat 
                                    thousandSeparator={true} 
                                    displayType={'text'} 
                                    value = {latest.todayDeaths}/>
                            </Typography>
                            </>)}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>    
        </div>
    )
}
