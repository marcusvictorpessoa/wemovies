import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-inline: 20rem;
    height: 10%;
    padding: 1rem;
    background-color: #2F2E41;

    @media (max-width: 1200px) {
        margin-inline: 5rem;
    }

    @media (max-width: 480px) {
        margin-inline: 0;
        padding: 0.5rem;
    }
`;

export const LogoName = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 27px;
    color: #ffffff;
`;


export const TitleCart = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 19px;
    color: #FFFFFF;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const Items = styled.span`
    align-self: flex-end;
    margin-top: 0.3rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 16px;
    color: #999999;

    @media (max-width: 480px) {
        margin-top: 0;
    }
`;
