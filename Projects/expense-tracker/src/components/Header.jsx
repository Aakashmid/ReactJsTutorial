import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const Header = () => {
    const {handleOpen} = useContext(GlobalContext)
  
    return (
        <AppBar position="static">
            <Toolbar sx={{
                maxWidth: 1200, // fixed max width
                mx: 'auto', // center the toolbar
                width: '100%'
            }} >
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    Expense Tracker
                </Typography>
                <Button onClick={handleOpen}
                    color="inherit"
                    variant="outlined"
                    sx={{
                        borderColor: 'white',
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