import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Chip 
} from '@mui/material'


const Summary = () => {
  const { totalExpense, totalIncome } = useContext(GlobalContext)
  
  // Calculate balance
  const balance = totalIncome - totalExpense
  
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2 } }}>
      <Typography variant="h5" marginBottom={4} component="h2" gutterBottom >
        Financial Summary
      </Typography>
      <Grid container spacing={2}>
        {/* Total Income Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: '100%',
              background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
              color: 'white',
              mb: { xs: 2, sm: 0 }
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6" component="div">
                  Total Income
                </Typography>
              </Box>
              <Typography variant="h4" component="div" fontWeight="bold">
                Rs {totalIncome?.toFixed(2) || '0.00'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Expense Card */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              background: 'linear-gradient(135deg, #f44336 0%, #ef5350 100%)',
              color: 'white'
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
              
                <Typography variant="h6" component="div">
                  Total Expense
                </Typography>
              </Box>
              <Typography variant="h4" component="div" fontWeight="bold">
                Rs {totalExpense?.toFixed(2) || '0.00'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Balance Card */}
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              background: balance >= 0 
                ? 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)'
                : 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
              color: 'white'
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
             
                <Typography variant="h6" component="div">
                  Balance
                </Typography>
              </Box>
              <Typography variant="h4" component="div" fontWeight="bold">
                Rs {balance?.toFixed(2) || '0.00'}
              </Typography>
              <Box mt={1}>
                <Chip 
                  label={balance >= 0 ? 'Positive' : 'Negative'} 
                  size="small"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white'
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Summary