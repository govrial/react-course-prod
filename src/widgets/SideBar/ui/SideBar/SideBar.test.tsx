import { renderWithTranslation } from 'shared/lib/tests/renderWthTranslation/renderWithTranslation';
import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('render', () => {
        renderWithTranslation(<SideBar />);
    });

    test('toggle', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
