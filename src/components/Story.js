import { useEffect, useState } from 'react'
import { getStory } from '../services/hnApi';
import { 
    StoryWrapper,
    StoryTitle,
    StoryMeta,
    StoryMetaElement
} from '../styles/StoryStyles';

const Story = ({storyId}) => {

    const [story, setstory] = useState({});
    useEffect(() =>{
        getStory(storyId).then(data => data && data.url && setstory(data));
    }, [])

    return story && story.url ?  //Checkign for the story validity here, will prevent any errors down the line
    <StoryWrapper data-testid="story"> 

        <StoryTitle>
            <a href={story.url}>{story.title}</a>
        </StoryTitle>   

        <StoryMeta>
            <span data-testid="story-by">
                <StoryMetaElement color="#000">Author:</StoryMetaElement> {story.by}
            </span>
            <span data-testid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                {story.time}
            </span>
        </StoryMeta>
    </StoryWrapper> 
    : null
}

export default Story
