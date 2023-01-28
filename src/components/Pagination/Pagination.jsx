import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#00A876",
        },
    },
});
export default function BasicPagination({
    onPageChange,
    limit = 1,
    totalItems,
    page,
    ...props
}) {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}>
                <Pagination
                    //  Кол-во страниц отображаемое в пагинации(totalItems с бэкенда делим на лимит)
                    count={Math.ceil(totalItems / limit)}
                    // скрываем пагинации если кол-во элементов меньше лимита
                    hidden={totalItems <= limit}
                    // событие, срабатывает на клик по пагинации
                    onChange={onPageChange}
                    //   hideNextButton={false}
                    //   hidePrevButton={false}
                    // номер текущей страницы
                    page={page}
                    //   типа hidden, только вместо пропадания у нас дизейбится пагинация
                    disabled={false}
                    color="primary"
                    {...props}
                />
            </Stack>
        </ThemeProvider>
    );
}
