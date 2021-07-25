import React from 'react'
// import { Typography, Grid } from '@material-ui/core/styles/createTypography'
import { Typography, Grid } from '@material-ui/core'

export const Footer = () => {
    const url = '#'
    return (
        <Grid container className="section container">
            <Grid item xs={12}>
                
            <Typography color="textSecondary" className="footer">
              Copyright  &copy; 1999-2021 by <a href={url}>Rida R Syed</a>. All Rights Reserved<br/>
              <a href={url}>Covid-19 Trend</a> is Powered by <a href={url}>Aurteck</a>
            </Typography>
            </Grid>
        </Grid>
    )
}
