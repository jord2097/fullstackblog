import "./topbar.css"
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, TextField, Toolbar, Typography, Button } from '@material-ui/core'
import useStyles from '../../styles'
import { authService } from '../../_services/auth-service'

export default function TopBar(props) {
  let navigate = useNavigate()
  const classes = useStyles()

  const logout = () => {
    authService.logout()
    props.loggedIn()
  }

  
  function searchSubmit (e) {
    e.preventDefault()
    const encodedQuery = encodeURI(props.query)
    navigate(`/search?q=${encodedQuery}`)
    props.search()
  }

  function authorizedView () {
    if(props.currentUser.user) {
      if (props.currentUser.user.role === 'admin' || props.currentUser.user.role === 'author') {
        return (
          <>
          
          <Link to="/add" className={classes.appbarFinalText}>ADD</Link>
          <Button variant="contained" onClick={logout}>LOGOUT</Button>
          
          </>
        )
      } else {
        return (
          <Button variant="contained" onClick={logout}>LOGOUT</Button>
        )
        }      
    } else {
      return (
        <>
        
        <Link to='/login' className={classes.appbarFinalText}>LOGIN/REGISTER</Link>
        
        </>
      )
      
    } 
  }



  return (
    <AppBar>
    <Toolbar>
      <Toolbar edge="start">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </Toolbar>      
      <Link to="/" className={classes.appbarText}>HOME</Link>      
      {authorizedView()}
      
      <form onSubmit={searchSubmit} className={classes.searchBar}>
        <TextField edge="end" style={{backgroundColor: "#FFFFFF"}} name="search" variant="outlined" label="search" onChange={(e) => props.cQuery(e.target.value)}/>
      </form>
      <Button variant="contained" className={classes.searchBarButton} onClick={searchSubmit}>
        <i className="topSearchIcon fas fa-search"></i>
      </Button>
      

      
    </Toolbar>
    





    </AppBar>
  )
  
}
