import React, { FC, useEffect, useState } from 'react';
import {IProductProps, Product} from '../product/Product';

const Products: FC<any> = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products)
            });
    }, []);

    return (
        <React.Fragment>
            {
                products.map((product: IProductProps) => (
                    <Product key={product.id} id={product.id} title={product.title} description={product.description}
                             price={product.price} discountPercentage={product.discountPercentage}
                             rating={product.rating} stock={product.stock} brand={product.brand}
                             category={product.category} thumbnail={product.thumbnail} images={product.images}/>
                ))
            }
        </React.Fragment>
    );
};

export {Products};