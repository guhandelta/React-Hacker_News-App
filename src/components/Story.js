import { useEffect, useState } from 'react'
import { getStory } from '../services/hnApi';

const Story = ({storyId}) => {
    const [story, setstory] = useState({});
    useEffect(() =>{
        getStory(storyId).then(data => data && data.url && setstory(data));
    }, [])
    return story && story.url ? <> 
        <a href={story.url}>
            <p>{story.title}</p>
        </a>
        By: <p>{story.by}</p>
        Posted: <p>{story.time}</p>
    </> : null
}

export default Story
