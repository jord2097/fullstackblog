import Posts from '../../components/posts/Posts';

export default function Latest5Post(props) {

return(
<div>
<span className="postDate"> By {current.creatorID} at {current.creationTime ? formatDate(current.creationTime) : "Unknown Date"} </span>
</div>
)       
}