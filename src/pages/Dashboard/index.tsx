import React, { useState, useEffect, FormEvent } from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Title, Form, Repositories, Error } from './styles';
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
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o nome do autor/nome_repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar esse repositório no GitHub');
    }
  }

  return (
    <Container>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
