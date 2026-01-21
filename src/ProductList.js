import React from 'react'
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import imgurl from './assets/images/imgurl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductList() {
    return (
        <div>
            <Grid container spacing={2} className="productList">
                <Grid item size={3} className="productLineup">
                    <Card className='productCard firstcard'>
                        <CardContent>
                            <div className='productImage'>
                                <img src={imgurl.product1} alt="Shoes" />
                            </div>
                            <div className='productDescription'>
                                <Typography className='productBrand'>Nike Red Sneakers</Typography>
                                <Typography className='shortdescription'>Casual Shoes for both men and women</Typography>
                                <Typography className='productCost'>Rs 1,800</Typography>
                            </div>

                            <div className='addtoCartbtn'>
                                <Button variant="contained">Add to cart</Button>
                            </div>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={3} className="productLineup">
                    <Card className='productCard'>
                        <CardContent>
                            <div className='productImage'>
                                <img src={imgurl.product2} alt="Luxury Watch" />
                            </div>
                            <div className='productDescription'>
                                <Typography className='productBrand'>TSAR Bomba</Typography>
                                <Typography className='shortdescription'>Squared luxury watch for men</Typography>
                                <Typography className='productCost'>Rs 22,000</Typography>
                            </div>

                            <div className='addtoCartbtn'>
                                <Button variant="contained">Add to cart</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={3} className="productLineup">
                    <Card className='productCard'>
                        <CardContent>
                            <div className='productImage headphoneimg'>
                                <img src={imgurl.product3} alt="Headphones" />
                            </div>
                            <div className='productDescription'>
                                <Typography className='productBrand'>Noise Headphones</Typography>
                                <Typography className='shortdescription'>60hrs playback,6 light modes</Typography>
                                <Typography className='productCost'>Rs 3,800</Typography>
                            </div>

                            <div className='addtoCartbtn'>
                                <Button variant="contained">Add to cart</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item size={3} className="productLineup">
                    <Card className='productCard lastcard'>
                        <CardContent>
                            <div className='productImage'>
                                <img src={imgurl.product4} alt="Smartphone" />
                            </div>
                            <div className='productDescription'>
                                <Typography className='productBrand'>Samsung S24</Typography>
                                <Typography className='shortdescription'>128GB|256GB|512GB , 8 GB RAM, AI powered features</Typography>
                                <Typography className='productCost'>Rs 90,000</Typography>
                            </div>

                            <div className='addtoCartbtn'>
                                <Button variant="contained">Add to cart</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductList
