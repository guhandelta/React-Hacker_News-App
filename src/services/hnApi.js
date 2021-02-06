import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newStories.json`;
export const storyURL = `${baseURL}item/`;

export const getStoryIds = async () => await axios.get(newStoriesURL).then(data => data);