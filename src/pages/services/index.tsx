import React from 'react';
import Meta from '@metadata';
import Services from 'routes/services';

export const Index = () => {
    return (
        <>
            <Meta 
                title="Services | Nail Salon in Corringham"
                description="Explore our full range of nail and beauty services including acrylic nails, SNS, pedicure, gel manicures, eyebrow treatments and massage in Corringham."
            />
            <Services />
        </>
    )
}

export default Index
