import * as React from 'react'
import {
    Paper,
    Grid,
    Typography,
    PaperProps,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
} from '@mui/material'

import { MoviePoster } from '../'
import { IAPIMovie, IAPIMovieCredits } from '../../hooks'

export interface IMovieProps extends PaperProps {
    movie: IAPIMovie
    credits: IAPIMovieCredits
}

export const Movie: React.FC<IMovieProps> = ({ movie, credits, ...props }) => {
    let director = credits.crew.find(
        (crewMember) => crewMember.job === 'Director'
    )

    let processedCrew = credits.crew.filter(
        (crewMember) => crewMember.job !== 'Director'
    )

    return (
        <Grid alignItems="flex-start" container spacing={2} sx={{ padding: 4 }}>
            <Grid item container xs={4}>
                <MoviePoster poster={movie.poster_path} />
            </Grid>

            <Grid item container xs={8}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h3">
                        {movie.title}
                    </Typography>

                    <Typography variant="subtitle1">
                        {director?.name && `Directed By ${director.name}`}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1">{movie.overview}</Typography>
                </Grid>

                <Grid item container xs={12}>
                    <Grid item xs={6}>
                        <Typography variant="h3">Cast</Typography>

                        <List>
                            {credits.cast.map((castMember) => (
                                <React.Fragment key={castMember.id}>
                                    <ListItem key={castMember.id}>
                                        <ListItemAvatar>
                                            <Avatar
                                                sx={{
                                                    width: (theme) =>
                                                        theme.spacing(6),
                                                    height: (theme) =>
                                                        theme.spacing(10),
                                                }}
                                                alt={castMember.name}
                                                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                                                variant="rounded"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={castMember.name}
                                            secondary={castMember.character}
                                        />
                                    </ListItem>

                                    <Divider variant="middle" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h3">Crew</Typography>

                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            width: (theme) => theme.spacing(6),
                                            height: (theme) =>
                                                theme.spacing(10),
                                        }}
                                        alt={director?.name}
                                        src={`https://image.tmdb.org/t/p/w500${director?.profile_path}`}
                                        variant="rounded"
                                    />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={director?.name}
                                    secondary={director?.job}
                                />
                            </ListItem>

                            <Divider variant="middle" component="li" />

                            {processedCrew.map((crewMember, i) => (
                                <React.Fragment key={crewMember.id}>
                                    <ListItem key={crewMember.id}>
                                        <ListItemAvatar>
                                            <Avatar
                                                sx={{
                                                    width: (theme) =>
                                                        theme.spacing(6),
                                                    height: (theme) =>
                                                        theme.spacing(10),
                                                }}
                                                alt={crewMember.name}
                                                src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
                                                variant="rounded"
                                            />
                                        </ListItemAvatar>

                                        <ListItemText
                                            primary={crewMember.name}
                                            secondary={crewMember.job}
                                        />
                                    </ListItem>

                                    <Divider variant="middle" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Movie
