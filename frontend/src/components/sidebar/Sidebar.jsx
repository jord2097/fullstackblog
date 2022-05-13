import './sidebar.css';
import { Grid, Paper } from '@material-ui/core'
import useStyles from './styles';
import logo from '../../images/logo.png'

export default function Sidebar(props) {
  const classes = useStyles()
  return (
    
        
        
          <Paper className={classes.sidebar}>          
            <img class="sidebarImage" src={logo} style={{width:"100%",height:"fit-content"}}
            /> <hr/> 
             <div className='sidebarTitle'>ABOUT US</div> <hr/> <hr/>      
            <div className='TDA-Description'>
            We train junior Software Developers and Data Analystis from anywhere with our Part Time, 24 week online bootcamps.Many people think tech companies are only interested in graduates with Computer Science degrees. This isn’t true. Tech companies are interested in your skills, not your qualifications. Other people think you need to be a mathematical genius. This isn’t true either. 
            </div>
          
          </Paper>
        
        
    
    
  )
}
