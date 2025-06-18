import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Avatar
} from '@mui/material'
import {
  TrendingDown,
  TrendingUp,
  AttachMoney,
  Receipt
} from '@mui/icons-material'

const ExpenseView = ({ type, data }) => {
  const isExpense = type === 'expense'
  
  // Configuration based on type
  const config = {
    expense: {
      title: 'Expenses',
      color: '#f44336',
      bgColor: '#ffebee',
      icon: <TrendingDown />,
      chipColor: 'error'
    },
    income: {
      title: 'Income',
      color: '#4caf50',
      bgColor: '#e8f5e9',
      icon: <TrendingUp />,
      chipColor: 'success'
    }
  }

  const currentConfig = config[type] || config.expense

  // Calculate total
  const fillteredData = data.filter(item => item.type === type);
  const total = fillteredData?.reduce((sum, item) => sum + (item.amount || 0), 0) || 0

  return (
    <Box sx={{ p: 2 }}>
      <Card 
        sx={{ 
          maxWidth: '100%', 
          mx: 'auto',
          boxShadow: 3,
          borderTop: `4px solid ${currentConfig.color}`
        }}
      >
        <CardContent>
          {/* Header */}
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box display="flex" alignItems="center">
              <Avatar 
                sx={{ 
                  bgcolor: currentConfig.color, 
                  mr: 2,
                  width: 40,
                  height: 40
                }}
              >
                {currentConfig.icon}
              </Avatar>
              <Typography variant="h5" component="h2" fontWeight="bold">
                {currentConfig.title}
              </Typography>
            </Box>
            <Chip
              label={`Total: $${total.toFixed(2)}`}
              color={currentConfig.chipColor}
              variant="outlined"
              size="medium"
            />
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* List of items */}
          {fillteredData && fillteredData.length > 0 ? (
            <List sx={{ width: '100%' }}>
              {fillteredData.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      bgcolor: currentConfig.bgColor,
                      borderRadius: 1,
                      mb: 1,
                      '&:hover': {
                        bgcolor: currentConfig.color + '20',
                        transform: 'translateX(4px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <ListItemIcon>
                      <Receipt sx={{ color: currentConfig.color }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight="medium">
                          {item.desc || 'No description'}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {isExpense ? 'Expense' : 'Income'} • Item {index + 1}
                        </Typography>
                      }
                    />
                    <Box display="flex" alignItems="center">
                      <AttachMoney 
                        sx={{ 
                          color: currentConfig.color, 
                          fontSize: 20,
                          mr: 0.5 
                        }} 
                      />
                      <Typography 
                        variant="h6" 
                        fontWeight="bold"
                        sx={{ color: currentConfig.color }}
                      >
                        {item.amount?.toFixed(2) || '0.00'}
                      </Typography>
                    </Box>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              py={4}
              sx={{ color: 'text.secondary' }}
            >
              <Receipt sx={{ fontSize: 60, mb: 2, opacity: 0.3 }} />
              <Typography variant="h6" gutterBottom>
                No {type} records found
              </Typography>
              <Typography variant="body2">
                Add some {type} entries to see them here
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default ExpenseView