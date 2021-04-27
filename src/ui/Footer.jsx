import React from 'react';
import {Grid,Hidden} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Link from '../Link';

const useStyles=makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.blue,
        width:"100%",
        zIndex:1303,
        position:'relative'
    },
    adornment:{
        width:'25rem',
        verticalAlign:"bottom",
        [theme.breakpoints.down('md')]:{
            width:'21rem'
        },
        [theme.breakpoints.down('xs')]:{
            width:'15rem'
        }
    },
    mainContainer:{
        position:'absolute',
    },
    link:{
        color:'white',
        fontFamily:'Arial',
        fontSize:'0.75rem',
        fontWeight:'bold',
        textDecoration:'none'
    },
    gridItem:{
        margin:'3em'
    },
    icon:{
        height:'4em',
        width:"4em",
        [theme.breakpoints.down('xs')]:{
            height:'2.5em',
        width:"2.5em"
        }
    },
    socialContainer:{
        position:'absolute',
        marginTop:'-6em',
        right:"1.5em",
        [theme.breakpoints.down('xs')]:{
            right:"0.6em"
        }
    }
}));

const Footer=({setValue, setSelectedIndex })=>{
    const classes = useStyles();

    return(<footer className={classes.footer} >
        <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer} >
            <Grid onClick={()=>setValue(0)} item className={classes.gridItem} >
                <Grid container direction="column" spacing={2} >
                <Grid component={Link} href="/" item className={classes.link}>Home</Grid>
                </Grid> 
            </Grid>
            <Grid item onClick={()=>setValue(1)} className={classes.gridItem}>
              <Grid container direction="column" spacing={2} >
                <Grid item component={Link} onClick={()=>setSelectedIndex(0)} href="/services" className={classes.link}>Services</Grid>
                <Grid item component={Link} onClick={()=>setSelectedIndex(1)} href="/customsoftware" className={classes.link}>Custom Software Development</Grid>
                <Grid item component={Link} onClick={()=>setSelectedIndex(2)} href="/mobileapps" className={classes.link}>iOS/Android App Development</Grid>
                <Grid item component={Link} onClick={()=>setSelectedIndex(3)} href="/websites" className={classes.link}>Website Development</Grid>
                </Grid>
              </Grid>
              <Grid onClick={()=>setValue(2)}  item className={classes.gridItem}>
              <Grid container direction="column" spacing={2} >
                <Grid item component={Link} href="/revolution" className={classes.link}>The Revolution</Grid>
                <Grid item component={Link} href="/revolution" className={classes.link}>Vision</Grid>
                <Grid item component={Link} href="/revolution" className={classes.link}>Technology</Grid> 
                <Grid item component={Link} href="/revolution" className={classes.link}>Process</Grid>
                </Grid>
              </Grid>
              <Grid onClick={()=>setValue(3)} item className={classes.gridItem}>
              <Grid container direction="column" spacing={2} >
                <Grid item component={Link} href="/about" className={classes.link}>About</Grid>
                <Grid item component={Link} href="/about" className={classes.link}>History</Grid>
                <Grid item component={Link} href="/about" className={classes.link}>Team</Grid> 
                </Grid>
              </Grid>
              <Grid onClick={()=>setValue(4)} item className={classes.gridItem}>
              <Grid item component={Link} href="/contact" className={classes.link}>Contact Us</Grid>
              </Grid>
            </Grid>
            </Hidden>
        <img src="/assets/FooterAdornment.svg" alt="black slash" className={classes.adornment} />

        <Grid justify="flex-end" spacing={2} container className={classes.socialContainer} >
            <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" > <img src={"/assets/facebook.svg"} alt="facebook logo" className={classes.icon}/> </Grid>
            <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank"  > <img src={"/assets/twitter.svg"} alt="twitter logo" className={classes.icon}/> </Grid>
            <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"  > <img src={"/assets/instagram.svg"} alt="instagram logo" className={classes.icon}/> </Grid>
        </Grid>
        </footer>)
}

export default Footer;