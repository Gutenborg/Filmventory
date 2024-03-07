import * as React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Movie } from '..'
import {
    IAPIMovie,
    EAPIActions,
    useApi,
    EAPIMovieActions,
    IAPIMovieCredits,
} from '../../hooks'

export const Results: React.FC = (props) => {
    /* State Hooks */
    const [movie, setMovie] = React.useState<IAPIMovie | undefined>()
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [credits, setCredits] = React.useState<IAPIMovieCredits | undefined>()

    /* Utility Hooks */
    const movieApi = useApi(EAPIActions.movie)
    const { movie: movieId } = useParams<{ movie: string }>()

    React.useEffect(() => {
        const fetchMovie = async (movieId: string = '') => {
            const fetchResults = await movieApi(movieId)
            setMovie(fetchResults)

            const fetchCredits = await movieApi(
                movieId,
                EAPIMovieActions.credits
            )
            setCredits(fetchCredits)
            setIsLoading(false)
        }

        fetchMovie(movieId)
    }, [movieApi, movieId])

    if (isLoading) {
        return <CircularProgress />
    }

    return movie?.title && credits ? (
        <Movie movie={movie} credits={credits} />
    ) : (
        <Typography variant="body1">
            Sorry, but I couldn&apos;t find that movie. Try searching for
            another one!
        </Typography>
    )
}

export default Results
