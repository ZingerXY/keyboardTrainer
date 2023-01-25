import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
        primary: {
            main: '#00A876',
        }
    },
});
export default function BasicPagination() {

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} >

                <Pagination count={5} color="primary" />


            </Stack >
        </ThemeProvider>

    );
}