import {classNames} from "shared/lib/classNames/classNames";
import s from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({className, children, onClick, theme = ThemeButton.CLEAR, ...otherProps}) => {
    return (
        <button onClick={onClick} className={classNames(s.Button, {}, [className, s[theme]])} {...otherProps}>
            {children}
        </button>
    );
};