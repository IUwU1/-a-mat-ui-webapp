import React,{useState} from 'react';
import Lottie from 'react-lottie';
import Head from 'next/head';
import { cloneDeep } from "lodash";
import { makeStyles  } from "@material-ui/core/styles";
import { CircularProgress,Snackbar,Grid,Button,Typography,useMediaQuery,useTheme,IconButton,Dialog,DialogContent,TextField} from "@material-ui/core";

import estimateAnimation from '../src/animations/estimateAnimation/data.json';

const useStyles=makeStyles(theme=>({
icon:{
    wodth:'12em',
    height:'10em'
},
estimateButton:{
    ...theme.typography.estimate,
    borderRadius:50,
    backgroundColor:theme.palette.common.orange,
    height:50,
    width:225,
    fontSize:'1.25rem',
    margintop:'5em',
    "&:hover":{
        backgroundColor:theme.palette.secondary.light
    }
},
message:{
  border:`2px solid ${theme.palette.common.blue}`,
  borderRadius:'5px',
  marginTop:'5em'
},
speacialText:{
  fontFamily:'Raleway',
  fontWeight:700,
  fontSize:'1.5rem',
  color:theme.palette.common.orange
}
}))

const Estimate=()=>{
    const classes=useStyles();
    const theme=useTheme();

    const[dialogOpen,setDialogOpen]=useState(false);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[emailHelper,setEmailHelper]=useState('');
    const[phone,setPhone]=useState('');
    const[phoneHelper,setphoneHelper]=useState('');
    const[message,setMessage]=useState('');

    const[totalEstimate,setTotalEstimate]=useState('');

    const[service,setService]=useState([]);
    const[platforms,setplatforms]=useState([]);
    const[features,setfeatures]=useState([]);
    const[customFeatures,setcustomFeatures]=useState([]);
    const[category,setCategory]=useState();
    const[users,setusers]=useState([]);

    const matchesMD=useMediaQuery(theme.breakpoints.down('md'));

    const[loading,setLoading]=useState(false);
    const[alert,setAlert]=useState({open:false,message:"",backgroundColor:""})

    const sendEstimate=()=>{
      setLoading(true)
   
  setTimeout(() => {
    setDialogOpen(false)
      setLoading(false);
      setDialogOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAlert({open:true,message:"Message Sent!",backgroundColor:"#4BB543"})
  }, 3000);
  }

    const defaultQuestions=[{
        id:1,
        title:'Which service are you interested in?',
        active:true,
        options:[
            {
                id:1,
                title:'Custom Software Development',
                subtitle:null,
                icon:"/assets/software.svg",
                iconAlt:'floating screens',
                selected:false,
                cost:0
            },
            {
                id:2,
                title:'iOS/Android App Development',
                subtitle:null,
                icon:"/assets/mobile.svg",
                iconAlt:'phone screens',
                selected:false,
                cost:0
            },
            {
                id:3,
                title:'Website Development',
                subtitle:null,
                icon:"/assets/website.svg",
                iconAlt:'Computer screens',
                selected:false,
                cost:0
            }
        ]
    }];

    const softwareQuestions = [
        { ...defaultQuestions[0], active: false },
        {
          id: 2,
          title: "Which platforms do you need supported?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Web Application",
              subtitle: null,
              icon: "../assets/website.svg",
              iconAlt: "computer outline",
              selected: false,
              cost: 100
            },
            {
              id: 2,
              title: "iOS Application",
              subtitle: null,
              icon: "../assets/iphone.svg",
              iconAlt: "outline of iphone",
              selected: false,
              cost: 100
            },
            {
              id: 3,
              title: "Android Application",
              subtitle: null,
              icon: "../assets/android.svg",
              iconAlt: "outlines of android phone",
              selected: false,
              cost: 100
            }
          ],
          active: true
        },
        {
          id: 3,
          title: "Which features do you expect to use?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Photo/Video",
              subtitle: null,
              icon: "/assets/camera.svg",
              iconAlt: "camera outline",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "GPS",
              subtitle: null,
              icon: "/assets/gps.svg",
              iconAlt: "gps pin",
              selected: false,
              cost: 25
            },
            {
              id: 3,
              title: "File Transfer",
              subtitle: null,
              icon: "/assets/upload.svg",
              iconAlt: "outline of cloud with arrow pointing up",
              selected: false,
              cost: 25
            }
          ],
          active: false
        },
        {
          id: 4,
          title: "Which features do you expect to use?",
          subtitle: "Select all that apply.",
          options: [
            {
              id: 1,
              title: "Users/Authentication",
              subtitle: null,
              icon: "/assets/users.svg",
              iconAlt: "outline of a person with a plus sign",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "Biometrics",
              subtitle: null,
              icon: "/assets/biometrics.svg",
              iconAlt: "fingerprint",
              selected: false,
              cost: 25
            },
            {
              id: 3,
              title: "Push Notifications",
              subtitle: null,
              icon: "/assets/bell.svg",
              iconAlt: "outline of a bell",
              selected: false,
              cost: 25
            }
          ],
          active: false
        },
        {
          id: 5,
          title: "What type of custom features do you expect to need?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "Low Complexity",
              subtitle: "(Informational)",
              icon: "/assets/info.svg",
              iconAlt: "'i' inside a circle",
              selected: false,
              cost: 25
            },
            {
              id: 2,
              title: "Medium Complexity",
              subtitle: "(Interactive, Customizable, Realtime)",
              icon: "/assets/customized.svg",
              iconAlt: "two toggle switches",
              selected: false,
              cost: 50
            },
            {
              id: 3,
              title: "High Complexity",
              subtitle: "(Data Modeling and Computation)",
              icon: "/assets/data.svg",
              iconAlt: "outline of line graph",
              selected: false,
              cost: 100
            }
          ],
          active: false
        },
        {
          id: 6,
          title: "How many users do you expect?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "0-10",
              subtitle: null,
              icon: "/assets/person.svg",
              iconAlt: "person outline",
              selected: false,
              cost: 1
            },
            {
              id: 2,
              title: "10-100",
              subtitle: null,
              icon: "../assets/persons.svg",
              iconAlt: "outline of two people",
              selected: false,
              cost: 1.25
            },
            {
              id: 3,
              title: "100+",
              subtitle: null,
              icon: "../assets/people.svg",
              iconAlt: "outline of three people",
              selected: false,
              cost: 1.5
            }
          ],
          active: false
        }
      ];
      
      
      const websiteQuestions = [
        { ...defaultQuestions[0], active: false },
        {
          id: 2,
          title: "Which type of website are you wanting?",
          subtitle: "Select one.",
          options: [
            {
              id: 1,
              title: "Basic",
              subtitle: "(Informational)",
              icon: "/assets/info.svg",
              iconAlt: "person outline",
              selected: false,
              cost: 100
            },
            {
              id: 2,
              title: "Interactive",
              subtitle: "(Users, API's, Messaging)",
              icon: "/assets/customized.svg",
              iconAlt: "outline of two people",
              selected: false,
              cost: 200
            },
            {
              id: 3,
              title: "E-Commerce",
              subtitle: "(Sales)",
              icon: "/assets/globe.svg",
              iconAlt: "outline of three people",
              selected: false,
              cost: 250
            }
          ],
          active: true
        }
      ];
      
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: estimateAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

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

      const[questions,setQuestions]=useState(defaultQuestions);

      const nextQuestions=()=>{
        const newQuestions=cloneDeep(questions);
        const currentlyActive=newQuestions.filter(ques=>ques.active);
        const activeIndex=currentlyActive[0].id-1;
        const nextIndex=activeIndex+1;

        newQuestions[activeIndex]={...currentlyActive[0],active:false};
        newQuestions[nextIndex]={...newQuestions[nextIndex],active:true};

        setQuestions(newQuestions);
      }

      const previousQuestions=()=>{
        const newQuestions=cloneDeep(questions);
        const currentlyActive=newQuestions.filter(ques=>ques.active);
        const activeIndex=currentlyActive[0].id-1;
        const nextIndex=activeIndex-1;

        newQuestions[activeIndex]={...currentlyActive[0],active:false};
        newQuestions[nextIndex]={...newQuestions[nextIndex],active:true};

        setQuestions(newQuestions);
      }

      const prevdisabled=()=>{
        const currentlyActive=questions.filter(ques=>ques.active);

        if(currentlyActive[0].id===1){
            return true;
        }else{
            return false;
        }
      }

      const nextdisabled=()=>{
        const currentlyActive=questions.filter(ques=>ques.active);

        if(currentlyActive[0].id===questions[questions.length-1].id){
            return true;
        }else{
            return false;
        }
      }
      
      const handleSelect=(id)=>{
        const newQuestions=cloneDeep(questions);
        const currentlyActive=newQuestions.filter(ques=>ques.active);
        const activeIndex=currentlyActive[0].id-1;

        const newSelected=newQuestions[activeIndex].options[id-1];
        const previousSelected=currentlyActive[0].options.filter(option=>option.selected);
        
        switch(currentlyActive[0].subtitle){
            case 'Select one.':
                if(previousSelected[0]){
                    previousSelected[0].selected=!previousSelected[0].selected;
                }
                newSelected.selected = !newSelected.selected;
                break;
                default:
                newSelected.selected = !newSelected.selected;
                break;
        }

        switch(newSelected.title){
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                setplatforms([]);
                setfeatures([])
                setcustomFeatures("");
                setusers("");
                setCategory("");
                break;
                case 'iOS/Android App Development':
                    setQuestions(softwareQuestions);
                    setService(newSelected.title);
                    setplatforms([]);
                    setfeatures([])
                    setcustomFeatures("");
                    setusers("");setCategory("");
                    break;
                    case 'Website Development':
                        setQuestions(websiteQuestions);
                        setService(newSelected.title);
                        setplatforms([]);
                        setfeatures([])
                        setcustomFeatures("");
                        setCategory("");
                        setusers(""); 
                        break;
                        default:
                            setQuestions(newQuestions);
        }

      }
