import { useEffect, useState } from "react"
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]); // Initializing empty array as the getStoryIds returns an array of ID's

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [])

  return (
    <div>
      <h1>StoriesContainer Still Works!!.......</h1>
      {
          storyIds.map((storyId,i) => <Story storyId={storyId} key={storyId} />)
      }
    </div>
  )
}

export default StoriesContainer