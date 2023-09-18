import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPageHandler = () => {
        // eslint-disable-next-line
        location.reload()
    };

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка!')}</p>
            <Button className={s.btn} onClick={reloadPageHandler}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
