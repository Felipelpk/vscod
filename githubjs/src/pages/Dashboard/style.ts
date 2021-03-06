import styled from 'styled-components';
import { shade } from 'polished'

interface FormProps{
  hasError: boolean;
}

export const Title = styled.h1 `
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 48px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 48px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height:70px;
    padding: 0 24px;
    border-radius: 5px 0px 0px 5px;
    border: 0;
    color: #A8A8B3;

    ::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width:210px;
    height:70px;
    border: 0;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    color: #FFF;
    font-weight: 900;
    text-transform: uppercase;

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Error = styled.span `
  display:block;
  color: #C53030;
  margin-top: 8px;
`;

export const Repository = styled.div `
  margin-top: 80px;
  max-width: 715px;
  height: 112px;

  a {
    background: #FFF;
    border-radius: 5px;
    padding: 24px;
    display: block;
    text-decoration:none;
    display:flex;
    align-items:center;
    transition: transform 0.2s;
    
    & + a {
      margin-top: 10px;
    }

     &:hover {
       transform: translateX(10px);
     }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex:1;

    strong{
      font-size: 20px;
      color: #3D3D4D;
    }
    p {
      font-size:18px;
      margin-top:4px;
      color: #A8A8B3;
    }
  }
  svg {
    margin-left: auto;
    color: #C9C9D4;
  }
`;
