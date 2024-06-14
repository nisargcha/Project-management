import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import { useSettingsContext } from 'src/components/settings';
import Container from '@mui/material/Container';
import Board from './components/Board'
import 'react-datepicker/dist/react-datepicker.css';
import './two.css'

// components


// ----------------------------------------------------------------------

export default function TwoView() {
  const settings = useSettingsContext();


  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <div className="App">
        <div className="container">
          <Board title="To Do" />
          <Board title="Doing" />
          <Board title="Done" />
        </div>
      </div>
    </Container>
  );
}
