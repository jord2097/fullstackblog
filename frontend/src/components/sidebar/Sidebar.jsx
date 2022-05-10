import './sidebar.css';
import { Grid, Paper } from '@material-ui/core'

export default function Sidebar(props) {
  


  return (
    <Grid xs={12} sm={4}>
        
        
          <>          
          <div className="sidebarItem">
            <span className='sidebarTitle'>About The Developer Academy</span>
            <Paper>
              <img 
            src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg'
            alt='haha'
            style={{width:"100%",height:"fit-content"}}
              />
            </Paper>            
            <p>

            
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            </p>
    </div>
          
          </>
        
        
    </Grid>
    
  )
}
