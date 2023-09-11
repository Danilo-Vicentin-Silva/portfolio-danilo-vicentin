import styled from "styled-components"

export const ErrorPageStyle = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  margin: 10px;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    margin: 5px;
  }
`
