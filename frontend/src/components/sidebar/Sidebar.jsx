import './sidebar.css';
import Add from '../CreateNewPost.js'
import Login from '../../pages/login/Login'
import { Grid } from '@material-ui/core'

export default function Sidebar(props) {
  return (
    <Grid item xs={12} sm={4}>
        

        {props.token ? (
          <Add client={props.client} refreshList={props.refreshList} current={props.current} cCurrent={props.cCurrent} currentRole={props.currentRole}/>
        ) : (
          <Login loggedIn={props.loggedIn} client={props.client}/>
        )}
    </Grid>
    
  )
}