const getCost=()=>{
  let cost=0;

  const selections=questions.map(question=>question.options.filter(option=>option.selected)).filter(question=>question.length>0);
  selections.map(options=>options.map(option=>(cost += option.cost)));

  if(questions.length>2){
    const userCost = questions.filter(question=>
      question.title==="How many users do you expect?").map(question=>
        question.options.filter(option=>option.selected))[0][0];

      setusers(userCost.title);    

      cost -= userCost.cost;
      cost *= userCost.cost;
    }

  setTotalEstimate(cost);
}

const getPlatforms=()=>{
  let newPlatforms=[];

  if(questions.length > 2){
    questions.filter(question=>question.title==="Which platforms do you need supported?").map(question=>
      question.options.filter(option=>option.selected))[0].map(option=>newPlatforms.push(option.title));
  }
  setplatforms(newPlatforms);
}

const getFeatures=()=>{
  let newFeatures=[];

  if(questions.length > 2){
    questions.filter(question=>question.title==="Which features do you expect to use?").map(question=>
      question.options.filter(option=>option.selected)).map(option=>option.map(newFeature=>newFeatures.push(newFeature.title)));
  }
  setfeatures(newFeatures);
}

const getCustomFeatures=()=>{
  if(questions.length > 2){
    const newCustomFeatures=questions.filter(question=>question.title==="What type of custom features do you expect to need?").map(question=>
      question.options.filter(option=>option.selected))[0][0].title

      setcustomFeatures(newCustomFeatures);
  }
}

