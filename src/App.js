import { useEffect, useState } from "react"
import { getStoryIds } from './services/hnApi';

const App = () => {
  const [storyIds, setStoryIds] = useState([]); // Initializing empty array as the getStoryIds returns an array of ID's

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [])

  return (
    <div>
      <h1>App Still Works!!.......</h1>
      <h3>{JSON.stringify(storyIds)}</h3>
    </div>
  )
}

export default App
