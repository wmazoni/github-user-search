import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import "./styles.scss";

const Search = () => {
    return (
        <div className="search-container">
            <form>
                <h1 className="search-text">Encontre um perfil Github</h1>
                <input
                    type="text"
                    placeholder="Usuário Github"
                    className="search-input"
                />
                <div className="btn-search-container">
                    <ButtonIcon  text="Encontrar" />
                </div>
            </form>
        </div>
    )
}

export default Search;