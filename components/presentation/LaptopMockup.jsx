import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const Laptop = styled(Paper)(({ theme }) => ({
  width: 600,
  height: 450,
  borderRadius: 20,
  overflow: 'hidden',
  objectFit: 'fill',
  [theme.breakpoints.down("sm")]: {
    width: 300,
    height: 200
  }
}));

const Screen = styled('div')({
  width: '100%',
  height: '100%',
});


export default function LaptopMockup() {
  return (
    <Laptop>
      <Screen>
       <img src="/heroImage.jpg" alt="" width="100%"/>
      </Screen>
    </Laptop>
  );
}
