import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import { 
    Box, 
    Button, 
    FormControl, 
    FormControlLabel, 
    Modal, 
    Radio, 
    RadioGroup, 
    TextField,
    Typography
} from '@mui/material'

const AddTransaction = ({ open, handleClose }) => {
    const { formData, setFormData, handleFormSubmit } = useContext(GlobalContext)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        maxWidth: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: { xs: 2, sm: 4 },
        borderRadius: 2,
    }

    // Handle form field changes
    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Basic validation
        if (!formData.description || !formData.amount || !formData.type) {
            alert('Please fill in all fields')
            return
        }

        if (formData.amount <= 0) {
            alert('Amount must be greater than 0')
            return
        }

        // Submit the form
        handleFormSubmit(formData)
        
        // Close modal after successful submission
        handleClose()
        
        // Reset form data
        setFormData({
            type: 'income',
            description: '',
            amount: ''
        })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-transaction-modal"
                aria-describedby="add-transaction-form"
            >
                <Box sx={style}>
                    <Typography 
                        id="add-transaction-modal" 
                        variant="h6" 
                        component="h2" 
                        gutterBottom
                        textAlign="center"
                    >
                        Add New Transaction
                    </Typography>
                    
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <Typography variant="subtitle2" gutterBottom>
                                Transaction Type
                            </Typography>
                            <RadioGroup
                                row
                                value={formData.type || 'income'}
                                onChange={(e) => handleInputChange('type', e.target.value)}
                            >
                                <FormControlLabel 
                                    value="income" 
                                    control={<Radio />} 
                                    label="Income" 
                                />
                                <FormControlLabel 
                                    value="expense" 
                                    control={<Radio />} 
                                    label="Expense" 
                                />
                            </RadioGroup>
                        </FormControl>

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Description"
                            placeholder="Enter transaction description"
                            value={formData.description || ''}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            required
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Amount"
                            type="number"
                            placeholder="Enter amount"
                            value={formData.amount || ''}
                            onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || '')}

                            required
                        />

                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                fullWidth
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ 
                                    bgcolor: formData.type === 'expense' ? '#f44336' : '#4caf50',
                                    '&:hover': {
                                        bgcolor: formData.type === 'expense' ? '#d32f2f' : '#388e3c'
                                    }
                                }}
                            >
                                Add {formData.type === 'expense' ? 'Expense' : 'Income'}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default AddTransaction