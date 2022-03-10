import React from 'react';
import Grid from '@material-ui/core';


const tutors =[
    {id: 1, name: 'Kareem', description: 'Calculus, Biology, Chemistry', price:'$80'},
    {id: 2, name: 'Mahmoud', description:'Data Structures, Python, Calculus', price:'$80'},
];
const Products = () => {
    <main>
        <Grid container justify ='center' spacing ={4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs ={12} sm ={6} md = {4} lg = {3}>
                    <Tutor tutor={tutor} />
                </Grid>
            ))}
        </Grid>
    </main>

}

export default Products;
