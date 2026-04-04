import React from 'react';
import Meta from '@metadata';
import Services from 'routes/services';

export const Index = () => {
    return (
        <>
            <Meta 
                title="Nail & Beauty Services"
                description="Explore our full range of nail and beauty services including acrylic nails, SNS, gel manicures, eyebrow treatments and massage in Corringham."
            />
            <Services />
        </>
    )
}

export default Index
