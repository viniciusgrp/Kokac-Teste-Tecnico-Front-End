import styled from "styled-components";

export const PalindromoStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  max-width: 500px;
  margin: 16px auto;

  .intro {
    display: flex;
    flex-direction: column;
    gap: 16px;

    form {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      gap: 8px;
      input {
        padding: 10px 15px;
        height: 100%;
        border-radius: 8px;
      }

      button {
        padding: 10px;
        height: 100%;
        border-radius: 8px;
        background-color: #fafdb7;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 16px;
    justify-content: center;
    padding: 10px 30px;
    background-color: #fafdb7;
    border: 1px solid gray;
    height: fit-content;
    padding: 30px;
    border-radius: 10px;
    li {
      background-color: #b0ffff;
      padding: 5px 10px;
      border-radius: 8px;
      height: fit-content;
      border: 1px solid black;
    }
  }

@media screen and (min-width: 768px) {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 90%;
}
`;
