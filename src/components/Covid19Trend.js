import React from 'react'
import { Cards } from './Cards'
import { DailyReport } from './DailyReport'
import { CountryRecord } from './CountryRecord';
import {Maps} from './Maps'

import { Grid, Paper } from '@material-ui/core';
export const Covid19Trend = () => {
    
    return (
        <div className="container" >
            <Paper>
                <Grid>
                        <Grid item xs={12}><Cards/></Grid>
                        <Grid item xs={12}><Maps/></Grid>
                        <Grid item xs={12}><DailyReport/></Grid>
                        <Grid item xs ={12}><CountryRecord/></Grid>
                        
                    </Grid>
                </Paper>
            </div>
    )
}
