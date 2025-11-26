import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const Header = () => {
  const { handleOpen } = useContext(GlobalContext)

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 1.5, sm: 2 },           // tighter padding on mobile
          py: { xs: 1, sm: 1.5 }            // adaptive vertical spacing
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' }, // adaptive text
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
          }}
        >
          Expense Tracker
        </Typography>

        {/* Button */}
        <Button
          onClick={handleOpen}
          color="inherit"
          variant="outlined"
          sx={{
            borderColor: 'white',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            padding: { xs: '4px 8px', sm: '6px 12px' },
            minWidth: { xs: 'auto', sm: '120px' },
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          Add Transaction
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
