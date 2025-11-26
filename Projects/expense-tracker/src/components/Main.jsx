import React, { useContext, useEffect } from 'react'
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
        open,
        handleClose,
    } = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        allTransactions.forEach((item) => {
            item.type === "income"
                ? (income += parseFloat(item.amount))
                : (expense += parseFloat(item.amount));
        });

        setTotalExpense(expense);
        setTotalIncome(income);
    }, [allTransactions]);

    return (
        <main>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: { xs: 2, sm: 4 },
                        px: { xs: 1, sm: 0 }
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 3, sm: 4 }}
                    >

                        {/* Row 1 — Summary (full mobile, half desktop) */}
                        <Grid item xs={12} md={6}>
                            <Summary />
                        </Grid>

                        {/* Row 1 — Chart (full mobile, half desktop) */}
                        {totalExpense > 0 &&
                            <Grid item xs={12} md={6}>
                                <Chart
                                    totalExpense={totalExpense}
                                    totalIncome={totalIncome}
                                />
                            </Grid>
                        }

                        {/* Row 2 — Expenses (full width mobile, half desktop) */}
                        <Grid item xs={12} md={6}>
                            <ExpenseView
                                type="expense"
                                data={allTransactions}
                            />
                        </Grid>

                        {/* Row 2 — Income (full width mobile, half desktop) */}
                        <Grid item xs={12} md={6}>
                            <ExpenseView
                                type="income"
                                data={allTransactions}
                            />
                        </Grid>

                    </Grid>

                    <AddTransaction open={open} handleClose={handleClose} />
                </Box>
            </Container>
        </main>
    );
};

export default Main;
