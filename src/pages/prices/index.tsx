import React from 'react';
import Meta from '@metadata';
import Prices from 'routes/prices';
import { api } from '@database/api';
import { IPricesApi } from '@database/models/prices';

export interface Props {
    prices: IPricesApi[]
};

export const getStaticProps = async () => {
    try {
        const res = await api.get('/prices');
        return {
            props: {
                prices: res.data.data || []
            },
            revalidate: 60 * 60 * 24 // 1 day in seconds
        }
    } catch (error) {
        console.error("Failed to fetch prices:", error);
        return {
            props: {
                prices: [] // Fallback to an empty array in case of error
            },
            revalidate: 60 * 60 * 24 // Revalidate after 1 day even if error occurs
        };
    }
}

export const Index = (props: Props) => {
    return (
        <>
            <Meta 
                title="Price" 
                image="/price_intro.webp"
                description="prices of acrylic, gel, art, seasonal, ombre, footcare, pedicure, colors, repair, colour, fullset, infills, tint" 
            />
            <Prices {...props} />
        </>
    )
}

export default Index
