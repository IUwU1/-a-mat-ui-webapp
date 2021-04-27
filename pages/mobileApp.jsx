import React from 'react';
import Lottie from 'react-lottie';
import Head from 'next/head';
import Link from '../src/Link';
import {makeStyles,useTheme} from '@material-ui/core/styles';

import { Grid,Typography,Hidden,useMediaQuery,IconButton } from "@material-ui/core";

import integrationAnimations from '../src/animations/integrationAnimation/data.json';

import CallToAction from '../src/ui/CallToAction';

const useStyles=makeStyles(theme=>({
    heading:{
        maxWidth:'40em'
    },
    arrowContainer:{
        marginTop:'0.5em'
    },
    rowContainer:{
        padding:'0em 5em 0em 5em',
        [theme.breakpoints.down('sm')]:{
            padding:'0em 1.5em 0em 1.5em'
        }
    }
}))

const MobileApps=({setValue,setSelectedIndex})=>{
    
const classes=useStyles();
const theme=useTheme();

const matchesMD=useMediaQuery(theme.breakpoints.down('md'));
const matchesXS=useMediaQuery(theme.breakpoints.down('xs'));

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: integrationAnimations,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

return(
    <Grid container direction="column">
    <Head>
            <title key="title">iOS/Android App Development|Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="Cutting edge, beautifully designed iOS/Android
             mobile app to support you business!" />
        </Head>
          <Grid item container justify="center" style={{marginTop:matchesXS?'1em':'2em'}} className={classes.rowContainer} direction="row">
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} style={{marginRight:'1em',marginLeft:'-3.5em'}} item>
                    <IconButton component={Link} href="/customsoftware" onClick={()=>setSelectedIndex(1)} >
                        <img src={"/assets/backArrow.svg"} alt="Back to custom software page"  />
                    </IconButton>
               </Grid>
               </Hidden>
               <Grid item className={classes.heading} container  direction="column">
                   <Grid item>
                     <Typography align={matchesMD?'center':undefined} variant="h1" >iOS/Android App Development</Typography>   
                   </Grid>
                   <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Mobile apps allow you to take your tools on the go.                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>

                    Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.

                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Convenience. Connection.                    </Typography>
                   </Grid>
               </Grid>     
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} item>
                    <IconButton component={Link} href="/websites" onClick={()=>setSelectedIndex(3)}>
                        <img src={"/assets/forwardArrow.svg"} alt="Back to websites page"  />
                    </IconButton>
               </Grid>
               </Hidden>
           </Grid>    
          <Grid item container direction={matchesMD?"column":"row"} style={{margin:'15em 0 15em 0'}} className={classes.rowContainer} >
              <Grid item container md direction="column">
                <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="h4" gutterBottom>Integration</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph >
                    Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph >
                    This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before. 
                    </Typography>
                </Grid>
              </Grid>

              <Grid item md>
                <Lottie options = {defaultOptions} style={{maxWidth:'20em'}} />
              </Grid>

              <Grid item container md direction="column">
                <Grid item>
                    <Typography variant="h4" align={matchesMD?'center':'right'}gutterBottom>Simultaneous Platform Support</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1"align={matchesMD?'center':'right'} paragraph >
                    Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={matchesMD?'center':'right'} paragraph >
                    This significantly reduces costs and creates a more unified brand experience across all devices                    </Typography>
                </Grid>
              </Grid>
          </Grid>  
          <Grid item container direction={matchesMD?"column":"row"} style={{margin:'0 0 15em 0'}}  className={classes.rowContainer}>
              <Grid item container md direction="column" alignItems="center" >
                <Grid item>
                    <Typography align="Center" variant="h4" gutterBottom>Extended Functionality</Typography>
                </Grid>
                <Grid item>
                    <img src={"/assets/swissKnife.svg"} alt="swiss Knife" />
                </Grid>
              </Grid>
              <Grid item container md direction="column" alignItems="center" style={{margin : matchesMD?'10em 0 10em 0':'0 5em 0 5em'}} >
                <Grid item>
                    <Typography align="Center" variant="h4" gutterBottom>Extended Access</Typography>
                </Grid>
                <Grid item>
                    <img src={'/assets/extendAccess.svg'} alt="access" style={{maxWidth:matchesXS?'20em':'28em'}} />
                </Grid>
              </Grid>
              <Grid item container md direction="column" alignItems="center" >
                <Grid item>
                    <Typography  align="Center" variant="h4" gutterBottom>Increase Engagement</Typography>
                </Grid>
                <Grid item>
                    <img src={"/assets/increaseEngagement.svg"} alt="engagement" />
                </Grid>
              </Grid>
          </Grid>  
          <Grid item>
           <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Grid>  
    </Grid>
)
}

export default MobileApps;