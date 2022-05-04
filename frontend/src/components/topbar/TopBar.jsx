import "./topbar.css"
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, TextField, Toolbar, Typography, Button } from '@material-ui/core'
import useStyles from '../../styles'

export default function TopBar(props) {
  let navigate = useNavigate()
  const classes = useStyles()

  
  function searchSubmit (e) {
    e.preventDefault()
    const encodedQuery = encodeURI(props.query)
    navigate(`/search?q=${encodedQuery}`)
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
      <Link to="#" className={classes.appbarText}>ADD</Link>
      <Link to="#" className={classes.appbarFinalText}>ABOUT</Link>
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
