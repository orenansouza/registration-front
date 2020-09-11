import React from "react";
import {
  Button,
  Container,
  ContainerButton,
  ContainerForm,
  ContainerSubmit,
  ContainerInput,
  Input,
  Title,
  TitleInput,
} from "./styles";

function RegistrationForm() {
  return (
    <Container>
      <ContainerForm>
        <Title>Cadastro de Usuário</Title>
        <ContainerSubmit>
          <ContainerInput>
            <TitleInput>Nome</TitleInput>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <TitleInput>Email</TitleInput>
            <Input type="email" />
          </ContainerInput>
          <ContainerButton>
            <div />
            <Button>Enviar</Button>
          </ContainerButton>
        </ContainerSubmit>
      </ContainerForm>
    </Container>
  );
}

export default RegistrationForm;
