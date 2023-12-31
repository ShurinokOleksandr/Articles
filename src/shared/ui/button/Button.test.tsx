import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/button/Button';

describe('Button', () => {
    test('with only first param', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
