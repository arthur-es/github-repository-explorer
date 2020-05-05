import React, { useState, useEffect, FormEvent } from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log(newRepo);
    const response = await api.get<Repository>(`/repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <Container>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="#es">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
