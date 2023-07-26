import styled from 'styled-components';

export const GameCardMore = styled.div`
    color:#f0f0f0;
    font-size:0.825em;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s;

    & > div {
        overflow: hidden;
    }
`;



// export const GameCardImg = styled.div`
//     width: 100%;
//     overflow: hidden;
//     border-top-left-radius: 12px;
//     border-top-right-radius: 12px;

//     & > div {
//         height: 0;
//         overflow: hidden;
//         padding-bottom: 56.25%;
//         position: relative;
//         width: 100%;
//         transition: padding-bottom 0.2s;

//         img {
//             height: 100%;
//             inset: 0;
//             object-fit: cover;
//             position: absolute;
//             width: 100%;
//         }
//     }
// `;

export const GameCardInfo = styled.div`
    padding:16px 16px 24px;

    h4 {
        font-size: 25px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 0;
        overflow: hidden;
        padding-bottom: 2px;
        text-overflow: ellipsis;
        width: 75%;
    }
`;

export const GameCardMeta = styled.div`
    span {
        border: 1px solid;
        border-radius: 4px;
        box-sizing: border-box;
        display: inline-block;
        font-size: 0.825em;
        font-weight: 700;
        min-width:32px;
        padding: 2px 0;
        text-align: center;
        -webkit-box-sizing: border-box;
    }

    .meta_rating--green {
        color:#6dc849;
        border-color: #6dc849;
    }
    
    .meta_rating--orange {
        color:orange;
        border-color: orange;
    }

`;

export const GameCardGenre = styled.div`
    display:flex;
`;

export const GameCardContainer = styled.div`

    border-radius: 12px;
    background-color: #202020;
    position: relative;

    &:hover {
        ${GameCardMore} {
              grid-template-rows: 1fr;
        }
      } 

      .card_img {
        width: 100%;
        overflow: hidden;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    
        & > div {
            height: 0;
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            width: 100%;
            transition: padding-bottom 0.2s;
    
            img {
                height: 100%;
                inset: 0;
                object-fit: cover;
                position: absolute;
                width: 100%;
            }
        }
      }

      a {
        height: 100%;
        inset: 0;
        position: absolute;
        width: 100%;
    }
    
    ${props => props.display_type == "game__card--row" &&
    `   display: flex; gap:2em; 
        margin-bottom:2em;
        max-width:1200px;

        .card_img { 
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0; 
            max-width:330px;
        } 

        ${GameCardInfo} {
            width:100%;
        }

        ${GameCardMore} {
            font-size:1em;
            grid-template-rows: 1fr;
        }
        
    `};

`;