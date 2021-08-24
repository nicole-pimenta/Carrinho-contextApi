import styled from "styled-components";

export const Container = styled.div`
  background-color: #fdfffc;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 15px;

  li {
    margin: 5px;
  }

  button {
    background-color: #020100;
    border-radius: 8px;
    color: white;
    margin-left: 5px;
    height: 25px;
  }
`;

export const List = styled.div`
  background-color: grey;
  margin: 10px;
  border-radius: 8px;
  width: 500px;
`;
