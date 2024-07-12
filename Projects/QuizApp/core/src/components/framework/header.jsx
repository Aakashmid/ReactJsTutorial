

import { AppBar,Toolbar,Typography } from '@mui/material';


export default function header() {
  return (

    // for adding styling in  we using sx 
      <div sx={{flexGrow:1}}>
        <AppBar position='static' color='default' elevation={0} >
            <Toolbar>
              <Typography variant='h6' color={'inherit'} sx={{}}>
                Quizzes
              </Typography>
            </Toolbar>
        </AppBar>
      </div>
  
  )
}