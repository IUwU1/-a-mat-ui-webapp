import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue="#0B72B9";
const arcOrange="#FFBA60";
const arcGrey='#868686';

export default createMuiTheme({ //This will overwrite the theme wherever needed
    palette:{  //for styling with colors
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrange}`
        },
    },
      typography:{ //styling texts
        tab:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontWeight:700,
            fontSize:'1rem',
            color:'white'
        },
        estimate:{
            fontFamily:'Pacifico',
            fontSize:'1rem',
            textTransform:'none'
        },
        h1:{
            fontFamily:'Raleway',
            fontWeight:700,
            fontSize:'2.5rem',
            color:`${arcBlue}`,
            lineHeight:'1.5'
        },
        h3:{
            fontFamily:'Pacifico',
            fontSize:'2.5rem',
            color:arcBlue
        },
        h4:{
            fontFamily:'Raleway',
            fontSize:'1.5rem',
            color:`${arcBlue}`,
            fontWeight:700
        },
        subtitle1:{
            fontSize:'1.25rem',
            color:`${arcGrey}`,
            fontWeight:300
        },
        subtitle2:{
            fontSize:'1.25rem',
            color:"white",
            fontWeight:300
        },
        body1:{
            fontSize:'1.25rem',
            color:arcGrey,
            fontWeight:300
        },
        caption:{
            fontSize:'1rem',
            fontWeight:300,
            color:arcGrey
        },
        h6:{
           fontWeight:500,
           fontFamily:'Raleway',
           color:`${arcBlue}`,

        }



    },
    overrides:{
        MuiInputLabel:{
            root:{
                color:arcBlue,
                fontSize:'1rem'
            }
        },
        MuiInput:{
            root:{
              color:arcGrey,
              fontWeight:300      
            },
            underline:{
                "&:before":{
                    borderBottom:`2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before:":{
                    borderBottom:  `2px solid ${arcBlue}` 
                }
            }
        }
    },
learnButton:{
    borderColor:`${arcBlue}`,
    color:`${arcBlue}`,
    borderWidth:2,
    textTransform:'none',
    borderRadius:50,
    fontFamily:'Roboto',
    fontWeight:'bold',
    "&:hover":{
      textDecoration:"none"
    }
    }});