import React from 'react';
import Head from 'next/head';
import {useTheme,makeStyles} from '@material-ui/core/styles';
import { Grid,Typography,useMediaQuery,Avatar,Hidden } from "@material-ui/core";

import Calltoaction from '../src/ui/CallToAction';

const useStyles=makeStyles(theme=>({
   missionStatement:{
       fontStyle:'italic',
       fontWeight:'300',
       fontSize:'1.5rem',
       maxWidth:'50em',
       lineHeight:1.4
   },
   rowContainer:{
    padding:'0em 5em 0em 5em',
    [theme.breakpoints.down('sm')]:{
        padding:'0em 1.5em 0em 1.5em'
    }
},
avatar:{
    height:'25em',
    width:'25em',
    [theme.breakpoints.down('sm')]:{
    height:'20em',
    width:'20em',
    maxHeight:300,
    maxWidth:300
    }
}
}))

const About=({setValue})=>{
    const theme=useTheme();
    const classes=useStyles();
    
const matchesMD=useMediaQuery(theme.breakpoints.down('md'));

return(
    <Grid container direction="column">
        <Head >
            <title key="title">About us- History and Team |Arc Development</title>
            <meta 
            name="description" 
            key="description" 
            content="We provide fast, most modern, affordable and 
            aesthetic software solutions.Get a free estimate now!" />
        </Head>
        <Grid item className={classes.rowContainer} style={{marginTop:'2em'}} >
            <Typography align={matchesMD?'center':undefined} variant="h1">About Us</Typography>
        </Grid>
        <Grid item container justify="center" className={classes.rowContainer} style={{marginTop:'3em'}}>
            <Typography variant="h4" align="center" className={classes.missionStatement}>
            Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
            </Typography>
        </Grid>
        <Grid item container className={classes.rowContainer} alignItems={matchesMD?'center':undefined} style={{margin:'10em 0'}}  direction={matchesMD?'column':'row'} justify="space-around">
            <Grid item>
        <Grid item container direction="column" lg style={{maxWidth:'35em'}}>
            <Grid item>
                <Typography align={matchesMD?'center':undefined} variant="h4" gutterBottom>
                    History
                </Typography>
            </Grid>
            <Grid item>
                <Typography align={matchesMD?'center':undefined} variant="body1" paragraph style={{fontWeight:700,fontStyle:'italic'}}>
                    We're the new kid on the block
                </Typography>
                <Typography align={matchesMD?'center':undefined} variant="body1" paragraph> 
                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                </Typography>
                <Typography align={matchesMD?'center':undefined} variant="body1" paragraph> 
                It all started with one question: Why aren’t all businesses using available technology?
                There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                </Typography>
                <Typography variant="body1" paragraph> 
                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                </Typography>
                <Typography align={matchesMD?'center':undefined} variant="body1" paragraph> 
                All this change can be a lot to keep up with, and that’s where we come in.
                </Typography>
            </Grid>
        </Grid>
        </Grid>
            <Grid item> 
        <Grid item container justify="center" lg>
            <img src={"/assets/history.svg"} alt="pen on book" style={{maxHeight:matchesMD?200:'20em'}} />
        </Grid>
        </Grid>  
        </Grid>
        <Grid item container direction="column" alignItems="center"  style={{marginBottom:'15em'}}  className={classes.rowContainer}>
        <Grid item>
                <Typography variant="h4" gutterBottom align="center">
                   Team
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" paragraph align="center">
                    Gaurav Singh,Founder
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    I don't know much but the sentence should be long.
                </Typography>
            </Grid>
            <Grid>
                <Avatar alt="founder" src={"/assets/founder.jpg"} className={classes.avatar} />
            </Grid>
            <Grid item container justify={matchesMD?'center':undefined}>
            <Hidden lgUp>
               <Grid lg item style={{maxWidth:'45em',padding:'1.25em'}}>
                    <Typography variant="body1" align="center" paragraph> 
                    I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                    </Typography>

                    <Typography variant="body1" align="center" paragraph> 
                    Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.                    </Typography>
                </Grid>
               </Hidden>
                <Grid direction="column" alignItems={matchesMD?'center':undefined} style={{marginBottom:matchesMD?'2.5em':0}} lg item container>
                    <Grid item>
                        <img src={"/assets/yearbook.svg"} alt="yearbook page" style={{maxWidth:matchesMD?300:undefined}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">
                            A page from someone's sophomore book?
                        </Typography>
                    </Grid>
                </Grid>

               <Hidden mdDown>
               <Grid lg item style={{maxWidth:'45em',padding:'1.25em'}}>
                    <Typography variant="body1" align="center" paragraph> 
                    I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                    </Typography>

                    <Typography variant="body1" align="center" paragraph> 
                    Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.                    </Typography>
                </Grid>
               </Hidden>

                <Grid item alignItems={matchesMD?'center':'flex-end'} container lg direction="column" >
                    <Grid item>
                        <img src={"/assets/puppy.svg"} alt="grey puppy" style={{maxWidth:matchesMD?300:undefined}}  />
                    </Grid>
                    <Grid>
                        <Typography variant="caption">
                            Some dog with long hair
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
           <Calltoaction setValue={setValue} />
           </Grid>  
    </Grid>
)}

export default About;