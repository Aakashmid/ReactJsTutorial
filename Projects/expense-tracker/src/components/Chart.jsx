import { Box } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'

const Chart = ({ totalIncome=10, totalExpense=40 }) => {
    return (
        <Box sx={{ width: { xs: '100%', sm: 350 }, maxWidth: '100%', marginTop: { xs: 2, sm: 7 }, marginLeft: { xs: 0, sm: 4 }, mx: 'auto' }}>
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
                width={undefined}
                height={220}
            />
        </Box>
    )
}

export default Chart