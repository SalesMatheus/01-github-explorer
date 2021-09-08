import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { api } from "../../services/api";
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import { Container, SearchContainer} from "./styles";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [searchRepository, setSearchRepository] = useState('rocketseat-education');

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         await api.get(`users/${searchRepository}/repos`)
    //         .then(response => setRepositories(response.data))
    //     }

    //     fetchPosts();
    // }, []);

    return(
        <Container>
            <FaGithub />
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Github username"
                />
                <button type="submit">
                    <FaArrowRight />
                </button>
            </SearchContainer>
            {repositories.map(repository => {
                return(
                    <tr>
                        <RepositoryItem key={repository.id} repository={repository} />
                    </tr>
                )
            })}
        </Container>
    );
}