import styled from "styled-components";

export const Card = styled.div`
  list-style: none;
  text-align: center;
  max-width: 998px;

  ul {
    display: flex;
    flex-flow: wrap;
  }

  img {
    width: 170px;
    height: 250px;
  }
  .card {
    max-width: 300px;

    margin: auto;
    margin-bottom: 25px;
    background-color: #43496d;
    margin-top: 20px;
    color: white;
    padding: 10px 2px 10px 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
  }
  button {
    background: #17181f;
    color: white;
    border-radius: 8px;
    height: 40px;
    margin-right: 2px;
  }
`;
