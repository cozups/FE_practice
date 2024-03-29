import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

const BackdropPortal = (props) => {
  return <Backdrop onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <ErrorModalCard>
      <Header className="header">
        <h2>{props.title}</h2>
      </Header>
      <Content>
        <p>{props.message}</p>
      </Content>
      <Actions>
        <Button onClick={props.onConfirm}>Okay</Button>
      </Actions>
    </ErrorModalCard>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropPortal onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;

const ErrorModalCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
