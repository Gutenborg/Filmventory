import * as React from 'react'
import { Box, darken, Link as MUILink, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <Box
            component="header"
            sx={{
                backgroundColor: (theme) => theme.palette.info.main,
                color: (theme) => theme.palette.info.contrastText,
                padding: (theme) => theme.spacing(2),
            }}
        >
            <Typography variant="h1">
                <MUILink
                    component={Link}
                    sx={{
                        color: (theme) => theme.palette.info.contrastText,
                        textDecoration: 'none',
                        transition: 'color 300ms',
                        '&:hover': {
                            color: (theme) =>
                                darken(theme.palette.info.contrastText, 0.2),
                        },
                    }}
                    to="/"
                >
                    Filmventory
                </MUILink>
            </Typography>
        </Box>
    )
}

export default Header
