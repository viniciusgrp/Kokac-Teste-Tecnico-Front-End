import styled from "styled-components";

interface IProps {
    showMenu: boolean;
}

export const HeaderStyle = styled.header<IProps>`
    min-height: 100px;
    background-color: #fdfee2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    img {
        max-height: 80px;
        border-radius: 10px;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 32px;
    }

    nav {
        background-color: #fdfee2;
        margin-top: 16px;
        width: 100vw;
        display: ${props => props.showMenu ? 'flex' : 'none'};
        justify-content: space-between;

        button {
            font-size: 10px;
            width: 24%;
            background-color: gray;
            color: white;
            padding: 5px;
            border-radius: 8px;
        }

        button:hover {
                background-color: #696969;
                transition: 1s;
            }
    }

    @media screen and (min-width: 768px) {
        padding: 10px 80px;

        .mobileButton {
            display: none;
        }

        nav {
            display: flex;
            gap: 18px;
            width: fit-content;

            button {
                width: fit-content;
                padding: 12px;
                font-size: 18px;
            }
        }
    }
`