const getCategory=()=>{
  if(questions.length===2){
    const newCategory=questions.filter(question=>question.title==="Which type of website are you wanting?")[0].options.filter(option=>option.selected)[0].title
    setCategory(newCategory);
  }
  
}

const softwareSelection=(
  <Grid container direction="column" >
                          <Grid item container alignItems="center" style={{marginBottom:'1.25em'}} >
                            <Grid item xs={2}>
                              <img src={"/assets/check.svg"} alt="Checkmate" />
                            </Grid>
                            <Grid item xs={10}>
                              <Typography variant="body1" >You want {service} {platforms.length>0?
                              `for ${
                                //if only web application is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 1
                                  ? //then finish sentence here
                                    "a Web Application."
                                  : //otherwise, if web application and another platform is selected...
                                  platforms.indexOf("Web Application") > -1 &&
                                    platforms.length === 2
                                  ? //then finish the sentence here
                                    `a Web Application and an ${platforms[1]}.`
                                  : //otherwise, if only one platform is selected which isn't web application...
                                  platforms.length === 1
                                  ? //then finish the sentence here
                                    `an ${platforms[0]}`
                                  : //otherwise, if other two options are selected...
                                  platforms.length === 2
                                  ? //then finish the sentence here
                                    "an iOS Application and an Android Application."
                                  : //otherwise if all three are selected...
                                  platforms.length === 3
                                  ? //then finish the sentence here
                                    "a Web Application, an iOS Application, and an Android Application."
                                  : null
                              }`
                              :null} </Typography>
                            </Grid>
                          </Grid>
                          <Grid item container alignItems="center" style={{marginBottom:'1.25em'}} >
                            <Grid item xs={2}>
                              <img src={"/assets/check.svg"} alt="Checkmate" />
                            </Grid>
                            <Grid item xs={10} >
                              <Typography variant="body1" >
                              {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                          ? //...and there's only 1...
                            features.length === 1
                              ? //then end the sentence here
                              `${features[0]}.`
                              : //otherwise, if there are two features...
                            features.length === 2
                              ? //...then end the sentence here
                              `${features[0]} and ${features[1]}.`
                              : //otherwise, if there are three or more features...
                              features
                            //filter out the very last feature...
                            .filter(
                              (feature, index) =>
                              index !== features.length - 1
                            )
                            //and for those features return their name...
                            .map((feature, index) => (
                              <span key={index}>{`${feature}, `}</span>
                            ))
                          : null}
                        {features.length > 0 &&
                          features.length !== 1 &&
                          features.length !== 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item container alignItems="center" style={{marginBottom:'2.25em'}} >
                            <Grid item xs={2} >
                              <img src={"/assets/check.svg"} alt="Checkmate" />
                            </Grid>
                            <Grid item xs={10}>
                              <Typography variant="body1" >The custom features will be {customFeatures} {`and the expected users are ${users}`} </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
)

const websiteSelection=(
  <Grid container direction="column" >
                          <Grid item container alignItems="center" style={{marginBottom:'1.25em'}} >
                            <Grid item xs={2} >
                              <img src={"/assets/check.svg"} alt="Checkmate" />
                            </Grid>
                            <Grid item xs={10} >
                              <Typography variant="body1" >You want {category==="Basic"?"a Basic Website":`an ${category} Website.`}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
)

const buttonContent=(
  <React.Fragment>
  Send Request
  <img src={"/assets/send.svg"} alt="paper airplane send" style={{marginLeft:"0.5em"}} />
  </React.Fragment>
)

const estimateDis=()=>{
  let disabled=false;

  const emptySelections=questions.map(question=>question.options.filter(option=>option.selected)).filter(question=>
      question.length===0);

      if(questions.length===2){
        if(emptySelections.length===1){
          disabled= false;
        }else if(questions.length===1){
          disabled= false;
        } else if(emptySelections.length<3 && questions[questions.length-1].options.filter(option=>option.selected).length>0){
          disabled= false;
        } 
      }

      return disabled;
}

    return(
        <Grid container direction="row">
    <Head>
            <title key="title">Free Custom Software Estimate|Arc Development </title>
            <meta 
            name="description" 
            key="description" 
            content="We provide you with aa free estimate for the software you need!" />
        </Head>
            <Grid item container direction="column" lg alignItems={matchesMD?'center':undefined} >
                <Grid item style={{marginTop:'2em',marginLeft:matchesMD?0:'5em'}}>
                    <Typography variant="h1" align={matchesMD?'center':undefined} >Estimate</Typography>
                </Grid>
                <Grid item style={{maxWidth:'50em',marginRight:matchesMD?0:'10em',marginTop:'7.5em'}}>
                    <Lottie options={defaultOptions} height="100%" width="100%" />
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" lg style={{marginRight:matchesMD?0:'2em',marginBottom:'25em'}}>
                {questions.filter(question=>question.active).map((question,index)=>(
                    <React.Fragment key={index}>
                        <Grid item >
                    <Typography variant="h1" align="center" style={{fontWeight:500,marginTop:'5em'}}  >
                        {question.title}
                    </Typography>
                    <Typography variant="body1" align="center" style={{marginBottom:'2.5em'}}  >
                        {question.subtitle}
                    </Typography>
                </Grid>
                <Grid item container >
                {question.options.map(option=>(
        <Grid item container direction="column" onClick={()=>handleSelect(option.id)} md
         component={Button} 
         style={{display:"grid", margin:2,textTransform:"none",backgroundColor:option.selected?theme.palette.common.orange:null}} >
            <Grid item style={{maxWidth:"14em"}}>
               <Typography variant="h6"  align="center" style={{marginBottom:'1em'}} >{option.title}</Typography> 
               <Typography variant="caption" align="center" >{option.subtitle}</Typography>     
            </Grid>
            <Grid item>
                <img className={classes.icon} src={option.icon} alt={option.iconAlt}/>
            </Grid>
        </Grid>
                ))}</Grid>
                    </React.Fragment>
                ))}
                
     
                <Grid item container justify="space-between" style={{maxWidth:'15em',marginTop:'3em'}}>
                    <Grid item>
                        <IconButton disabled={prevdisabled()} onClick={previousQuestions}>
                        <img src={prevdisabled()?"/assets/backArrowDisabled.svg":"/assets/backArrow.svg"} alt="prev question" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                    <IconButton disabled={nextdisabled()} onClick={nextQuestions}>
                    <img src={nextdisabled()?"/assets/forwardArrowDisabled.svg":"/assets/forwardArrow.svg"} alt="next question" />   
                    </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" disabled={estimateDis()} onClick={()=>{getCategory();setDialogOpen(true);getCost();getPlatforms();getFeatures();getCustomFeatures();}} className={classes.estimateButton} >Get Estimate</Button>
                </Grid>

            </Grid>
            <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)} maxWidth="xl" style={{zIndex:1303}} >
                <Grid container justify="center" >
                   <Grid item>  
                   <Typography variant="h1" align="center">
                      Estimate
                   </Typography>
                   </Grid> 
                </Grid>
                <DialogContent>
                  <Grid container>
                    <Grid item container direction="column" justify="center" alignItems={matchesMD?"center":undefined} style={{paddingLeft:matchesMD?0:'5em'}} md={7}>
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
        <Grid item container justify={matchesMD?"center":undefined}  >
          <Typography style={{fontWeight:700,color:'black',fontSize:'1.5em'}} > Estimate :<span className={classes.speacialText}  >  ${totalEstimate}</span> </Typography>
        </Grid>
                    </Grid>
                    <Grid item container direction="column" md={5} style={{padding:'2em 5em'}}  >
                      <Grid item  >
                          {questions.length>2?softwareSelection:websiteSelection}
                      </Grid>
                      <Grid item align={matchesMD?"center":undefined} >
                        <Button variant="contained" disabled={name.length===0 || email.length===0 || phone.length===0 || message.length===0} onClick={sendEstimate} className={classes.estimateButton}>
                          {loading?<CircularProgress/>:buttonContent} </Button> 
                        <Grid item style={{marginTop:'1.25em'}} >
                          <Button style={{fontWeight:300}} color="primary" onClick={()=>setDialogOpen(false)} >Cancel </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
        anchorOrigin={{vertical:"top",horizontal:"center"}}  onClose={()=>setAlert({...alert,open:false})} autoHideDuration={4000}    />
        </Grid>
    )
}

export default Estimate;