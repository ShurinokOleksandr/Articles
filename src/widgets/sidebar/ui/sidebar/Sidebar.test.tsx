import {
    fireEvent, getByTestId, render, screen,
} from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('collapsed', () => {
        componentRender(<Sidebar />);
        const collapsedBtn = screen.getByTestId('btnColl');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapsedBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
