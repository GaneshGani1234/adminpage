import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Contents() {
  
  const navigate=useNavigate();
  const navi1=()=>
  {
    navigate('/course');
  }
  const navi2=()=>
  {
    navigate('/student');
  }
  const navi3=()=>
  {
    navigate('/faculty');
  }
  const buttons = [
    <Button onClick={navi1} key="one">Course</Button>,
    <Button onClick={navi2} key="two">Student</Button>,
    <Button onClick={navi3} key="three">Faculty</Button>,
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        align='center'
      >
        {buttons}
      </ButtonGroup>
      
     
    </Box>
  );
}
