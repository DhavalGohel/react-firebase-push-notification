import React from 'react'
import { AppBar as MuiAppBar, Typography, Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export const Appbar = () => {
  const theme = useTheme()
  return (
    <MuiAppBar position='static' elevation={1}>
      <Box
        paddingX={3}
        minHeight={theme.spacing(8)}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='h6' color='inherit'>
          React App
        </Typography>

      </Box>
    </MuiAppBar>
  )
}
