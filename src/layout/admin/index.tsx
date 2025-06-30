import styles from './Admin.module.scss';
import React, { useContext } from 'react';
import { Context } from '@context/useAuthentication';
import Link from 'next/link';

const Admin = () => {

    const {user} = useContext(Context);

    const links = [
        {name: "Prices", link: "/admin/prices"},
        {name: "Gallery", link: "/admin/gallery"}
    ];

    return ( user?.role === "admin" ?
        <div className={styles.container}>
            {links.map(el => 
                <Link key={el.name} href={el.link}>{el.name}</Link>    
            )}
        </div>
        : 
        <></>
    )
}

export default Admin;