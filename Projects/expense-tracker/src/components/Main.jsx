import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context';
import AddTransaction from './AddTransaction';
import { Box, Container, Grid } from '@mui/material';
import Summary from './Summary';
import ExpenseView from './ExpenseView';
import Chart from './Chart';

const Main = () => {


    const {
        totalExpense,
        allTransactions,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        open, handleClose
    } = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        allTransactions.forEach((item) => {
            item.type === "income"
                ? (income = income + parseFloat(item.amount))
                : (expense = expense + parseFloat(item.amount));
        });

        setTotalExpense(expense);
        setTotalIncome(income);
    }, [allTransactions]);




    return (
        <main>
            <Container maxWidth="lg">
                <Box sx={{ my: 4 }}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <Summary />
                        </Grid>
                        <Grid size={4}>
                        <Chart totalExpense={totalExpense} totalIncome={totalIncome}/>
                        </Grid>
                        <Grid size={6}>
                        <ExpenseView type={'expense'}  data={allTransactions}/>
                        </Grid>
                        <Grid size={6}>
                        <ExpenseView type={"income"} data={allTransactions}/>
                        </Grid>
                    </Grid>

                    {/* Summary Component will go here */}
                    {/* Chart Component will go here */}



                    {/* Expense and Income View Component will go here */}
                    {/* Add Transaction Modal */}
                    <AddTransaction open={open} handleClose={handleClose} />
                </Box>
            </Container>
        </main>
    )
}

export default Main