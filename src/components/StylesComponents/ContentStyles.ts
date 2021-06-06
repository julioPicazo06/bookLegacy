import styled, { StyledComponent } from 'styled-components';


export interface ContentStyle {
    color:string
}

export const Content = styled.div<ContentStyle>`
    width: 100%;
    height: 100vh;

    ${props => props.color &&`
        background-color:${props.color};
    `}

    
`;


export const MenuSection = styled.div`
            display: flex!important;
            width: 100%;
            flex-direction: column!important;
            align-items: center!important;
            justify-content: center!important;
            color: white;
            font-family: 'Oswald', sans-serif;
            font-size: 1.5em;
                .item-hover{
                    display: flex;
                    flex-direction: column;
                    justify-items: center;
                    align-items: center;
                }
`



