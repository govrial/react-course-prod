import {classNames} from "shared/lib/classNames/classNames";
import s from './SideBar.module.scss';
import {FC, useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => setCollapsed(prevState => !prevState)

    return (
        <div className={classNames(s.SideBar, {[s.collapsed]: collapsed}, [className])}>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>
                Toggle
            </Button>
        </div>
    );
};