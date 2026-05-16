import React from 'react';
import Meta from '@metadata';
import Gallery from 'routes/gallery';
import { api } from '@database/api';
import { IGalleryApi } from '@database/models/gallery';

export interface Props {
    gallery: IGalleryApi[]
};

export const getStaticProps = async () => {
    try {
        const res = await api.get('/gallery');
        return {
            props: {
                gallery: res.data.data || []
            },
            revalidate: 60 * 60 * 24 // 1 day in seconds
        }
    } catch (error) {
        console.error("Failed to fetch gallery:", error);
        return {
            props: {
                gallery: [] // Fallback to an empty array in case of error
            },
            revalidate: 60 * 60 * 24 // Revalidate after 1 day even if error occurs
        };
    }
}

export const Index = (props: Props) => {
    return (
        <>
            <Meta 
                title="Gallery" 
                image="/gallery_intro.webp"
                description="nail images, acrylic, gel, art, seasonal, ombre and many more designs" 
            />
            <Gallery {...props} />
        </>
    )
};

export default Index
