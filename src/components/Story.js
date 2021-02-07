import { useEffect, useState, memo } from 'react'
import { getStory } from '../services/hnApi';
import { 
    StoryWrapper,
    StoryTitle,
    StoryMeta,
    StoryMetaElement
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

const Story = memo(function Story({storyId}) {

    /*The stories/news are rendered in the first API call, and refetched, to be rendered, in the subsequest calls, made during the scroll, as 
    every new call would be 0 -> count, which results in multiple additional API calls, for some content already fetched and rendered, memo 
    can be used to prevent this from happening*/
    const [story, setstory] = useState({});
    useEffect(() =>{
        getStory(storyId).then(data => data && data.url && setstory(data));
    }, [])

    return story && story.url ?  //Checking for the story validity here, will prevent any errors down the line
    <StoryWrapper data-testid="story"> 

        <StoryTitle>
            <a href={story.url}>{story.title}</a>
        </StoryTitle>   

        <StoryMeta>
            <span data-testid="story-by">
                <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
            </span>
            <span data-testid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                {mapTime(story.time)}
            </span>
        </StoryMeta>
    </StoryWrapper> 
    : null
});

export default Story
