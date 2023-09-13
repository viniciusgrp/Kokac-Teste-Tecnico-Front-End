import styled from "styled-components";

export const VeiculoStyle = styled.div`
    display: flex;
    flex-direction: column;

    .cadastro {
        min-width: 200px;
        text-align: center;
        width: 90%;
        margin: 30px auto;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        background-color: #ffffd7;
        max-width: 450px;

        form {
            display: flex;
            flex-direction: column;
            width: 90%;
            gap: 16px;
            max-width: 350px;

            .error {
                text-align: start;
                color: red;
                font-weight: 700;
            }

            label {
                display: flex;
                flex-direction: column;
                text-align: start;
                gap: 8px;

                select {
                    width: 100%;
                    padding: 10px;
                    border-radius: 8px;
                }

                input {
                    width: 100%;
                    padding: 10px;
                    border-radius: 8px;
                }
            }

            button {
                background-color: #0000ff;
                color: white;
                padding: 15px;
            }
        }
    }

    .listagem {
        width: 90%;
        max-width: 700px;
        margin: 30px auto;
        background-color: #ffffd7;
        border-radius: 8px;
        border: 1px solid gray;
        padding: 24px;

        ul {
            list-style: none;
            display: flex;
            overflow: auto;
            gap: 30px;

            li {
                background-color: white;
                min-width: 230px;
                display: flex;
                gap: 8px;
                flex-direction: column;
                border: 1px solid black;
                padding: 10px;
                border-radius: 8px;

                span {
                    text-align: center;
                    font-size: 32px;
                }

                .linha {
                    display: flex;
                    justify-content: space-between;

                    p {
                        max-width: 70%;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 90%;
        justify-content: space-between;
        margin: 30px auto;

        .cadastro {
            width: 40%;
            margin: 16px;
        }

        .listagem {
            max-width: 50%;
            height: fit-content;
        }
    }
`