import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Appbar } from '../../components/Appbar';

export const HomePage = (props) => {

  useEffect(() => {
  }, [])


  return (
    <React.Fragment>
      <Appbar></Appbar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
       Welcome to firebase notification demo Home page
                  </Grid>
    </React.Fragment>

  );
}


