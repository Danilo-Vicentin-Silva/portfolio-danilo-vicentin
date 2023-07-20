import styled from "styled-components";

export const SKillsStyled = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  ul {
    text-align: center;
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0;
  }
`;

export const SkillCard = styled.div`
  font-size: 0.8em;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 50%;

  height: 95px;
  width: 95px;
  padding: 10px;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2.8em;
  }
`;
