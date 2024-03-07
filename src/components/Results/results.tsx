import * as React from 'react'
import { MovieResult } from '../'
import { Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { IAPISearchResult } from '../../hooks'

export interface IResultsProps {
    movies?: IAPISearchResult[]
}

export const Results: React.FC<IResultsProps> = ({ movies, ...props }) => {
    /* Utility Hooks */
    const history = useHistory()

    const clickHandler = (
        e: React.MouseEvent<HTMLButtonElement>,
        movieId: string
    ) => {
        history.push(`/details/${movieId}`)
    }

    return (
        <Grid container {...props}>
            <Grid
                component="ol"
                container
                item
                xs={12}
                aria-describedby="movie-lookup-search-results-header"
                sx={{
                    listStyle: 'none',
                    padding: 0,
                }}
                spacing={1}
                justifyContent="center"
            >
                {movies &&
                    movies.map((movie) => (
                        <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
                            <MovieResult
                                key={movie.id}
                                movie={movie}
                                onClick={clickHandler}
                            />
                        </Grid>
                    ))}
            </Grid>
        </Grid>
    )
}

export default Results
