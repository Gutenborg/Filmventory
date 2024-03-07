import * as React from 'react'
import { Header, Footer, SearchInput, MovieDetails } from './components'
import { Grid, CssBaseline, Typography } from '@mui/material'
import { Route, Switch, useHistory } from 'react-router-dom'
import { SearchResults } from './components'

function App() {
    /* Utility Hooks */
    const history = useHistory()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        history.push(`/search/${e.target.value}`)
    }

    return (
        <Grid container direction="column" spacing="4">
            <CssBaseline />

            <Grid item xs="auto">
                <Header />
            </Grid>

            <Grid item container xs direction="column">
                <Grid
                    item
                    container
                    xs="auto"
                    justifyContent="center"
                    sx={{ marginTop: 4 }}
                >
                    <Grid component="section" item container xs={10}>
                        <SearchInput onSearch={changeHandler} />
                    </Grid>
                </Grid>

                <Grid component="section" item container sx={{ padding: 4 }} xs>
                    <Switch>
                        <Route path="/search/:search">
                            <Typography component="h2" variant="h4">
                                Search Results
                            </Typography>

                            <SearchResults />
                        </Route>

                        <Route path="/details/:movie">
                            <MovieDetails />
                        </Route>

                        <Route path="/">
                            <Typography component="h2" variant="h4">
                                Popular Movies
                            </Typography>

                            <SearchResults />
                        </Route>
                    </Switch>
                </Grid>
            </Grid>

            <Grid item xs="auto">
                <Footer />
            </Grid>
        </Grid>
    )
}

export default App
