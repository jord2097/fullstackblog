import React from 'react';
import {SearchResult} from './searchResult/searchResult'
import useStyles from '../../../styles'
import {Grid} from '@material-ui/core'

export function SearchResults(props) {
    const classes = useStyles()
    return (
        props.posts.map((post) => (
        <div className={classes.searchResults}>
            <Grid key={post._id} item xs={12} sm={7}>
                <SearchResult post={post} />
            </Grid>
        </div>
        ))
        
    )
}