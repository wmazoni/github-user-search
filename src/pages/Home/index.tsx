import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from 'core/components/ButtonIcon';
import './styles.scss';

const Home = () => {

    return (
        <>
            <div className="title-container">
                <h1 className="title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>
            </div>
            <div className="subtitle-container">
                <p className="subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /> <br />
                    Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /> <br />
                    Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:  <span className="email"> antforfigma@gmail.com</span>
                </p>
            </div>
            <div className="btn-container">
                <Link to="/search">
                    <ButtonIcon text="Começar" />
                </Link>
            </div>

        </>
    )
}

export default Home;