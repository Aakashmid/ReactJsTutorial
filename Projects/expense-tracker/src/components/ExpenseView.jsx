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
  const filteredData = data.filter(item => item.type === type)
  const total = filteredData?.reduce((sum, item) => sum + (item.amount || 0), 0) || 0

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2 },
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          mx: 'auto',
          boxShadow: 3,
          borderTop: `4px solid ${currentConfig.color}`,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',       // Ensures full width on phone
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>

          {/* Header */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              textAlign: { xs: 'center', sm: 'left' },
              gap: { xs: 1.5, sm: 0 },
              width: '100%',                // Ensures full width scaling
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: currentConfig.color,
                  mr: 2,
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 }
                }}
              >
                {currentConfig.icon}
              </Avatar>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' } }}
              >
                {currentConfig.title}
              </Typography>
            </Box>

            <Chip
              label={`Total: Rs ${total.toFixed(2)}`}
              color={currentConfig.chipColor}
              variant="outlined"
              size="medium"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                width: { xs: '100%', sm: 'auto' },     // Full width chip on phone for clean look
                textAlign: 'center'
              }}
            />
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* List */}
          {filteredData.length > 0 ? (
            <List sx={{ width: '100%' }}>
              {filteredData.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    bgcolor: currentConfig.bgColor,
                    borderRadius: 1,
                    mb: 1,
                    px: { xs: 1.2, sm: 2 },
                    py: { xs: 1, sm: 1.5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1.5,
                    flexWrap: 'wrap',                     // KEY FIX: Makes phone layout clean
                    '&:hover': {
                      bgcolor: currentConfig.color + '20',
                      transition: 'all 0.2s ease-in-out',
                    },
                  }}
                >
                  {/* Icon */}
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Receipt sx={{ color: currentConfig.color, fontSize: { xs: 20, sm: 24 } }} />
                  </ListItemIcon>

                  {/* Text Section */}
                  <Box sx={{ flexGrow: 1, minWidth: '60%' }}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          fontWeight="medium"
                          sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            wordBreak: 'break-word',       // KEY FIX
                          }}
                        >
                          {item.description || 'No description'}
                        </Typography>
                      }
    
                    />
                  </Box>

                  {/* Amount */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      width: 'auto',
                    }}
                  >
                    {/* <AttachMoney
                      sx={{
                        color: currentConfig.color,
                        fontSize: { xs: 18, sm: 20 },
                        mr: 0.2,
                      }}
                    /> */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                        color: currentConfig.color,
                      }}
                    >
                      Rs {item.amount?.toFixed(2) || '0.00'}
                    </Typography>
                  </Box>
                </ListItem>
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
              <Receipt sx={{ fontSize: { xs: 45, sm: 60 }, mb: 2, opacity: 0.3 }} />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                No {type} records found
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
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
