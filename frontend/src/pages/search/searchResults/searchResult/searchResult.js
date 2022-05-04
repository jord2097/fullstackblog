import React from 'react';
import useStyles from '../../../../styles'
import {Typography, Chip} from '@material-ui/core'

export function SearchResult() {
    const classes = useStyles()
    return (
        <div className={classes.searchResult}>
            <img src='https://via.placeholder.com/210x125' alt='post cover related to post theme' className={classes.searchResultImage} />
            <div className={classes.searchResultContent}>
                <Typography variant="h6">Post Title</Typography>           
                <hr />
                <p>Post Text</p>
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