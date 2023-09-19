import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => setCollapsed((prevState) => !prevState);

    return (
        <div data-testid="sidebar" className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>
                Toggle
            </Button>
        </div>
    );
};
