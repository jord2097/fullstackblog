import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home(props) {
  return (

    <>
        <Header/>
      <div className="home">
        <Posts client={props.client} refreshList={props.refreshList} posts={props.posts} cPosts={props.cPosts} current={props.current} cCurrent={props.cCurrent} currentUser={props.currentUser} />        
        <Sidebar client={props.client} refreshList={() => {
            props.refreshList()
            props.cCurrent(undefined)
           }}
           current={props.current}
           cCurrent={props.cCurrent}           
           currentUser={props.currentUser}
           loggedIn={props.loggedIn} 
        />
      </div>
    </>
  )
}
