import React, {useEffect} from 'react'
import {Typography} from '@material-ui/core'
import useStyles from '../../styles'
import {SearchResults} from './searchResults/searchResults'
import { useLocation } from 'react-router-dom'

export function Search(props) {
    const classes = useStyles()
    let location = useLocation()
    const params = new URLSearchParams(location.search)
    const query = params.get('q')
    const cat = params.get('c')
    const tag = params.get('t')

    const renderQuery = () => {
        if (query) {
            return `"${query}"`
        } else if (cat) {
            return `category "${cat}"`
        } else if (tag) {
            return `tag "${tag}"`
        }
    }
    return (
        <>
        <div className={classes.container}>
            <div className={classes.searchSummary}>
                <Typography variant="h6" >Search Results for {renderQuery()}</Typography>
                <Typography paragraph={true}>Showing {props.posts.length} Results</Typography>                
            </div>            
        </div>
        <SearchResults posts={props.posts} />
        </>
    )
}