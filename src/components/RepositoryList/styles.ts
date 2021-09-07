import styled from 'styled-components';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

export const Container = styled.main`
    position: relative;
    left: 30%;

    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
    
    margin: 40px;

    h1 {
        margin-bottom:  16px;
    }

    ul {
        list-style: none;

        li {
            & + li {
                margin-top: 20px;
            }

            p {
                font-size: 14px;
                color: #444;
                margin-top: 8px;
            }

            a {
                display: inline-block;
                margin-top: 16px;
                text-decoration: none;
                color: #8257E6
            }
        }
    }

    input {
        width: 50%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius:  3rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        border: 1px solid #D7D7D7;
        background: #E7E9EE;

        font-weight: 400;
        font-size: 1rem;
        color: #444444;

        &::placeholder{
            color: #a5a4ab;
        }
    }

`;

export const IconGithub = styled(FaGithub)`
    transform: scale(10);
    margin: 10%; 
`;

export const IconSearch = styled(FaArrowRight)`
    color: black;
`;

