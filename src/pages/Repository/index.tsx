import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';

import logo from '../../assets/images/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData() {
      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);
      setRepository(repositoryData.data);
      setIssues(issuesData.data);
    }
    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logo} alt="GitHub Explorer" />
        </Link>
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a
            href={issue.html_url}
            key={issue.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.title}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
