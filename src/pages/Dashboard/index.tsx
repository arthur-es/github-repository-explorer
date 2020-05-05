import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#es">
          <img
            src="https://avatars0.githubusercontent.com/u/63265796?s=400&u=203354e513fdc0a777a527b5a125d67396e07aac&v=4"
            alt="Github user"
          />

          <div>
            <strong>hyerdev/csgohyer</strong>
            <p>Crie sua .cfg agora e facilite sua vida no jogo.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </Container>
  );
};

export default Dashboard;
