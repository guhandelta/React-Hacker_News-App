import { useEffect, useState } from "react"
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components';
import { StoriesContainerWrapper, GlobalStyle } from '../styles/StoriesContainerStyles';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]); // Initializing empty array as the getStoryIds returns an array of ID's

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News</h1>
        {storyIds.map((storyId,i) => <Story storyId={storyId} key={storyId} />)}
      </StoriesContainerWrapper>
    </>
  )
}

export default StoriesContainer