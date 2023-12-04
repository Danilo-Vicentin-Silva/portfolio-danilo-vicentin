import styled from "styled-components"

export const BlogHeaderStyled = styled.article`
  margin: 10px;

  h1 {
    text-align: center;
    margin: 0;
  }
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  h2,
  p {
    text-align: justify;
    font-size: 0.8em;
    margin: 0;
  }
  h2 {
    font-size: 1em;
  }
  a {
    color: gray;
    text-decoration: none;
  }
  #about-me-p {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    font-size: 1.4em;

    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 50px;

    h1 {
      align-self: center;
    }
  }
`
export const BlogNavStyled = styled.nav`
  margin: 10px;

  ul {
    color: gray;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  a {
    color: gray;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    font-size: 1em;
    margin: 50px;
  }
`
export const BlogPostSeparatorStyled = styled.hr`
  border-color: gray;
  border-style: dashed;
`
export const BlogPostStyled = styled.section`
  margin: 10px;

  h3 {
    margin-bottom: 0;
  }

  #p-author {
    color: gray;
    font-size: 0.8em;
    margin: 0 0 7px 0;
  }
  #p-content {
    text-align: justify;
    font-size: 0.8em;
  }
  #p-date {
    color: gray;
    display: inline;
    margin: 10px 0;
  }
  #p-tags {
    color: lightgray;
    display: inline;
    margin-left: 7px;
  }
  #p-post-footer {
    font-size: 0.8em;
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    font-size: 1.4em;
    margin: 50px;
  }
`
