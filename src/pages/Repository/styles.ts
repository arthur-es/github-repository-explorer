import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }

  @media (max-width: 450px) {
    img {
      max-width: 170px;
    }
    a {
      font-size: 12px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media (max-width: 700px) {
    header {
      img {
        width: 80px;
        height: 80px;
      }

      div {
        strong {
          font-size: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    ul {
      li {
        & + li {
          margin-left: 40px;
        }

        strong {
          font-size: 28px;
        }

        span {
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    header {
      img {
        width: 64px;
        height: 64px;
      }

      div {
        strong {
          font-size: 19px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    ul {
      li {
        & + li {
          margin-left: 45px;
        }

        strong {
          font-size: 20px;
        }

        span {
          font-size: 13px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  padding-bottom: 40px;

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
    margin-top: 40px;
    padding-bottom: 30px;

    a {
      padding: 14px;

      div {
        margin: 0px 14px 0px 0px;

        strong {
          font-size: 14px;
          color: #3d3d4d;
        }

        p {
          font-size: 12px;
          color: #a8a8b3;
          margin-top: 4px;
        }
      }
    }
  }
`;
