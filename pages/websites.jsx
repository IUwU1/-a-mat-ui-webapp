import React from 'react'
import Link from '../src/Link';
import Head from 'next/head';
import {useTheme,makeStyles} from '@material-ui/core/styles';
import { Grid,Typography,useMediaQuery,IconButton,Hidden } from "@material-ui/core";


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
    paraContainer:{
        maxWidth:'30em'
    }
}))

const Websites=({setValue,setSelectedIndex})=>{
    const theme=useTheme();
    const classes=useStyles();

const matchesMD=useMediaQuery(theme.breakpoints.down('md'));
const matchesXS=useMediaQuery(theme.breakpoints.down('xs'));
const matchesSM=useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Grid container direction="column" > 
    <Head>
            <title key="title">Custom Website Design | Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="We provide fast, most modern, completely built from scratch fast website according to your needs
            to optimize your business! Responsive and well build Website!" />
        </Head>
            <Grid item container justify="center" alignItems={matchesSM?"center":undefined} style={{marginTop:matchesXS?'1em':'2em'}} className={classes.rowContainer} direction={matchesSM?"column":"row"}>
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} style={{marginRight:'1em',marginLeft:'-3.5em'}} item>
                    <IconButton component={Link} href="/mobileapps" onClick={()=>setSelectedIndex(2)} >
                        <img src={"/assets/backArrow.svg"} alt="Back to mobile apps page"  />
                    </IconButton>
               </Grid>
               </Hidden>
               <Grid item className={classes.heading} container  direction="column">
                   <Grid item>
                     <Typography align={matchesMD?'center':undefined} variant="h1" >Website Development</Typography>   
                   </Grid>
                   <Grid item>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.                    </Typography>
                    <Typography align={matchesMD?'center':undefined} variant="body1" paragraph>
                    Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                    </Typography>
                   </Grid>
               </Grid>     
               <Hidden mdDown>
               <Grid className={classes.arrowContainer} item>
                    <IconButton component={Link} href="/services" onClick={()=>setSelectedIndex(0)}>
                        <img src={"/assets/forwardArrow.svg"} alt="Back to services"  />
                    </IconButton>
               </Grid>
               </Hidden>
           </Grid>  
            <Grid item container direction={matchesSM?"column":"row"} alignItems="center" style={{marginTop:'15em'}}  className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                           <Typography  align={matchesSM?'center':undefined} variant="h4" gutterBottom>Analytics</Typography> 
                        </Grid>
                        <Grid item>
                           <img src={"/assets/analytics.svg"} alt="analytics glass" /> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item paragraph className={classes.paraContainer} >
                    <Typography align={matchesSM?'center':undefined}  variant="body1">
                    Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                    </Typography >
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM?"column":"row"} style={{margin:'15em 0'}} alignItems="center" justify="flex-end"  className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                           <Typography  align="center" variant="h4" gutterBottom>E-Commerce</Typography> 
                        </Grid>
                        <Grid item>
                           <img src={"/assets/ecommerce.svg"} alt="ecommerce" /> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item paragraph className={classes.paraContainer} style={{marginLeft:matchesSM?0:'1em'}}  >
                    <Typography align={matchesSM?'center':undefined} variant="body1" >
                    It’s no secret that people like to shop online.
                    </Typography >
                    <Typography align={matchesSM?'center':undefined} variant="body1" paragraph>
                    In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                    </Typography >
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM?"column":"row"} alignItems="center"   className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                           <Typography align="center" variant="h4" gutterBottom>Outreach</Typography> 
                        </Grid>
                        <Grid item>
                           <img src={"/assets/outreach.svg"} alt="megaphone outreach" /> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:matchesSM?0:'1em'}}  >
                    <Typography align={matchesSM?'center':undefined} variant="body1" paragraph className={classes.paraContainer}>
                    Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
                    </Typography >
                </Grid>
            </Grid>
            <Grid item container style={{margin:'15em 0'}}  direction={matchesSM?"column":"row"} alignItems="center" justify="flex-end"  className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                           <Typography align="center" variant="h4" gutterBottom>Search Engine Optimization</Typography> 
                        </Grid>
                        <Grid item>
                           <img src={"/assets/seo.svg"} alt="seo" /> 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item paragraph className={classes.paraContainer} style={{marginLeft:matchesSM?0:'1em'}}  >
                    <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                    How often have you ever been to the second page of Google results?
                    </Typography >
                    <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                    If you’re like us, probably never.
                    </Typography >
                    <Typography align={matchesSM?'center':undefined} variant="body1" paragraph >
                    Customers don’t go there either, so we make sure your website is designed to end up on top.
                    </Typography >
                </Grid>
            </Grid>
            <Grid item> 
            <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
            </Grid> 
        </Grid>
    )
}

export default Websites;
