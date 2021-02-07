import React from 'react';
import { act } from 'react-dom';
import App from '../App';
import { render, cleanup, waitFor } from '@testing-library/react';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import useInifiniteScroll from '../hooks/useInifiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useInifiniteScroll.js');

jest.mock('../services/hnApi', ()=>({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}))

test('renders the application', async () =>{

    useInifiniteScroll.mockImplementation(() =>({
        count: STORY_INCREMENT,
    }));

    getStory.mockImplementation(() => Promise.resolve(singularStory)); // Don't want to hit the API, but instead return this
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds)); /* Ignore the implementation of getStoryIds, get the fn() and
    get the result, that's a fake, for the testing purposes*/

        const { getByText, queryByTestId } = render(<App />);

        await waitFor(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('Perukku oru thalaippu')).toBeTruthy(),
            expect(queryByTestId('story-by').textContent).toEqual('By: Guhaprasaanth Nandagopal'),
        ])
})