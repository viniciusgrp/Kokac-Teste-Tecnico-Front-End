import styled from "styled-components";

export const FooterStyle = styled.footer`
display: none;
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    padding: 16px;
    justify-content: space-around;

    .redesSociais {
      display: flex;
      gap: 16px;
      font-size: 24px;
      a {
        color: cyan;
      }
    }
  }
`;
