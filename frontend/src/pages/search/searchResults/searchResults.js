import React from 'react';
import {SearchResult} from './searchResult/searchResult'
import useStyles from '../../../styles'

export function SearchResults() {
    const classes = useStyles()
    return (
        <div className={classes.searchResults}>
            <SearchResult />
            <SearchResult />
        </div>
    )
}