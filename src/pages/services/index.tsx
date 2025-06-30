import React from 'react';
import Meta from '@metadata';
import Services from 'routes/services';

export const Index = () => {
    return (
        <>
            <Meta 
                title="Services" 
                image="/services_intro.webp"
                keywords="sns, acrylic, biab builder gel, massage, nails, gel, foot care, waxing, brows, lashses, semi permanent makeup"
                description="Information about services we offer, nail, sns, gel, acrylic and more" />
            <Services />
        </>
    )
}

export default Index
