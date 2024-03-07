import * as React from 'react';
import { Paper, ButtonBase } from '@mui/material';
import { MoviePoster } from '..';
import { IAPISearchResult } from '../../hooks';

export interface IMovieResultProps {
  movie: IAPISearchResult;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, movieId: string) => void;
}

export const MovieResult: React.FC<IMovieResultProps> = ({
  movie,
  onClick,
  ...props
}) => {

  return (
    <Paper sx={{
      height: '100%',
    }} {...props}>
      <ButtonBase
        focusRipple
        sx={{
          transition: (theme) => theme.transitions.create(['background-color', 'opacity'], {
            duration: theme.transitions.duration.short,
          }),
          '&:hover': {
            backgroundColor: (theme) =>  `${theme.palette.grey[300]}`,
            opacity: '85%',
          },
        }}
        onClick={(e) => onClick(e, String(movie.id))}
      >
        <MoviePoster poster={movie.poster_path} />
      </ButtonBase>
    </Paper>
  );
};

export default MovieResult;
