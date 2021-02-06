import styled from 'styled-components';

export const StoryWrapper = styled.section`
    padding-top: 0.625em;
    margin-bottom:  1.25em;
    border-top: 0.0625em solid #ccc;
    
    &:first-of-type{
        border-top: 0;
    }
    
    &:last-of-type{
        padding-bottom: 0;
        margin-bottom: 0;
    }
`

export const StoryTitle = styled.h1`
    margin-bottom: 0.3125em;
    font-size: 1.125em;
    margin: 0;
    text-decoration: none;
    
    a{
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`

export const StoryMeta = styled.div`
    font-style: italic;

    /* span, which is not the 1st child, but bfore that child add content and margin*/
    > span:not(:first-child):before{
        content: '=>';
        margin: 0 0.4375em;
    }

    .story__meta-bold{
        font-weight: bold;
    }
`

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props || 'orange'};

`
