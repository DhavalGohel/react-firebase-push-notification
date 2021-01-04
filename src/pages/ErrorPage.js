import { Grid } from '@material-ui/core';
import React from 'react';

export const ErrorPage = () => {
   return (
      <React.Fragment>
         <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
         >
            <p>Error: Page does not exist!</p>
         </Grid>
      </React.Fragment>
   );
}