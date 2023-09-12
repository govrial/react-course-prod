import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import s from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};