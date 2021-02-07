import React from 'react';
import { Story } from '../components';
import { render, cleanup, waitFor, getByTestId } from '@testing-library/react';
import { singularStory } from '../fixtures';
import { getStory } from '../services/hnApi';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks(); //Will reset on each test => claen the DOM and clean all the mocks
});


jest.mock('../services/hnApi', ()=>({
    getStory: jest.fn(),
}))

test('renders the story component', async () =>{

    getStory.mockImplementation(() => Promise.resolve(singularStory)); // Don't want to hit the API, but instead return this
    
        const { getByText, getByTestId } = render(<Story storyId="1" />);

        // getByTestId vs queryByTestId || getByTestId throws an error if it's false, queryByTestId returns null or nothing if it happens to be false
        await waitFor(() => [
            expect(getByTestId('story')).toBeTruthy(),
            expect(getByText('Perukku oru thalaippu')).toBeTruthy(),
            expect(getByTestId('story-by').textContent).toEqual('By: Guhaprasaanth Nandagopal'),
        ])
})