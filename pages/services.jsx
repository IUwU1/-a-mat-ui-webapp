import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles,useTheme} from '@material-ui/core/styles';
import { Grid,Typography,Button,useMediaQuery } from "@material-ui/core";

import ButtonArrow from'../src/ui/ButtonArrow';

const useStyles=makeStyles(theme=>({
    specialText:{
        fontFamily:'Pacifico',
        color:theme.palette.common.orange
      },
    icon:{
        marginLeft:'2em',
        [theme.breakpoints.down('xs')]:{
          marginLeft:'0em'
        }
      },
      serviceBlock:{
        marginTop:'5em',
        [theme.breakpoints.down('sm')]:{
          padding:'25',
          marginTop:'1em'
        }
      },
      learnButton:{
        ...theme.learnButton,
         fontSize:"0.9rem",
         height:45,
         width:145
       },
       learnedButtonService:{
         ...theme.learnButton,
         fontSize:"0.7rem",
         height:35,
         padding:5,
         [theme.breakpoints.down('sm')]:{
           marginBottom:'2em'
         }
       }
}))

const Services=({setValue,setSelectedIndex})=>{
    const classes=useStyles();
    const theme=useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Grid container direction="column" >
    <Head>
            <title key="title">Custom Software Services |Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="We provide fast, most modern, affordable and 
            aesthetic mobile,website and software solutions.Get a free estimate now!" />
        </Head>
            <Grid item style={{marginLeft:matchesSM?'0':'5em',marginTop:matchesSM?'1em':'2em'}}>
                <Typography align={matchesSM ? 'center' :'0'} variant="h1" gutterBottom  >Services</Typography>
            </Grid>
         {/*------iOS/Android Block------*/}
           <Grid item className={classes.serviceBlock}  >
          <Grid container direction='row' justify={matchesSM ? 'center' : 'flex-end'}>
            <Grid style={{textAlign:matchesSM ? 'center' : undefined,width:matchesSM ?undefined:'35em'}} item>
              <Typography variant="h4">
              iOS/Android App Development
              </Typography>
              <Typography variant="subtitle1">  
                Extend Functionalityy. Extend Access. Increase Engagment.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web services or craete your standalone app
                {matchesSM ? null :<br /> }with mobile platform
                <span className={classes.specialText} >celebration</span>
              </Typography>
              <Button onClick={()=>{setValue(5);setSelectedIndex(2)}}  component={Link} href="/mobileapps" variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <img width='250em'  style={{marginRight:matchesSM ? 0 : '5em'}} className={classes.icon} src={"/assets/mobileIcon.svg"} alt="mobile app icon" />
            </Grid>
          </Grid>
        </Grid>
         {/*------iOS/Android Block------*/}

         {/*------Custom Software Block------*/}
        <Grid item className={classes.serviceBlock}  >
          <Grid container direction='row' justify={matchesSM ? 'center' : undefined}>
            <Grid style={{marginLeft:matchesSM ? 0 : '5em',textAlign:matchesSM ? 'center' : undefined}} item>
              <Typography variant="h4">
              Custom Software Development
              </Typography>
              <Typography variant="subtitle1">  
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions,from investigation to {""}
                <span className={classes.specialText} >celebration</span>
              </Typography>
              <Button  onClick={()=>{setValue(1);setSelectedIndex(1)}}  component={Link} href="/customsoftware" variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={"/assets/CustomSoftwareIcon.svg"} alt="custom software icon" />
            </Grid>
          </Grid>
        </Grid>
         {/*------Custom Software Block------*/}


        {/*------Websites Block------*/}
         <Grid item className={classes.serviceBlock} style={{marginBottom:'10em'}} >    
          <Grid container direction='row' justify={matchesSM ? 'center' : 'flex-end'}>
            <Grid style={{textAlign:matchesSM ? 'center' : undefined,width:matchesSM ?undefined:'35em'}} item>
              <Typography variant="h4">
              Website Development
              </Typography>
              <Typography variant="subtitle1">  
              Optimized for search engines, built for speed
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions,from investigation to {""}
                <span className={classes.specialText} >celebration</span>
              </Typography>
              <Button onClick={()=>{setValue(5);setSelectedIndex(3)}}  component={Link} href="/websites" variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
            </Grid>
            <Grid style={{marginRight:matchesSM ? 0 : '5em'}} item>
              <img width='250em' className={classes.icon} src={"/assets/websiteIcon.svg"} alt="website icon" />
            </Grid>
          </Grid>
        </Grid>
         {/*------Websites Block------*/}
        </Grid>
    )
}

export default Services;