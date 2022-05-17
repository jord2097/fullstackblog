import "./topbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom'
import { AppBar, TextField, Toolbar, Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import { authService } from '../../_services/auth-service'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


export default function TopBar(props) {
  let navigate = useNavigate()
  const classes = useStyles()
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  const logout = () => {
    authService.logout()
    props.loggedIn()
    toastr["success"]("You have logged out.", "Logged out.")
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
          
          <Nav.Link href="/fullstackblog/#/add">Add</Nav.Link>    
          <Nav.Link variant="contained" onClick={logout}>Logout</Nav.Link>
          
          </>
        )
      } else {
        return (
          <Nav.Link variant="contained" onClick={logout}>Logout</Nav.Link>
        )
        }      
    } else {
      return (        
      <>
        
        
        <Nav.Link href="/fullstackblog/#/login">Login/Register</Nav.Link>    
        
        </>
      )
      
    } 
  }

  return (
    <Navbar bg="light" expand="lg" className="navContainer">
  <Container fluid >
    <Navbar.Brand href="/fullstackblog/#/">The Developer Academy</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/fullstackblog/#/">Home</Nav.Link>              
        {authorizedView()}
      </Nav>
      <Form className="d-flex" onSubmit={searchSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => props.cQuery(e.target.value)}
        />
        <Button variant="outlined" onClick={searchSubmit}>        
        <i className="topSearchIcon fas fa-search"></i>        
        </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  // MUI AppBar
    /* <AppBar>
    <Toolbar className="appbarRoot">
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
    </AppBar> */ 
  )
  
}
