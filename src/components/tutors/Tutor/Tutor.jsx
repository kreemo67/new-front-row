import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons'
import Tutors from '../Tutors';

import useStyles from './styles'


const Tutor = ({ tutor }) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={tutor.image} title={tutor.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant ="h5" gutterBottom>
                    {tutor.name}
                </Typography>
                <Typography variant ="h5" gutterBottom>
                    {tutor.price}
                </Typography>

            </div>
            <Typography variant="body2" color="textSecondary">
                {tutor.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Tutor