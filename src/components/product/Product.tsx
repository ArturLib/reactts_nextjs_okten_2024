import React, { FC } from 'react';
import style from './Product.module.css'

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[];
};

export type IProductTypeProps = IProductProps & {children?: React.ReactNode};

const Product: FC<IProductTypeProps> = (
    {title, description, price,
    discountPercentage, rating, stock, brand,
    category, images}) => {
    return (
        <React.Fragment>
            <div className={style.product}>
                <h3>
                    Title of product - {title}
                </h3>
                <p>
                    Description - {description}
                </p>
                <h4>
                    PRICE - {price}$
                </h4>
                <p>
                    Discount - {discountPercentage}%
                </p>
                <div>
                    Rating: {rating}
                </div>
                <p>
                    Stock - {stock}
                </p>
                <h4>
                    Brand - {brand}
                </h4>
                <p>
                    Category - {category}
                </p>
            </div>
            <div className={style.productImg}>
                {images.map((image, index) => <img key={index} src={image} alt={title}/>)}
            </div>
            <hr/>
        </React.Fragment>
    );
};

export {Product}