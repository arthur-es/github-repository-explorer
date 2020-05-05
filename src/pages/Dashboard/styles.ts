import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  padding-bottom: 40px;
`;

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  font-size: 48px;
  line-height: 50px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0px 24px;
    border: none;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border: none;
    font-weight: bold;
    color: white;
    border-radius: 0 5px 5px 0px;
    width: 210px;
    height: 70px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  max-width: 700px;

  a {
    display: block;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    text-decoration: none;
    padding: 24px;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`;
