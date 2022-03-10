import React from 'react';
import { Grid } from '@material-ui/core';

import Tutor from './Tutor/Tutor';
import useStyles from './styles'


const tutors =[
    {id: 1, name: 'Kareem', description: 'Calculus, Biology, Chemistry', price:'$80', image: 'https://www.ephotozine.com/articles/dog-photography-tips-for-perfect-pet-portraits-33803/images/Vincent-Lagrange5.jpg'},
    {id: 2, name: 'Mahmoud', description:'Data Structures, Python, Calculus', price:'$80', image:'https://www.ephotozine.com/articles/dog-photography-tips-for-perfect-pet-portraits-33803/images/Vincent-Lagrange5.jpg'},
];
const Tutors = () => {
    return(
        <main>
        <Grid container justify ='center' spacing ={4}>
            {tutors.map((tutor) => (
                <Grid item key = {tutor.id} xs ={12} sm ={6} md = {4} lg = {3}>
                    <Tutor tutor={tutor} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Tutors;
