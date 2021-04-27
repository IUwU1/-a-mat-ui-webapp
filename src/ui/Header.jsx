import React,{useEffect, useState} from 'react';

import {List,ListItem,ListItemText ,AppBar, Toolbar,useScrollTrigger,Tabs,Tab,Button,Menu,MenuItem,useMediaQuery,useTheme,SwipeableDrawer} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import Link from '../Link';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles=makeStyles(theme=>({
    toolbarMargin : {
        ...theme.mixins.toolbar, //importing height from the default theme of material ui
        marginBottom:'3em',
        [theme.breakpoints.down('md')]:{
          marginBottom:'2em'
        },
        [theme.breakpoints.down('xs')]:{
          marginBottom:'1.25em'
        }
    } ,
    logo:{
      height:'8em',
      [theme.breakpoints.down('md')]:{
        height:'7em'
      },
      [theme.breakpoints.down('xs')]:{
        height:'5.5em'
      }
    },
    tabsContainer:{
      marginLeft:'auto'
    },
    tab:{
      ...theme.typography.tab,
      minWidth:10,
      marginLeft:'25px'
    },
    button:{
      ...theme.typography.estimate,
      borderRadius:'50px',
      margin:'0 25px 0 50px',
      height:'45px',
      color:'white',
      "&:hover":{
        textDecoration:"none"
      }
    },
    logoContainer:{
      padding:0,
      '&:hover':{
        backgroundColor:'transparent'
      }
    },
    menu:{
      backgroundColor:theme.palette.common.blue,
      color:"white"
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:0.7,
        '&:hover':{
          opacity:1
        }
    },
    drawerButtonToggle:{
      marginLeft:'auto',
      '&:hover':{
        backgroundColor:'transparent'
      }
    },
    drawerIconToggle:{
      height:'40px',
      width:'40px'
    },
    drawer:{
backgroundColor:theme.palette.common.blue
    },
    drawerItems:{
      ...theme.typography.tab,
      color:'white',
      opacity:0.7
    },
    drawerItemsEstimate:{
      backgroundColor:theme.palette.common.orange
    },
    selectedDrawerTab:{
      opacity:1
    },
    appbar:{
      zIndex:theme.zIndex.modal + 1
    }
}))

const Header=({value,setValue, selectedIndex, setSelectedIndex })=>{

const[anchorEl,setAnchorEl]=useState(null);
const[openMenu,setOpenMenu]=useState(false);

const[openDrawer,setOpenDrawer]=useState(false);

const theme=useTheme();
const matches=useMediaQuery(theme.breakpoints.down('md')); //This will be returned true when screen size is less than md
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const handleClick=(e)=>{
  setAnchorEl(e.currentTarget);
  setOpenMenu(true);
}
const handleClose=()=>{
  setAnchorEl(null);
  setOpenMenu(false);
}

const handleMenuClick=(e,i)=>{
  setAnchorEl(null);
  setOpenMenu(false);
  setSelectedIndex(i);
}

// eslint-disable-next-line react-hooks/exhaustive-deps
const menuOption=[{name:"services",link:"/services",activeIndex:1,selectedIndex:0},
{name:"Custom Software Development",link:"/customsoftware",activeIndex:1,selectedIndex:1},
{name:"iOS/Android App Development",link:"/mobileapps",activeIndex:1,selectedIndex:2},
{name:"Website Development",link:"/websites",activeIndex:1,selectedIndex:3}]

// eslint-disable-next-line react-hooks/exhaustive-deps
const routes=[{name:'Home',link:"/",activeIndex:0},
{name:'Services',link:"/services",activeIndex:1,ariaOwns:anchorEl ? 'simple-menu' : undefined,
ariaPopup:anchorEl ? 'true' : undefined, mouseOver:event=>handleClick(event) },
{name:'The Revolution',link:"/revolution",activeIndex:2},
{name:'About Us',link:"/about",activeIndex:3},
{name:'Contact Us',link:"/contact",activeIndex:4}]

const tabChangeHandler=(e,value)=>{setValue(value)}
useEffect(()=>{

[...menuOption,...routes].forEach(route=>{
  switch(window.location.pathname){
    case `${route.link}` :
      if(value !== route.activeIndex){
        setValue(route.activeIndex)
        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
          setSelectedIndex(route.selectedIndex);
        }
      }
      break;
      case '/estimate':
        if(value!=5){
          setValue(5);
        }
        break;
      default:
        break;
  }
})

},[value,menuOption,selectedIndex,routes])

