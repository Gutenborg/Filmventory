import * as React from 'react';
import { Typography, Link, Grid } from '@mui/material';

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <Grid component="footer" container sx={{
      padding: (theme) => theme.spacing(2),
    }}>
      <Grid item xs={12}>
        <Typography variant="body1" align="right">
          <Link href="https://www.themoviedb.org/">
            Created with The Movie Database API
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
