import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import s from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(s['lds-ripple'], {}, [className])}>
        <div />
        <div />
    </div>
);
