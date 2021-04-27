import React from 'react';
import Lottie from 'react-lottie';
import Head from 'next/head';
import { makeStyles  } from "@material-ui/core/styles";
import { Grid,Button,Typography,useMediaQuery,useTheme,Card,CardContent} from "@material-ui/core";
import Link from '../src/link';

import animationData from '../src/animations/landinganimation/data';
import ButtonArrow from'../src/ui/ButtonArrow';
import CallToAction from '../src/ui/CallToAction';

const useStyles=makeStyles(theme=>({
  animation:{
    maxWidth:'50em',
    minWidth:'21em',
    marginTop:'2em',
    marginLeft:'20%',
    [theme.breakpoints.down('sm')]:{
      maxWidth:'30em'
    }
  },
  estimateButton:{
    ...theme.typography.estimate,
    backgroundColor:theme.palette.common.orange,
    borderRadius:50,
    height:45,
    width:145,
    marginRight:40,
    "&:hover":{
      backgroundColor:theme.palette.secondary.light,
      textDecoration:"none"
    }
  },
  learnButton:{
   ...theme.learnButton,
    fontSize:"0.9rem",
    height:45,
    width:145,
    "&:hover":{
      textDecoration:"none"
    }
  },
  learnedButtonService:{
    ...theme.learnButton,
    fontSize:"0.7rem",
    height:35,
    padding:5,
    [theme.breakpoints.down('sm')]:{
      marginBottom:'2em'
    },
    "&:hover":{
      textDecoration:"none"
    }
  },
  mainContainer:{
    marginTop:'5em',
    [theme.breakpoints.down('md')]:{
      marginTop:'3em'
    },
    [theme.breakpoints.down('xs')]:{
      marginTop:'2em'
    }
  },
  heroTextContainer:{
    minWidth:'21.5em',
    marginLeft:'1em',
    [theme.breakpoints.down('xs')]:{
      marginLeft:'0em'
    }
  },
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
    marginTop:'12em',
    [theme.breakpoints.down('sm')]:{
      padding:'25'
    }
  },
  revolutionBackground:{
    backgroundImage:`url(${"/assets/repeatingBackground.svg"})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',
    marginTop:'12em'
  },
  revolutionCard:{
    position:'absolute',
    boxShadow:theme.shadows[10],
    borderRadius:15,
    padding:'10em',
    [theme.breakpoints.down('sm')]:{
      padding:'8em 0',
      borderRadius:0,
      width:'100%'
    }
  },
  infoBackground:{
    backgroundImage:`url(${"/assets/infoBackground.svg"})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',
    marginTop:'12em'
  }
}))

const LandingPage=({setValue,setSelectedIndex})=>{
    const classes=useStyles();
    const theme=useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'));
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
    <Grid className={classes.mainContainer} container direction="column" >
    <Head>
            <title key="title">Custom Software,Mobile Apps and Websites | Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="Pristine software custom-designed from the ground up with cutting-edge
            optimization!" />
        </Head>
      {/*------hero block------*/}
              <Grid  item> 
                <Grid container direction="row" justify="flex-end" alignItems="center" >

                  <Grid sm className={classes.heroTextContainer} item>

                     <Typography align="center" variant="h1" >Bringing West Coast Technology< br/>to the MidWest
                     </Typography >

                     <Grid justify="center" style={{marginTop:'1em'}} container>
                        <Grid item>
                            <Button onClick={()=>setValue(5)} component={Link} href="/estimate" className={classes.estimateButton} variant="contained">Free Estimate</Button> 
                        </Grid>
                        <Grid item>
                           <Button component={Link} href="/revolution"  onClick={()=>setValue(2)}  className={classes.learnButton} variant="outlined">Learn More<ButtonArrow height={15} width={15} fill="red" /></Button> 
                        </Grid>
                     </Grid>
                     
                   </Grid>

                   <Grid sm item className={classes.animation} >
                     <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
                   </Grid>

                </Grid>

        </Grid>
         {/*------hero block------*/}

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

           {/*------iOS/Android Block------*/}
        <Grid item className={classes.serviceBlock}  >
          <Grid container direction='row' justify={matchesSM ? 'center' : 'flex-end'}>
            <Grid style={{textAlign:matchesSM ? 'center' : undefined}} item>
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
              <img style={{marginRight:matchesSM ? 0 : '5em'}} className={classes.icon} src={"/assets/mobileIcon.svg"} alt="mobile app icon" />
            </Grid>
          </Grid>
        </Grid>
         {/*------iOS/Android Block------*/}

        {/*------Websites Block------*/}
         <Grid item className={classes.serviceBlock}  >
          <Grid container direction='row' justify={matchesSM ? 'center' : undefined}>
            <Grid style={{marginLeft:matchesSM ? 0 : '5em',textAlign:matchesSM ? 'center' : undefined}} item>
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
            <Grid item>
              <img className={classes.icon} src={"/assets/websiteIcon.svg"} alt="website icon" />
            </Grid>
          </Grid>
        </Grid>
        {/*------Websites Block------*/}

     {/*------Revolution Card------*/}
      <Grid item>
        <Grid container style={{height:'100em'}} alignItems="center" justify="center" >
        <Card className={classes.revolutionCard} >
          <CardContent>
            <Grid container style={{textAlign:'center'}} direction="column">
              <Grid item >
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
              <Typography variant="subtitle1" >
                  Visionary insights coupled with cutting-edge technology is a recipie for revolution.
              </Typography>
              <Button onClick={()=>{setValue(2)}}  component={Link} href="/revolution" className={classes.learnButton} variant="outlined">Learn More<ButtonArrow height={15} width={15} fill="red" /></Button> 
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
        </Grid>
        
      </Grid>
     {/*------Revolution Card------*/}

      {/*------Information Card------*/}
       <Grid item>
          <Grid container alignItems='center' style={{height:'80em',textAlign:matchesXS?'center':'inherit'}} direction="row">
            <Grid item container  style={{position:'absolute'}} direction={matchesXS ? 'column':'row'}>
            <Grid sm style={{marginLeft:matchesXS ? 0 :matchesSM ?'2em' : '5em'}} item>
                <Grid container direction="column">
                  <Typography variant="h1" style={{color:"white"}}>About Us</Typography>
                  <Typography variant="subtitle2">Let's get personal.</Typography>
                  <Grid item>
                  <Button onClick={()=>{setValue(3)}}  component={Link} href="/about" style={{color:'white',borderColor:'white'}} variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
              </Grid>
                </Grid>
              </Grid>

              <Grid sm style={{marginRight:matchesXS ? 0 :matchesSM ?'2em' :'5em',textAlign:matchesXS ? 'center':'right'}} item  >
                <Grid container style={{marginBottom :matchesXS ? '10em' :0}} direction="column">
                  <Typography variant="h1" style={{color:"white"}}>Contact Us</Typography>
                  <Typography variant="subtitle2">Say hello!</Typography>
                  <Grid item>
                  <Button  onClick={()=>{setValue(4)}} component={Link} href="/contact" style={{color:'white',borderColor:'white'}} variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
              </Grid>
                </Grid>
              </Grid>
            </Grid>
              
            <div className={classes.infoBackground} />
          </Grid>
       </Grid>
      {/*------Information Card------*/}

      {/*------Call To Action------*/}
      <Grid item>
      <CallToAction setValue={setValue}  />
      </Grid>
      
      {/*------Call To Action------*/}


    </Grid>   ); }

export default LandingPage;