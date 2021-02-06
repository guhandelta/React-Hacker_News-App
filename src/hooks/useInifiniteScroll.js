import { useEffect, useState } from "react"
import { MAX_STORIES, STORY_INCREMENT } from '../constants';
import { debounce } from '../utils/debounce';

const useInifiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() =>{
        /* An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. 
        When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0. 

        The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an int */

        if(window.innerHeight + document.documentElement.scrollTop 
            !== document.documentElement.offsetHeight || loading){
            return false;
        }

        setLoading(true);
    }, 500);

    useEffect(() =>{ 
        if(!loading) return;

        if(count + STORY_INCREMENT >= MAX_STORIES){
            setCount(MAX_STORIES); /* If the story is like 480 and the user scrolls down to read more, count + increment = 510 > 500, so
            stop the scrolling here */
        }else{
            setCount(count + STORY_INCREMENT); // Increment the story if the current count and after scroll coun < 500
        }

        setLoading(false);
    }, [loading]);

    // Cleanup function to make sure that they don't stay around and be creating event listeners
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return { count };
}

export default useInifiniteScroll
