import { Covid19Trend } from './components/Covid19Trend'
import {GlobalProvider} from './context/GlobalState'
import { Header } from './components/Header';
import {Footer} from './components/Footer'
import { Grid,  Paper} from '@material-ui/core';

import "./styling/App.sass"

function App() {
  return (
    <main className="container">
      <Paper elevation={3}>
        <Grid container> 
        <Grid item xs={12}>
          <Header/>
        </Grid>    
        <Grid item xs={12} > 
          <GlobalProvider>
              <Covid19Trend/>
          </GlobalProvider>
          </Grid>  
        <Grid item xs={12} >
          <Footer/>
        </Grid> 
      </Grid>
      </Paper>
    </main>
  );
}

export default App;
