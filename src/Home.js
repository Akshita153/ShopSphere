import React from 'react'
import BannerCarousel from './components/BannerCarousel'
import ProductList from './ProductList'
import Footer from './components/Footer'
import NavStrip from './components/NavStrip'

function Home() {
    return (
        <div>
            <NavStrip />
            <BannerCarousel />
            <ProductList />
            <Footer />
        </div>
    )
}

export default Home


