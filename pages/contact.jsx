import React,{useState} from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import { Grid,Button,Typography,useMediaQuery,TextField,Dialog,DialogContent,CircularProgress,Snackbar } from "@material-ui/core";


import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles=makeStyles(theme=>({
    backg:{
        backgroundImage:`url(${"/assets/background.jpg"})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'60em',
        paddingBottom:'10em',
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${'/assets/mobileBackground.jpg'})`
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
        [theme.breakpoints.down('md')]:{
          marginRight:'0em',
          marginLedt:'0em',
      }
      },
      learnedButtonService:{
        ...theme.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down('md')]:{
          marginBottom:'2em'
        }
      },
      message:{
          border:`2px solid ${theme.palette.common.blue}`,
          borderRadius:'5px',
          marginTop:'5em'
      },
      sendButton:{
          ...theme.typography.estimate,
          borderRadius:50,
          height:45,
          width:245,
          fontSize:'1rem',
          backgroundColor:theme.palette.common.orange,
          "&:hover":{
              backgroundColor:theme.palette.secondary.light
          },
          [theme.breakpoints.down('sm')]:{
            height:40,
            width:225
          }
      }
}));

const Contact=({setValue, setSelectedIndex})=>{
    const classes=useStyles();
    const theme=useTheme();
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'));

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[emailHelper,setEmailHelper]=useState('');
    const[phone,setPhone]=useState('');
    const[phoneHelper,setphoneHelper]=useState('');
    const[message,setMessage]=useState('');
    const[open,setOpen]=useState(false);
    const[loading,setLoading]=useState(false);
    const[alert,setAlert]=useState({open:false,message:"",backgroundColor:""})

    const confirmModal=()=>{
        setLoading(true)
    setTimeout(() => {
        setOpen(false);
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setAlert({open:true,message:"Message Sent!",backgroundColor:"#4BB543"})
    }, 3000);
    }

    const onChange=(event)=>{
        let valid;

        switch(event.target.id){
            case 'email':
                setEmail(event.target.value);
                valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if(!valid){
                    setEmailHelper("Invalid Email!")
                }else{
                    setEmailHelper("")
                }
                break;
                case 'phone':
                setPhone(event.target.value);
                valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if(!valid){
                    setphoneHelper("Invalid Phone Number!");
                }else{
                    setphoneHelper("");
                }
                break;
                default:
                break;
        }
    }

    const buttonContent=(
        <React.Fragment>
Send Message 
<img style={{marginLeft:'1em'}} src={"/assets/send.svg"} alt="paper airplane" />
        </React.Fragment>
    )

    return(
    <Grid container >
        <Head>
            <title key="title">Contact us |Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="Let us guide you through the custom software design and development process.Send us a message asking anything!" />
        </Head>
        <Grid item container style={{margin : matchesMD ? '5em 0' : '0'}} direction="column" justify='center' alignItems="center" lg={4} xl={3}>
           <Grid item>
               <Grid container direction="column">
               <Grid item>
                <Typography align={matchesMD?"center":undefined} variant="h1" style={{lineHeight:1}}>
                    Contact Us
                </Typography>
                <Typography variant="body1" align={matchesMD?"center":undefined} style={{color:theme.palette.common.blue}}>
                    We're waiting.
                </Typography>
           </Grid> 
           <Grid item container  style={{marginTop:'2em'}} >
               <Grid item>
                   <img src={"/assets/phone.svg"} alt="phone icon" style={{marginRight:'0.5em'}}/> 
               </Grid>
               <Grid item>
                    <Typography variant='body1' style={{color:theme.palette.common.blue,fontSize:'1em'}}><a style={{textDecoration:'none'}} href="tel:5555555555"> (555) 555-5555</a></Typography>
               </Grid>
            </Grid>     
           <Grid item container >
               <Grid item>
                   <img src={"/assets/email.svg"} alt="email icon" style={{marginRight:'0.5em',verticalAlign:'bottom'}}/> 
               </Grid>
               <Grid item>
                    <Typography variant='body1' style={{color:theme.palette.common.blue,fontSize:'1em'}}><a style={{textDecoration:'none'}} href="mailto:arcdev@dev.com"> arcdev@dev.com</a></Typography>
               </Grid>
            </Grid> 
        <Grid item container  direction="column" style={{maxWidth:'20em',marginTop:'2em'}}>
            <Grid item style={{marginBottom:'0.5em'}}>
                 <TextField fullWidth label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </Grid>
            <Grid item style={{marginBottom:'0.5em'}}>
                 <TextField 
                 fullWidth 
                 label="Email" 
                 id="email" 
                 helperText={emailHelper}  //error message
                 error={emailHelper.length!==0} //true to display the above error message
                 value={email} 
                 onChange={onChange}/>
            </Grid>
            <Grid item>
                 <TextField fullWidth label="Phone" helperText={phoneHelper} id="phone" error={phoneHelper.length!==0} value={phone} onChange={onChange}/>
            </Grid>
        </Grid>  
        <Grid item style={{maxWidth:'20em'}}>
            <TextField fullWidth InputProps={{disableUnderline:true}} value={message} className={classes.message} multiline rows={10} id="message" onChange={(e)=>setMessage(e.target.value)} />
        </Grid> 
        <Grid item container justify="center" style={{marginTop:'2em'}}>
            <Button onClick={()=>setOpen(true)} disabled={name.length===0 || message.length===0 || phoneHelper.length!==0 || emailHelper.length!==0 } variant="contained" className={classes.sendButton} >
                {buttonContent }
            </Button>
        </Grid> 
               </Grid>
           </Grid>
        </Grid>
        <Dialog open={open} onClose={()=>setOpen(false)} style={{zIndex:1303}} >
            <DialogContent>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">Confirm Message</Typography>
                    </Grid>
                     <Grid item style={{marginBottom:'0.5em'}}>
                        <TextField fullWidth label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                     </Grid>
                     <Grid item style={{marginBottom:'0.5em'}}>
                      <TextField 
                      fullWidth 
                      label="Email" 
                      id="email" 
                       helperText={emailHelper}  //error message
                       error={emailHelper.length!==0} //true to display the above error message
                     value={email} 
                       onChange={onChange}/>
                    </Grid>
                   <Grid item>
                         <TextField fullWidth label="Phone" helperText={phoneHelper} id="phone" error={phoneHelper.length!==0} value={phone} onChange={onChange}/>
                  </Grid>  
                <Grid item style={{maxWidth:'20em'}}>
                     <TextField fullWidth InputProps={{disableUnderline:true}} value={message} className={classes.message} multiline rows={10} id="message" onChange={(e)=>setMessage(e.target.value)} />
                    </Grid> 
                </Grid>
                <Grid item container style={{marginTop:'2em'}} alignItems="center">
                <Grid item>
                    <Button color="primary" onClick={()=>setOpen(false)}>Cancel</Button>
                </Grid>
                <Grid item>
                <Button onClick={confirmModal} disabled={name.length===0 || message.length===0 || phoneHelper.length!==0 || emailHelper.length!==0 } variant="contained" className={classes.sendButton} >
                {loading? <CircularProgress size={30} /> : buttonContent }
            </Button>
                </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
        anchorOrigin={{vertical:"top",horizontal:"center"}}  onClose={()=>setAlert({...alert,open:false})} autoHideDuration={4000}    />
        <Grid item container direction={matchesMD?'column':'rows'} justify={matchesMD?'center':undefined} className={classes.backg} alignItems="center" lg={8} xl={9} >
        <Grid item style={{marginLeft:matchesMD ?0 :'5em' ,textAlign:matchesMD ? 'center' : 'inherit'}} >
        <Grid container direction="column">
            <Grid item>
                <Typography align={matchesMD?'center':undefined} variant="h1">
                Simple Software. <br /> Revolutionary Results.
                </Typography>
                <Typography align={matchesMD?'center':undefined} variant="subtitle2" style={{fontSize:'1.5rem'}} >
                Take advantage of the 21st Century.
                </Typography>
                <Grid container justify={matchesMD ? 'center' : undefined} item>
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
        </Grid>
    </Grid>)
}

export default Contact;