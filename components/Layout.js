import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title}-Next Amazona` : 'Next Amazona'} Next Amazona
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Link href="/" passhref>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
            <div className={classes.grow}></div>
            <div>
              <Link href="/cart" passHref>
                Cart
              </Link>
              <Link href="/login" passHref>
                Login
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved Next Amazona.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
