import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { api } from "../../services/api";

import { Container, IconGithub, IconSearch} from "./styles";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [searchRepository, setSearchRepository] = useState('rocketseat-education');

    useEffect(() => {
        const fetchPosts = async () => {
            await api.get(`users/${searchRepository}/repos`)
            .then(response => setRepositories(response.data))
        }

        fetchPosts();
    }, []);

    return(
        <Container>
            <IconGithub />
            <h1>Lista de repositórios</h1>
            <input 
                placeholder="Pesquisar repositório" 
                onChange={event => setSearchRepository(event.target.value)}
            />
            {/* <button type="submit">
                <IconSearch />
            </button> */}

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </Container>
    );
}