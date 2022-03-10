import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'
import Products from '../Tutors';

const Tutor = ({ product }) => {
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={tutor.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant ="h5" gutterBottom>
                    {tutor.name}
                </Typography>
                <Typography variant ="h5" gutterBottom>
                    {tutor.price}
                </Typography>

            </div>
            <Typography variant="h2" color="textSecondary">
                {product.description}
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