import styled from "styled-components";

export const Header = styled.div`
  background-color: #17181f;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  height: 80px;
  color: white;
  justify-content: space-between;
  .areaLeft {
    display: flex;
    margin-right: 15px;
  }
  .areaRight {
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  #bidrink {
    margin-left: 10px;
    font-size: 30px;
  }
  p {
    margin-left: 2px;
    margin-right: 20px;
    color: white;
  }
  .link {
    align-items: center;
    color: white;
    display: flex;
    text-decoration: none;
  }

  p:hover {
    color: #494f77;
  }
  .media {
    display: none;
  }
  @media (max-width: 715px) {
    .areaLeft {
    }

    .media {
      display: block;
      margin-right: 15px;
    }
    h2 {
      font-size: 25px;
    }
    .link {
      display: flex;
      flex-direction: column;
      font-size: 10px;
    }
    #bidrink {
      display: none;
    }
    p {
      margin-right: 4px;
      color: white;
      /* display: none; */
    }
  }
`;
