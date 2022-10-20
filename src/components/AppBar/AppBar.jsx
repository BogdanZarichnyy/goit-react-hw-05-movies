import { Suspense } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Container } from '../Container/Container';

import css from './AppBar.module.css';

export const AppBar = () => {
    return (
        <>
            <header className={css.header}>
                <Container>
                    <nav className={css.list}>
                        <NavLink className={css.item} to='/' end>Home</NavLink>
                        <NavLink className={css.item} to='/movies'>Movies</NavLink>
                    </nav>
                </Container>
            </header>
            
            <Container>
                <div className={css.wrraper}>
                    <Suspense fallback={<div>Loading page...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </Container>
           
        </>
    )
}