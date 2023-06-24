import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BookedCard from "./../../components/parent/BookedCard";
import Banner from '../../components/parent/Banner';
import { Box } from '@mui/joy';
const BookedPage = () => {
   return(
    <div>
        <Banner/>
        <BookedCard />
    </div>
   );
}
export default BookedPage;