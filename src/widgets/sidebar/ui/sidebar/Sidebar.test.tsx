import {
    fireEvent, getByTestId, render, screen,
} from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const collapsedBtn = screen.getByTestId('btnColl');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapsedBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
