import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <AppBar position="static">
                        <Toolbar className="toolbar">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="h1" className="app_name">
                                Covid-19 Trend
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}
