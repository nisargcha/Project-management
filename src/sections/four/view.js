// @mui
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// components
import { useSettingsContext } from 'src/components/settings';
import Lists from './components/Lists';
// ----------------------------------------------------------------------

export default function FourView() {
  const settings = useSettingsContext();

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <Typography variant="h4">Table</Typography>
        <Lists/>
      </Container>
    </>
    
    
    
  );
}
