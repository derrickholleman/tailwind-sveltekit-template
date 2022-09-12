import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Home from '../Home.svelte';

describe('Home', () => {
    it('should render', () => {
        const { getByText } = render(Home);

        expect(getByText('Welcome to SvelteKit')).toBeInTheDocument();
    });
});
