import './sidebar.css';
import Add from '../CreateNewPost.js'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        {/* <div className="sidebarItem">
            <span className='sidebarTitle'>about me</span>
            <img 
            src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg' alt='haha'
            />
            <p>
            How to create a blog website using React.js. Blog app React project from scratch for beginners. Design React blog app using functional React components and React Router Dom.
            </p>
        </div> */}
        <Add client={props.client} refreshList={props.refreshList} current={props.current} cCurrent={props.cCurrent}/>
    </div>
    
  )
}
