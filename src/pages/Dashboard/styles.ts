import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  padding-bottom: 40px;

  @media (max-width: 450px) {
    img {
      max-width: 170px;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  font-size: 48px;
  line-height: 50px;
  color: #3a3a3a;

  @media (max-width: 450px) {
    margin-top: 40px;
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0px 24px;
    border: 2px solid white;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

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

  @media (max-width: 450px) {
    flex-direction: column;
    height: 100px;

    input {
      border-radius: 5px 5px 0 0;
      height: 70px !important;
      -webkit-appearance: none;
    }

    button {
      border-radius: 0px 0px 5px 5px;
      width: 100%;
      height: 50px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;

  @media (max-width: 450px) {
    font-size: 15px;
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
      margin: 0px 16px;
      flex: 1;

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

  @media (max-width: 450px) {
    margin-top: 45px;

    a {
      padding: 16px;

      img {
        width: 45px;
        height: 45px;
      }

      div {
        margin: 0px 16px;

        strong {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;
