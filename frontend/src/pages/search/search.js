import React from 'react'
import {Typography} from '@material-ui/core'
import useStyles from '../../styles'
import {SearchResults} from './searchResults/searchResults'
import { useLocation } from 'react-router-dom'

export function Search(props) {
    const classes = useStyles()
    let location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get('q')




    return (
        <>
        <div className={classes.container}>
            <div className={classes.searchSummary}>
                <Typography variant="h6" >Search Results for "{query}"</Typography>
                <Typography paragraph={true}>Showing 1-? out of ? Results</Typography>                
            </div>            
        </div>
        <SearchResults posts={props.posts} />
        </>
    )
}