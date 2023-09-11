import {classNames} from "shared/lib/classNames/classNames";
import s from './AppLink.module.scss';
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps}) => {
    return (
        <Link to={to} className={classNames(s.AppLink, {}, [className, s[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};