import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="dondaisbetter"></img>
            {/* product id,title,price,rating,image */}
            <div className="home__row">
                <Product
                id="1111"
                title="Planet Earth II"
                price={9.5}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
                <Product
                id="1112"
                title="Planet Earth"
                price={9.4}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
            </div>
            <div className="home__row">
                <Product
                id="1113"
                title="Breaking Bad"
                price={9.4}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
                <Product
                id="1114"
                title="Band of Brothers"
                price={9.4}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
                <Product
                id="1115"
                title="Chernobyl"
                price={9.3}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
            </div>
            <div className="home__row">
                <Product
                id="1116"
                title="The Wire"
                price={9.3}
                rating={5}
                image="https://images.unsplash.com/photo-1616368309964-3a686de13b4d"
                ></Product>
            </div>
        </div>
    )
}

export default Home
