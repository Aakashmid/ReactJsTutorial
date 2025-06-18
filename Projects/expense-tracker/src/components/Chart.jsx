import { Box } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'

const Chart = ({ totalIncome=10, totalExpense=40 }) => {
    return (
        <Box sx={{ width: '100%', marginTop:7,marginLeft:4 }} >
            <PieChart
                colors={['#2e7d32', '#d32f2f']}
                series={[
                    {
                        data: [
                            { value: totalIncome, color: '#2e7d32', label: 'Income' },
                            { value: totalExpense, color: '#d32f2f', label: 'Expense' },
                        ],
                    },
                ]}
            />
        </Box>
    )
}

export default Chart