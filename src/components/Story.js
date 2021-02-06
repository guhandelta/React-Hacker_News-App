import { useEffect, useState } from 'react'
import { getStory } from '../services/hnApi';
import { StoryWrapper } from '../styles/StoryStyles';

const Story = ({storyId}) => {
    const [story, setstory] = useState({});
    useEffect(() =>{
        getStory(storyId).then(data => data && data.url && setstory(data));
    }, [])
    return story && story.url ? <StoryWrapper data-testid="story"> 
        <a href={story.url}>
            <p>{story.title}</p>
        </a>
        By: <p>{story.by}</p>
        Posted: <p>{story.time}</p>
    </StoryWrapper> : null
}

export default Story
