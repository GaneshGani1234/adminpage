import React from 'react';
import {Typography,AppBar,Card,Button,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import makeStyles from '@mui/material';

const App =()=>
{
    return(
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h6' align='center'>
                        Master Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='lm'>
                       <div>
                        <Grid container spacing={4} >
                            <Grid item>
                                
                                <Typography variant='h6' gutterBottom style={{marginTop:'20px'}}>
                                    ADD COURSE</Typography>  
                            </Grid>
                            
                        </Grid>
                       </div>
                    </Container>
                </div>
            </main>

        </>
    )
}

export default App;