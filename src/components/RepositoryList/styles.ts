import styled from 'styled-components';

export const Container = styled.main`

  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

    max-width: 1120px;
    margin: 0 auto;
    padding: 6rem 1rem;

    h1 {
        margin-bottom:  16px;
    }

    tr {
        list-style: none;

        td {
            
            p {
                font-size: 14px;
                color: #444;
                margin-top: 8px;
            }

            a {
                display: inline-block;
                text-decoration: none;
                color: #8257E6;
                margin-bottom: 16px;
            }
        }
    }

    svg {
      fill: white;
      width: 15rem;
      height: 15rem;
    }

`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  width: 100%;
  max-width: 600px;
  
  padding: 8px 8px 8px 22px;
  border-radius: 5rem;
  background: #2D2E33;


  input {
    flex: 1;
    background: none;
    border: none;
    font-size: 1.3rem;
    transition: color 0.1s 0.2s;

    color: white;

    font-weight: 700;
    outline: none;
    min-width: 15px;
  }
  button {
    width: 4rem;
    transition: height 0.1s 0.2s, border-radius 0.1s 0.2s;
    
    height: 4rem;
    border-radius: 50%;

    border: none;
    padding: 8px;
    background: #1B1C22;
    svg {
      fill: white;
      width: 100%;
      height: 100%;
    }
  }
`;