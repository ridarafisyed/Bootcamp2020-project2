import React, { useContext } from 'react'

import {GlobalContext} from "../context/GlobalState"
import {Grid, Card , CardContent, CircularProgress, Typography} from '@material-ui/core'
import NumberFormat from 'react-number-format'


export const Cards = () => {
    const {latest, loading} = useContext(GlobalContext);
    return (
        <Grid container spacing={2} justified="space-between">
            <Grid item xs={12} sm={4}>
                <Card className="blue">
                    <CardContent>
                        <Typography variant="h5" componet="h2" color="textSecondary">
                            Infected</Typography>
                            {loading?
                                <div className="centered">
                                    <CircularProgress/>
                                </div>:<>
                                <Typography variant="h4" component="h1">
                              <NumberFormat 
                                thousandSeparator={true} 
                                displayType={'text'} 
                                value = {latest.cases} />
                            </Typography>
                            <Typography color="textSecondary">
                                Last Updated : {new Date(latest.updated).toDateString()}
                            </Typography>
                                
                                </>
                                }
                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className="green">
                    <CardContent>
                        <Typography variant="h5" componet="h2" color="textSecondary">
                            Recovered</Typography>
                            {loading?
                                <div className="centered">
                                    <CircularProgress/>
                                </div>:<>
                                <Typography variant="h4" component="h1">
                                <NumberFormat 
                                thousandSeparator={true} 
                                displayType={'text'} 
                                value = {latest.recovered} />
                            </Typography>
                            <Typography color="textSecondary">
                                Last Updated : {new Date(latest.updated).toDateString()}
                            </Typography>
                                
                                </>
                                }
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className="gray">
                    <CardContent>
                        <Typography variant="h5" componet="h2" color="textSecondary">
                            Deaths</Typography>
                            {loading?
                                <div className="centered">
                                    <CircularProgress/>
                                </div>:<>
                                <Typography variant="h4" component="h1">
                                <NumberFormat 
                                    thousandSeparator={true} 
                                    displayType={'text'} 
                                    value = {latest.deaths} />
                            </Typography>
                            <Typography color="textSecondary">
                                Last Updated : {new Date(latest.updated).toDateString()}
                            </Typography>
                                
                                </>
                                }
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
