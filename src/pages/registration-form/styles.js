import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled(Container)`
  width: 500px;
  height: 500px;
  background-color: #ede9e3;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #000;
`;

export const Title = styled.div`
  width: 80%;
  font-size: 30px;
`;

export const ContainerSubmit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled(ContainerSubmit)`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

export const TitleInput = styled.div`
  font-size: 20px;
  margin-right: 20px;
  width: 50px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
`;
