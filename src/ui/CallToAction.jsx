import React from 'react';

import {Grid,Typography,Button, useTheme, useMediaQuery} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Link from '../Link';

import ButtonArrow from'./ButtonArrow';

const useStyles=makeStyles(theme=>({
    learnedButtonService:{
        ...theme.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down('sm')]:{
          marginBottom:'2em'
        }
      },
      bgbg:{
        backgroundImage:`url(${"/assets/background.jpg"})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        height:'100%',
        width:'100%',
        marginTop:'12em',
        height:'60em',
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${"/assets/mobileBackground.jpg"})`,
            backgroundAttachment:'inherit',
        }
      },
      estimateButton:{
        ...theme.typography.estimate,
        marginRight:'5em',
        marginLedt:'2em',
        borderRadius:50,
        height:80,
        width:205,
        backgroundColor:theme.palette.common.orange,
        fontSize:'1.5rem',
        "&:hover":{
          backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]:{
          marginRight:'0em',
          marginLedt:'0em',
      }
      }
}))

const CallToAction=({setValue})=>{
const classes=useStyles();
const theme=useTheme();
const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))

return(<Grid  justify={matchesSM ? 'center' : 'space-between'} className={classes.bgbg} alignItems="center" container direction={matchesSM ? 'column' : 'row'}>
    <Grid item style={{marginLeft:matchesSM ?0 :'5em' ,textAlign:matchesSM ? 'center' : 'inherit'}} >
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h1">
                Simple Software. <br /> Revolutionary Results.
                </Typography>
                <Typography variant="subtitle2" style={{fontSize:'1.5rem'}} >
                Take advantage of the 21st Century.
                </Typography>
                <Grid container justify={matchesSM ? 'center' : undefined} item>
                <Button component={Link} href="/revolution" onClick={()=>setValue(2)} variant="outlined" className={classes.learnedButtonService}>
                Learn More <ButtonArrow height={15} width={15} fill="red" />
              </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <Grid item>
      <Button variant="contained" onClick={()=>setValue(5)} component={Link} href="/estimate" className={classes.estimateButton} > Free Estimate</Button>
    </Grid>
</Grid>)
}

export default CallToAction;
