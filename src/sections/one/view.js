import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import Courses from './components/Courses';
import './view.css'
// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Page One </Typography>
      <div className="dashboard">
      <div className="divider"/>
      <Courses />
    </div>
    </Container>
  );
}
