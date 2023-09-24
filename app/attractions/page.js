import React from 'react'
import { getData } from './data'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default async function page() {
    const data = await getData()
    return (
        <div>
            <Typography variant='h6'>Attractions</Typography>
            <Grid container spacing={2}>
            {data.map(attraction => (
                <Grid item key={attraction.id} xs={12} md={4}>
                 <Card >
                 <CardMedia
                   component="img"
                   alt="green iguana"
                   height="140"
                   image={attraction.coverimage}
                   title={attraction.name}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {attraction.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary" noWrap>
                     {attraction.detail}
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Link href={`/attractions/${attraction.id}`}>
                   <Button size="small">Learn More</Button></Link>
                  
                 </CardActions>
               </Card>
               </Grid>
            ))}
            </Grid>
        </div>
    )
}
