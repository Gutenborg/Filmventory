import * as React from 'react'
import { Typography, Grid } from '@mui/material'

export interface IMoviePosterProps {
    poster: string
    title?: string
}

export const Movie: React.FC<IMoviePosterProps> = ({
    poster,
    title,
    ...props
}) => {
    return (
        <Grid
            component="figure"
            container
            sx={{
                margin: 0,
                width: '100%',
            }}
            {...props}
        >
            <Grid
                component="img"
                item
                src={
                    poster
                        ? `https://image.tmdb.org/t/p/w500${poster}`
                        : '/no-poster.jpg'
                }
                xs={12}
            />

            {title && (
                <Grid component="figcaption" item xs={12}>
                    <Typography component="h3" variant="h6" align="center">
                        {title}
                    </Typography>
                </Grid>
            )}
        </Grid>
    )
}

export default Movie
