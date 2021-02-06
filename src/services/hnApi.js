import axios from 'axios';

import { selectFields } from '../utils/selectFields';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => await axios.get(`${storyURL + storyId}.json`)
                                           .then(({data}) => data && selectFields(data)); // Checking for any null objects
                                           // selectFields() to extract only the required fields/props from return JSON object

export const getStoryIds = async () => await axios.get(newStoriesURL).then(({data}) => data);