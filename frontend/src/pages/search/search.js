import React from 'react'
import {Typography} from '@material-ui/core'
import useStyles from '../../styles'
import {SearchResults} from './searchResults/searchResults'

export function Search(props) {
    const classes = useStyles()
    return (
        <>
        <div className={classes.container}>
            <div className={classes.searchSummary}>
                <Typography variant="h6" >Search Results for ""</Typography>
                <Typography paragraph={true}>Showing 1-? out of ? Results</Typography>                
            </div>            
        </div>
        <SearchResults  />
        </>
    )
}