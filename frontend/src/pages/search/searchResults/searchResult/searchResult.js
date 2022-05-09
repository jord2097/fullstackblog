import React from 'react';
import useStyles from '../../../../styles'
import {Typography, Chip} from '@material-ui/core'
import {formatDate} from '../../../../_services/date-format'

export function SearchResult(props) {
    const regexHTML = /\n/g // identifies newlines
    const separatedTags = props.post.tags?.split(',')
    const trimmedTags = separatedTags?.map(tag => {
        return tag.trim()
    })   


    const classes = useStyles()
    return (
        <div className={classes.searchResult}>
            <img src={props.post.img ? props.post.img : "https://via.placeholder.com/210x125"} alt='post cover related to post theme' className={classes.searchResultImage} />
            <div className={classes.searchResultContent}>
                <Typography variant="h6">{props.post.title}</Typography>           
                <hr />
                <p className={classes.searchResultPostText} dangerouslySetInnerHTML={{__html: props.post.mainText.replace(regexHTML,"<br />")}} ></p>
            </div>
            <div className={classes.searchResultInfo}>
                <Typography variant="body2" >By {props.post.creatorID} at {props.post.creationTime ? formatDate(props.post.creationTime) : "Unknown Date"}</Typography>                
                <Typography variant="body2">Category: {props.post.category}</Typography>
                <Chip label={trimmedTags[0]} />
                <Chip label={trimmedTags[1]} />            
            </div>
        </div>
    )
}