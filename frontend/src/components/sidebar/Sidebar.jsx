import './sidebar.css';
import Add from '../CreateNewPost.js'
import Login from '../../pages/login/Login'
import { Grid } from '@material-ui/core'
import { authService } from '../../_services/auth-service'

export default function Sidebar(props) {
  

  return (
    <Grid item xs={12} sm={4}>
        
        {props.currentUser.token ? (
          <Add client={props.client} refreshList={props.refreshList} current={props.current} cCurrent={props.cCurrent} currentUser={props.currentUser}/>
        ) : (
          <Login client={props.client}/>
        )}
    </Grid>
    
  )
}
