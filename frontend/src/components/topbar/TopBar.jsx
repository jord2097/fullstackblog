import "./topbar.css"
import { AppBar, TextField, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../../styles'

export default function TopBar() {
  const classes = useStyles()
  /* return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        
        </div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"> HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li> 
        </ul>
        
        </div>
        <Toolbar>
          <TextField style={{backgroundColor: "#FFFFFF"}} name="search" variant="outlined" label="search"      />
          <i className="topSearchIcon fas fa-search"></i>
        </Toolbar>        
        </div>
    
  ) */
  return (
    <AppBar>
    <Toolbar>
      <Toolbar edge="start">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </Toolbar>      
      <Typography className={classes.appbarText}>HOME</Typography>
      <Typography className={classes.appbarText}>ABOUT</Typography>
      <Typography
       className={classes.appbarFinalText}
              
      >CONTACT</Typography>
      <TextField edge="end" style={{backgroundColor: "#FFFFFF"}} name="search" variant="outlined" label="search"/>
      <i className="topSearchIcon fas fa-search"></i>

      
    </Toolbar>
    





    </AppBar>
  )
  
}