const classes=useStyles();    

const drawer=(
  <React.Fragment>
    <SwipeableDrawer classes={{paper:classes.drawer}} disableBackdropTransition={!iOS} 
    disableDiscovery={iOS} 
    open={openDrawer}
    onClose={()=>setOpenDrawer(false)}
    onOpen={()=>setOpenDrawer(true)}  
    >
      <div  className={classes.toolbarMargin} />
      <List disablePadding>
        {routes.map(routes=>(
          <ListItem key={`${routes.activeIndex}`} divider  button component={Link} href={routes.link}
          onClick={()=>{setOpenDrawer(false);setValue(routes.activeIndex)}} 
          selected={value === routes.activeIndex} >
            <ListItemText className={value===routes.activeIndex ?  [classes.selectedDrawerTab,classes.drawerItems].join(" "):classes.drawerItems} >
              {routes.name}</ListItemText>
          </ListItem>
        ))}
      
        <ListItem selected={value=== 5}  className={!value===5 ? [classes.drawerItems,classes.drawerItemsEstimate].join(" ") : [classes.selectedDrawerTab,classes.drawerItems,classes.drawerItemsEstimate].join(" ")} divider button onClick={()=>{setOpenDrawer(false);setValue(5)}}  component={Link} href='/estimate' >
          <ListItemText  > Free Estimate</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  </React.Fragment>
)



const tabs=(<React.Fragment>

           <Tabs value={value} onChange={tabChangeHandler} indicatorColor='primary' className={classes.tabsContainer} >
            {routes.map((routes,index)=>(
              <Tab key={`${routes}${index}`} className={classes.tab} component={Link} href={routes.link} label={routes.name}
              aria-owns={routes.ariaOwns} aria-haspopup={routes.ariaPopup} onMouseOver={routes.mouseOver} />
            ))}
         </Tabs>
         <Button component={Link} href="/estimate" variant="contained" color='secondary' className={classes.button} onClick={()=>setValue(5)} >Free Estimate</Button>
         
        <Menu style={{zIndex:1302 }} keepMounted classes={{paper:classes.menu}} id="simple-menu" anchorEl={anchorEl} MenuListProps={{onMouseLeave:handleClose}} open={openMenu} onClose={handleClose} >
          {menuOption.map((option,i)=>(
            <MenuItem key={option.name} component={Link} href={option.link}
             classes={{root:classes.menuItem}} 
             onClick={(event)=>{handleMenuClick(event,i);setValue(1);handleClose();}} 
             selected={i===selectedIndex && value===1} >{option.name}</MenuItem>
          ))}
       </Menu>
</React.Fragment>)

return(
    <React.Fragment>
    <ElevationScroll>
    <AppBar className={classes.appbar} >
         <Toolbar disableGutters >
           <Button disableRipple className={classes.logoContainer} onClick={()=>{setValue(0)}} component={Link} href="/"> 
           <img className={classes.logo} src={"/assets/logo.svg"} alt="Company Logo" /> 
           </Button>
           {matches ? drawer : tabs }
           {matches && !openDrawer && 
           <Button className={classes.drawerButtonToggle} onClick={()=>setOpenDrawer(true)}>
             <MenuIcon className={classes.drawerIconToggle}/>
             </Button> }
         </Toolbar> {/*Keeps the components within the AppBar horizontally */}
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </React.Fragment>
)
}

export default Header;