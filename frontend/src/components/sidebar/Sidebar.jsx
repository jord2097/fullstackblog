import './sidebar.css';
import { Grid, Paper } from '@material-ui/core'
import useStyles from './styles';

export default function Sidebar(props) {
  const classes = useStyles()
  return (
    
        
        
          <Paper className={classes.sidebar}>          
          
            <span className='sidebarTitle'>About The Developer Academy</span>
            
              <img 
            src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg'
            alt='haha'
            style={{width:"100%",height:"fit-content"}}
              />
                      
            <p>

            
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            </p>
          
          </Paper>
        
        
    
    
  )
}
