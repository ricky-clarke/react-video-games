import styled from 'styled-components';

export const SingleGameGrid = styled.div`
  
    img {
        border-radius: 12px;
        margin-bottom:2em; 
        width: 100%;
    }

    h3 {
        font-size:1.5em;
        font-weight: 700;
        margin:0 0 0.25em 0;
    }

`;

export const SingleGameAbout = styled.div`
    font-size:1.1em;    
    line-height: 1.6em;
    margin:0 0 1em 0;
    white-space: break-spaces;

    @media(min-width:768px) {
        width:70%;
    }
  
    @media(min-width:992px) {
        max-height: 355px;
        overflow-y: auto;
        padding-right:2em;
        width:100%;
    }

    &::-webkit-scrollbar {
        width: 3px;
    }

      /* Track */
    &::-webkit-scrollbar-track {
        background: #fff;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #333;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: gold;
    }

`;

export const SingleGameMeta = styled.div`
    border-top:1px solid #333;
    color:#f0f0f0;
    font-size:1em;
    margin:2em 0;
    padding:2em 0;

    .game__card__platform {
        height: 25px;
        margin-right: 1em;
        width: 25px;
    }

    > div:not(:first-child) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom:1em;

        @media(min-width:768px) {
            flex-direction:row;
            margin-bottom:0.25em;
        }

      }

`;