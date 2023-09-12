import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(s.Navbar, {}, [className])}>
        <div className={s.links}>
            <AppLink to="/">Main</AppLink>
            <AppLink to="/about">About</AppLink>
        </div>
    </div>
);
