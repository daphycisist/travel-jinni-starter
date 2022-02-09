/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    it('renders a correctly', () => {
        const { getByRole } = render(<Home />);
        const heading = getByRole('heading', {
            name: /Travel Jinni/i
        });
        expect(heading).toBeInTheDocument;
    });
});
