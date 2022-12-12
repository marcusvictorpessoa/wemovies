import styled, { keyframes } from "styled-components";

const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Oval = styled.div`
    position: absolute;
    top: 50%;
    left: calc(50% - 60px);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: conic-gradient(from 90deg at 50% 50%, rgba(128, 128, 128, 0.0001) -46.17deg,
    #FFFFFF 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #FFFFFF 673.55deg);
    box-sizing: border-box;
    animation: ${Rotation} 1.5s linear infinite;

    @media (max-width: 480px) {
        left: 44%;
    }
`;

export const Empty = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #2F2E41;
`;