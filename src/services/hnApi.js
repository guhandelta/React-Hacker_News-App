import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => await axios.get(`${storyURL + storyId}.json`).then(({data}) => data);

export const getStoryIds = async () => await axios.get(newStoriesURL).then(({data}) => data);