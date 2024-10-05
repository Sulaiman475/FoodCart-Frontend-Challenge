import {
    createTheme
} from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(14, 86%, 42%)',
            mainGreen: 'hsl(159, 69%, 38%)',            
        },
        secondary: {
            main: 'hsl(20, 50%, 98%)',
            rose100: 'hsl(13, 31%, 94%)',
            rose300: 'hsl(14, 25%, 72%)',
            rose400: 'hsl(7, 20%, 60%)',
            rose500: 'hsl(12, 20%, 44%)',
            rose900: 'hsl(14, 65%, 9%)',
        },
    },
    typography: {
        fontFamily: ["Red Hat Text", 'sans-serif'].join(','),
    }
})

export default theme;