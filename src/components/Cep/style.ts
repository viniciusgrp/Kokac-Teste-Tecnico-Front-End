import styled from "styled-components";

export const CepStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .busca {
    margin: 16px auto;
    padding: 16px;
    text-align: center;
    width: 90%;
    max-width: 300px;
    background-color: var(--color-primary);
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 10px;

    form {
        width: 90%;
        display: flex;
        gap: 8px;
        flex-direction: column;
        label {
            display: flex;
            flex-direction: column;
            text-align: start;

            input {
                padding: 8px;
                border-radius: 8px;
            }
        }

        button {
            background-color: var(--color-secundary); 
            color: white;
            height: 32px;
            border-radius: 8px;
            border-color: transparent;
        }
    }
  }

  .listagem {
    width: 100%;
    display: flex;
    justify-content: center;
    
    ul {
        list-style: none;
        background-color: var(--color-primary);
        border-radius: 10px;
        width: 90%;
        max-width: 900px;
        padding: 16px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 32px;

        li {
            background-color: white;
            padding: 16px;
            height: fit-content;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-width: 250px;
            max-width: 250px;
            border-radius: 10px;
            border: 1px solid gray;

            .linha {
                display: flex;
                justify-content: space-between;

                .info {
                    text-align: end;
                }
            }

        }
    }
  }

  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: center;

    .busca {
        height: fit-content;
        margin: 16px;
    }

    .listagem {
        margin: 16px;
        max-width: 70%;
    }
  }
`;
