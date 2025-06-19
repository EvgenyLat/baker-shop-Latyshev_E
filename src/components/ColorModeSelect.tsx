

import * as React from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



export default function ColorModeSelect(props: any) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };


    return (
        <IconButton {...props} onClick={toggleMode} color="inherit">
            {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
