import React from 'react';
import useStyles from '../../../../styles'
import {Typography, Chip} from '@material-ui/core'

export function SearchResult(props) {
    const classes = useStyles()
    return (
        <div className={classes.searchResult}>
            <img src={props.post.img ? props.post.img : "https://via.placeholder.com/210x125"} alt='post cover related to post theme' className={classes.searchResultImage} />
            <div className={classes.searchResultContent}>
                <Typography variant="h6">{props.post.title}</Typography>           
                <hr />
                <p className={classes.searchResultPostText}>{props.post.mainText}</p>
            </div>
            <div className={classes.searchResultInfo}>
                <Typography variant="body2" >By Author Name at Post Date and Time</Typography>                
                <Typography variant="body2">Category: ""</Typography>
                <Chip label="Tag1" />
                <Chip label="Tag2" />
            </div>
        </div>
    )
}