import './sidebar.css';
import Add from '../CreateNewPost.js'
import Login from '../../pages/login/Login'
import { Grid } from '@material-ui/core'
import { authService } from '../../_services/auth-service'

export default function Sidebar(props) {
  const logout = () => {
    authService.logout()
    props.loggedIn()
  }


  return (
    <Grid xs={12} sm={4}>
        
        {props.currentUser.token ? (
          <>
          <button onClick={logout} >logout</button>
          <Add client={props.client} refreshList={props.refreshList} current={props.current} cCurrent={props.cCurrent} currentUser={props.currentUser}/>
          
          </>
        ) : (
          <Login client={props.client} loggedIn={props.loggedIn}/>
        )}
        
    </Grid>
    
  )
}
