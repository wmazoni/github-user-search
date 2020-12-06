import ButtonIcon from 'core/components/ButtonIcon';
import { makeRequest } from 'core/types/request';
import { User } from 'core/utils/User';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import "./styles.scss";

const Search = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [user, setUser] = useState<User>();
    const [userName, setUserName] = useState(user?.login);

    const date = dayjs(user?.created_at).format("DD/MM/YYYY");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // iniciar loader
        setIsLoading(true);
        makeRequest({ url: `/${userName}` })
            .then((response) => setUser(response.data))
            .finally(() => {
                // finalizar loader
                setIsLoading(false);
            });
    }

    const handleOnClick = () => {
        setIsClicked(true);
    }

    return (
        <>
            <div className = "search-container">
                <form onSubmit = {handleOnSubmit}>
                    <h1 className = "search-text">Encontre um perfil Github</h1>
                    <input
                        type = "text"
                        placeholder = "Usuário Github"
                        className = "search-input"
                        value = {userName}
                        onChange = {handleOnChange}
                    />
                    <div className = "btn-search-container">
                        <ButtonIcon text = "Encontrar" onClick={handleOnClick} />
                    </div>
                </form>
            </div>

            {isClicked && (
                <div className = "baseform-info">
                    {isLoading ? (
                        <div className = "container-loader">
                            <div className = "left-loader">
                                <ImageLoader />
                            </div>
                            <div className ="right-loader">
                                <InfoLoader />
                            </div>
                        </div>
                    ) : (
                            <>
                                <div className ="left-components">
                                    <img src={user?.avatar_url} className ="image-style" />
                                    <div className ="btn-profile-container">
                                        <a
                                            target ="_blank"
                                            rel = "noopener noreferrer"
                                            href = {`https://github.com/${userName}`}
                                        >
                                            <ButtonIcon text="Ver Perfil" />
                                        </a>
                                    </div>
                                </div>
                                <div className ="right-components">
                                    <div className ="top-components">
                                        <h1 className ="top-text">
                                            Repositórios públicos: {user?.public_repos}
                                        </h1>
                                        <h1 className ="top-text">Seguidores: {user?.followers}</h1>
                                        <h1 className ="top-text">Seguindo: {user?.following}</h1>
                                    </div>
                                    <div className ="bottom-components">
                                        <h1 className ="info">Informações</h1>
                                        <h1 className ="infos-text">
                                            <strong>Empresa:</strong> {user?.company}
                                        </h1>
                                        <h1 className ="infos-text">
                                            <strong>Website/Blog:</strong> {user?.blog}
                                        </h1>
                                        <h1 className ="infos-text">
                                            <strong>Localidade:</strong> {user?.location}
                                        </h1>
                                        <h1 className ="infos-text">
                                            <strong>Membro desde:</strong> {date}
                                        </h1>
                                    </div>
                                </div>
                            </>
                        )}
                </div>
            )}
        </>
    );
};
export default Search;