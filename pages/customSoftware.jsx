import React from 'react';
import Lottie from 'react-lottie';
import Head from 'next/head';
import Link from '../src/Link';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import { Grid,IconButton,Typography,useMediaQuery,Hidden } from "@material-ui/core";

import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import uxAnimation from '../src/animations/uxAnimation/data';

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
    },
    itemContainer:{
        maxWidth:'40em'
    }
}));

const CustomSoftware=({setValue, setSelectedIndex})=>{
    const classes=useStyles();
    const theme=useTheme();

    const matchesMD=useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'));

    const documentsOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <Grid container direction="column" >
    <Head>
            <title key="title">Custom software development|Free Estimate</title>
            <meta 
            name="description" 
            key="description" 
            content="Cutting-edge custom software from scratch, let us optimize
            your business solbing your problems!" />
        </Head>
           <Grid item container justify="center" style={{marginTop:matchesXS?'1em':'2em'}} className={classes.rowContainer} direction="row">
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} style={{marginRight:'1em',marginLeft:'-3.5em'}} item>
                    <IconButton component={Link} href="/services" onClick={()=>setSelectedIndex(0)} >
                        <img src={"/assets/backArrow.svg"} alt="Back to services page"  />
                    </IconButton>
               </Grid>
               </Hidden>
               <Grid item className={classes.heading} container  direction="column">
                   <Grid item>
                     <Typography align={matchesMD?'center':undefined} variant="h1" >Custom Softwate Development</Typography>   
                   </Grid>
                   <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.      
                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
                    Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.

                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options
                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    We create exactly what you what, exactly how you want it.
                    </Typography>
                   </Grid>
               </Grid>     
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} item>
                    <IconButton component={Link} href="/mobileapps" onClick={()=>setSelectedIndex(2)}>
                        <img src={"/assets/forwardArrow.svg"} alt="Back to services page"  />
                    </IconButton>
               </Grid>
               </Hidden>
           </Grid>     
           <Grid item container direction="row" className={classes.rowContainer} className={classes.rowContainer} justify="center" style={{marginTop:'15em',marginBottom:'20em'}}>
               <Grid md style={{maxWidth:'40em'}} alignItems="center" item container direction="column">
                <Grid item>
                    <Typography variant="h4">Save Energy</Typography>
                </Grid>
                <Grid  item>
                    <img src={"/assets/bulb.svg"} alt="lightbulb" />
                </Grid>    
               </Grid>
               <Grid md style={{maxWidth:'40em',marginBottom:matchesSM?'10em':'0',marginTop:matchesSM?'10em':'0'}} alignItems="center"  item container direction="column">
                <Grid item>
                    <Typography variant="h4">Save Time</Typography>
                </Grid>
                <Grid   item>
                    <img src={"/assets/stopwatch.svg"} alt="Stop Watch" />
                </Grid>    
               </Grid>
               <Grid md style={{maxWidth:'40em'}} alignItems="center" item container direction="column">
                <Grid item>
                    <Typography variant="h4">Save Money</Typography>
                </Grid>
                <Grid   item>
                    <img src={"/assets/cash.svg"} alt="cash" />
                </Grid>    
               </Grid>
           </Grid>
           <Grid item container justify="space-between" className={classes.rowContainer} alignItems={matchesMD?'center':undefined} direction={matchesMD?'column':'row'}>
               <Grid item md direction={matchesSM?'column':'row'}  container style={{marginBottom:matchesMD?'10em':'0'}} className={classes.itemContainer} >
                <Grid item md container direction="column">
                    <Grid item>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="h4">
                           Digital Documents And Data
                       </Typography> 
                    </Grid>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       Reduce Errors. Reduce Waste. Reduce Costs.
                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                       </Typography> 
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie  style={{maxHeight:275,minHeight:250,maxWidth:275}}  options={documentsOptions}  />
                </Grid> 
               </Grid>

               <Grid item md container direction={matchesSM?'column':'row'}  className={classes.itemContainer} >
               <Grid item md>
                    <Lottie options={scaleOptions} style={{maxHeight:260,maxWidth:280}} />
                </Grid> 
                <Grid item md container direction="column">
                    <Grid item>
                    <Grid item>
                       <Typography align={matchesSM?'center':'right'} variant="h4">
                           Scale
                       </Typography> 
                    </Grid>
                       <Typography align={matchesSM?'center':'right'} variant="body1" paragraph >
                       Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                       </Typography> 
                    </Grid>
                </Grid>
               </Grid>
           </Grid>
           <Grid item container direction="row" className={classes.rowContainer} style={{marginTop:"20em",marginBottom:'20em'}} >
            <Grid item container direction='column' alignItems="center">
                <Grid item>
                    <img src={"/assets/root.svg"} alt="roots" height={matchesSM?'300em':'450em'} width={matchesSM?'300em':'450em'}  />
                </Grid>
                <Grid item direction={matchesSM?'column':'row'}   className={classes.itemContainer}  >
                    <Typography variant="h4" align="center" gutterBottom>
                    Root-Cause Analysis
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                    Many problems are merely symptoms of larger, underlying issues.
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                    We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                    </Typography>

                </Grid>

            </Grid>
           </Grid>
           <Grid item  container justify="space-between" alignItems={matchesMD?'center':undefined} direction={matchesMD?'column':'row'}>
               <Grid item md container style={{marginBottom:matchesMD?'10em':'0'}} direction={matchesSM?'column':'row'}  className={classes.itemContainer} >
                <Grid item md container direction="column">
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="h4">
                          Automation
                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       Why waste time when you don’t have to?

                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       We can help you identify processes with time or event based actions which can now easily be automated.
                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                       Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                         </Typography> 
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={automationOptions} style={{maxHeight:290,maxWidth:280}} />
                </Grid> 
               </Grid>

               <Grid item md container direction={matchesSM?'column':'row'}  className={classes.itemContainer} >
               <Grid item md>
                    <Lottie options={uxOptions} style={{maxHeight:310,maxWidth:155}} />
                </Grid> 
                <Grid item md container direction="column">
                    <Grid item>
                       <Typography align={matchesSM?'center':'right'} variant="h4">
                           User Experience
                       </Typography> 
                    </Grid>
                    <Grid item>
                       <Typography align={matchesSM?'center':'right'} variant="body1" paragraph >
                       A good design that isn’t usable isn’t a good design.                       
                       </Typography> 
                       <Typography align={matchesSM?'center':'right'} variant="body1" paragraph >
                       So why are so many pieces of software complicated, confusing, and frustrating?                      
                       </Typography> 
                       <Typography align={matchesSM?'center':'right'} variant="body1" paragraph >
By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.                       
                       </Typography> 
                    </Grid>
                </Grid>
               </Grid>
           </Grid>
        <Grid item >
        <CallToAction setValue={setValue} />
        </Grid>
        </Grid>
    )
}

export default CustomSoftware;
