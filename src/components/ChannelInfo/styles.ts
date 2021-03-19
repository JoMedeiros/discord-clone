import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { StarPurple500 } from "styled-icons/material";

export const  Container = styled.div`
    grid-area: CI;
    display: flex;
    padding: 0 17px;
    background-color: var(--primary);
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
    //justify-content: space-between;
`;
export const  Title = styled.h1`
    margin-left: 9px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`;
export const  HashtagIcon  = styled(StarPurple500)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`;
export const Separator = styled.span`
    height: 24px;
    width: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin: 0 13px;
`;

export const Description = styled.div`

`;