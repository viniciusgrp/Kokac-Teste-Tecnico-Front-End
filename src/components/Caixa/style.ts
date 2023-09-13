import styled from "styled-components";

export const CaixaStyle = styled.div`
  display: flex;
  flex-direction: column;

  .caixa {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
    width: 90%;
    background-color: #ffffd7;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid gray;

    form {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      input {
        width: 100%;
        padding: 15px;
        border-radius: 8px;
      }

      button {
        background-color: #0000ff;
        color: white;
        width: 100%;
        padding: 10px;
        font-size: 26px;
        border-radius: 8px;
        border: none;
      }
    }
  }

  .troco {
    padding: 8px;
    background-color: #ffffd7;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    text-align: center;

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        position: relative;
        display: flex;
        img {
          max-height: 100px;
        }
        p {
          top: 10px;
          left: 10px;
          padding: 7px 13px;
          position: absolute;
          background-color: #0000ff;
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 620px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .caixa {
        margin: 16px;
        max-width: 40%;
    }
    form {
        width: 50%;
    }

    .troco {
        margin: 16px;
        max-width: 50%;
      ul {
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 5%;
        flex-direction: row;

        li {
          width: fit-content;
        }
      }
    }
  }
`;
