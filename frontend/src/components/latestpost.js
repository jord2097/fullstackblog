import { Chip } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Latest5Post(props) {
  const { postId } = useParams()
  const [current, cCurrent] = useState({})

  const separatedTags = current.tags?.split(',')
  const trimmedTags = separatedTags?.map(tag => {
    return tag.trim()
  })

  const fetchPost = async () => {
    const postToDisplay = await props.client.Latest5Post(postId)
    cCurrent(postToDisplay.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <div className='post'>

        <div className="postInfo"></div>

        <span className="postDate"> {current.creationTime ? (current.creationTime) : "Unknown Date"} </span>
        <Chip label={trimmedTags ? trimmedTags[0] : ""} />
        <Chip label={trimmedTags ? trimmedTags[1] : ""} />
        <div className='' dangerouslySetInnerHTML={{ __html: current.mainText }} />
      </div>
      <div>
      <span className="postTitle"> {current.title} </span>
        <br />
      </div>


    </>

  )
}
