// src/components/UserForm.tsx
import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, MenuItem, Typography, Grid } from '@mui/material';


// Define the shape of the form values
interface FormValues {

    name: string;
    middlename: string;
    surname: string;

    date: string;
    month: string;
    year: string;

    gender: string;

    mobile: string;

    state: string;


    address: string;



}

const UserForm: React.FC = () => {
    const [data, setData] = useState<FormValues[]>([]);

    const initialValues: FormValues = {
        name: '',
        middlename: '',
        surname: '',
        date: '',
        month: '',
        year: '1999',
        gender: '',
        mobile: '',
        state: '',
        address: '',

    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        middlename: Yup.string().required('Name is required'),
        surname: Yup.string().required('Surname is required'),
        date: Yup.string().required('date is required'),
        month: Yup.string().required('month is required'),
        year: Yup.string().matches(/^\d{4}$/, 'it must be four digit').required('year is required'),
        gender: Yup.string().required('gnder is required'),
        mobile: Yup.string().matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits').required('Mobile number is required'),
        state: Yup.string().required('Country is required'),
        address: Yup.string().required('Address is required'),

    });

    const onSubmit = (values: FormValues) => {

        setData([...data, values]);
        localStorage.setItem("useData", JSON.stringify(data))
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('useData'))
        console.log(storedData)
        if (storedData) {
            setData(storedData)
        }
    }, [])

    return (
        <Box
            sx={{
                maxWidth: 800,
                margin: 'auto',
                padding: 3,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 2,

            }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                User details
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box>
                            <Typography color='grey'>User name</Typography>
                            <Box marginBottom={2} sx={{ display: 'flex' }}>
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    id="name"
                                    name="name"
                                    size='small'
                                    sx={{ mx: 1 }}
                                    label="Firstname"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    id="middlename"
                                    name="middlename"
                                    size='small'
                                    sx={{ mx: 1 }}
                                    label="middlename"
                                    value={values.middlename}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.middlename && Boolean(errors.middlename)}
                                    helperText={touched.middlename && errors.middlename}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    id="surname"
                                    name="surname"
                                    size='small'
                                    sx={{ mx: 1 }}
                                    label="Surname"
                                    value={values.surname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.surname && Boolean(errors.surname)}
                                    helperText={touched.surname && errors.surname}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '50%' }}><Typography color='grey' >Select D.O.B</Typography>
                                <Box marginBottom={1} sx={{ display: 'flex' }}>
                                    <TextField
                                        fullWidth
                                        id="date"
                                        name="date"
                                        label="Date"
                                        type='number'
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.date && Boolean(errors.date)}
                                        helperText={touched.date && errors.date}
                                    >

                                    </TextField>
                                    <TextField
                                        fullWidth
                                        id="month"
                                        name="month"
                                        label="Month"
                                        select
                                        value={values.month}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.month && Boolean(errors.month)}
                                        helperText={touched.month && errors.month}
                                    >

                                        <MenuItem value="January">January </MenuItem>
                                        <MenuItem value="Feburary">Feburary </MenuItem>
                                        <MenuItem value="March">March</MenuItem>
                                        <MenuItem value="April">April</MenuItem>
                                        <MenuItem value="May">May</MenuItem>
                                        <MenuItem value="June">June</MenuItem>
                                        <MenuItem value="July">July</MenuItem>
                                        <MenuItem value="August">August</MenuItem>
                                        <MenuItem value="September">September</MenuItem>
                                        <MenuItem value="October">October</MenuItem>
                                        <MenuItem value="November">November</MenuItem>
                                        <MenuItem value="December">December</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        id="year"
                                        name="year"
                                        label="year"
                                        type='number'
                                        value={values.year}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.year && Boolean(errors.year)}
                                        helperText={touched.year && errors.year}
                                    >

                                    </TextField>
                                </Box>
                            </Box>
                            <Box sx={{ width: '20%' }}>
                                <Typography color='grey'>Select gender</Typography>
                                <Box marginBottom={2} sx={{ display: 'flex' }}>
                                    <TextField
                                        fullWidth
                                        id="gender"
                                        name="gender"
                                        label="Gender"
                                        select
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.gender && Boolean(errors.gender)}
                                        helperText={touched.gender && errors.gender}
                                    >

                                        <MenuItem value="January">Male </MenuItem>
                                        <MenuItem value="Feburary">Female </MenuItem>

                                    </TextField>


                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>

                            <TextField
                                variant='filled'
                                size='small'
                                sx={{ mx: 1 }}
                                id="mobile"
                                name="mobile"
                                label="Mobile Number"
                                type="tel" // Ensure mobile number is treated as a phone input
                                value={values.mobile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.mobile && Boolean(errors.mobile)}
                                helperText={touched.mobile && errors.mobile}
                            />



                            <TextField

                                variant='filled'
                                sx={{ mx: 1, width: '15%' }}
                                size='small'
                                id="state"
                                name="state"
                                label="Select state"
                                select
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.state && Boolean(errors.state)}
                                helperText={touched.state && errors.state}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="USA">MadhyaPradesh</MenuItem>
                                <MenuItem value="UK">Uttarpradesh</MenuItem>
                                <MenuItem value="India">Rajasthan</MenuItem>
                                <MenuItem value="Canada">Maharashtra</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                id="address"
                                name="address"
                                label="Address"
                                multiline
                                rows={2}
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.address && Boolean(errors.address)}
                                helperText={touched.address && errors.address}
                            />

                        </Box>

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            <Grid container >
                {data.map((elm, id) => {
                    return <Grid item xs={6} key={id} sx={{ backgroundColor: 'whitesmoke',border:'1px solid grey',my:5,px:10,py:4,borderRadius:10 }}>
                        <Typography>Fullname :-{elm.name} {elm.middlename} {elm.surname}</Typography>
                        <Typography>Date of Birth:-{elm.date}:{elm.month}:{elm.year}</Typography>
                        <Typography>Gender{elm.gender}</Typography>
                        <Typography>Add:-{elm.address},State:-{elm.state}</Typography>
                        <Typography>Mobile no:-{elm.mobile}</Typography>
                    </Grid>
                })}
            </Grid>
        </Box>
    );
};

export default UserForm;

