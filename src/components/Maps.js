import React, {Suspense,useContext, useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import NumberFormat from 'react-number-format'
import {Grid, Card, CardContent, Typography, CircularProgress} from '@material-ui/core'


import { GlobalContext } from '../context/GlobalState'

export const Maps = () => {
    const {latest, countryData, loading,error} = useContext(GlobalContext)
    const  [viewport, setViewport] = useState({
        width: '100%',
        height: '140%',
        latitude:0,
        longitude: 0,
        zoom: 1.2,
    })
    return (
        <>
            {/* map display  */}
            <Grid container spacing={2} className='map_section'>
                <Grid item xs={12} sm={8} className="map_container">
                { loading && error === {}? 
                    <div className="centered">
                        <CircularProgress />
                    </div>:
                    (<Suspense fallback={<CircularProgress/>}>
                        <ReactMapGL {...viewport}   
                            mapboxApiAccessToken = 'pk.eyJ1IjoicmlkYXJhZmlzeWVkIiwiYSI6ImNrYmJvdGljajAzZDQzNW1ydXAydG9mazQifQ.mmXJePXXRPa2B_zFUMoxfA'
                            mapStyle="mapbox://styles/ridarafisyed/ckbbsjkfk0k5s1infhozwl231" 
                            zoom={viewport.zoom}
                            onViewportChange={(setViewport)}
                            interactive = {false}   
                            className="map">
                            { countryData.map(((data,index) =>(
                                <Marker 
                                    key={index}
                                    latitude={data.countryInfo.lat} 
                                    longitude={data.countryInfo.long}
                                    >         
                                    <button className=' map_marker' type='button'
                                    title={ data.country +" : " + data.cases} 
                                    alt={ data.country +" : " + data.cases}
                                    style={{width: (data.cases * 100 /latest.cases)*5, height:(data.cases * 100 / latest.cases)*5 }}
                                    > 
                                    
                                    </button>
                                </Marker>
                            )))}
                        </ReactMapGL>
                    </Suspense>)}
                </Grid>
                    <Grid item xs={12} sm={4} >
                    
                        <Card className="blue">
                            <CardContent>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Active Cases 
                                </Typography>
                                { loading && error === {}? 
                                    <div className="centered">
                                    <CircularProgress />
                                    </div>:
                                    (
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {latest.active}/>
                                </Typography>
                                    )}
                            </CardContent>
                        </Card>
                    <br/>
                    <br/>
                        <Card className="red">
                            <CardContent>
                                <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Critical Cases 
                                </Typography>
                                { loading && error === {}? 
                                    <div className="centered">
                                    <CircularProgress />
                                    </div>:
                                    (
                                <Typography variant="h4" component="h1">
                                    <NumberFormat 
                                        thousandSeparator={true} 
                                        displayType={'text'} 
                                        value = {latest.critical}/>
                                </Typography>
                                    )}
                            </CardContent>
                        </Card>
                    </Grid>
                
            </Grid>
            
        </>
    )
}
