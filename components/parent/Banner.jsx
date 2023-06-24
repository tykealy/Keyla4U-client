import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Banner(){
    return(
        <Box mb={"2rem"}>
      <Card sx={{ minWidth: 300, flexGrow: 1, borderRadius:'0'}}>
        <CardCover >
          <img
            src="/Banner.png"
            loading="lazy"
            alt=""
            style={{borderRadius:"0"}}
          />
        </CardCover>
        <CardContent>
          <Typography
            level="h3"
            fontWeight="lg"
            textColor="teal"
            mt={{ xs: 12, sm: 40}}
          >
            Your booking
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
  
