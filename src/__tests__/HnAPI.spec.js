import axios from 'axios';
import {
    getStory,
    getStoryIds,
    newStoriesURL,
    storyURL
} from '../services/hnApi';
import {
    singularStory,
    storyIds,
    emptySingularStory
} from '../fixtures';

jest.mock('axios'); //This allows to perform/do mockImplementation

describe('Hackernews API', ()=>{
    beforeEach(()=>{
        jest.resetAllMocks();
    });

    describe('getStory functionality',()=>{
        it('Requests and gets a store from the Hackernews API', async ()=>{
            // console.log('axios', axios);
            axios.get.mockImplementation(()=> Promise.resolve({ 
                data: singularStory 
            }));

            const entity = await getStory(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${storyURL + 1}.json`);
            expect(entity).toEqual(singularStory);
        });
        
        it('Does not retrieve a story from Hackernews API, but handles gracefully', async ()=>{
            axios.get.mockImplementation(()=> Promise.resolve({ 
                data: emptySingularStory
            }));
    
            const entity = await getStory(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${storyURL + 1}.json`);
            expect(entity).toEqual(emptySingularStory);
            
        });
    });
    describe('getStoryIds functionality',()=>{
        it('Requests and gets a storyId from the Hackernews API', async ()=>{
            /* The reason this is mocked at the top is coz it is needed to be changed on each test, and it's cleared as well
             in each test => jest.resetAllMocks()) */
            axios.get.mockImplementation(()=> Promise.resolve({ 
                data: storyIds 
            }));

            const entity = await getStoryIds(1);
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(newStoriesURL);
            expect(entity).toEqual(storyIds);
        });
        
    });
});