import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <>
        <div className="title">
            <h4>Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h4>
        </div>
        <p className="subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /> <br />
            Favor observar as instruções passadas no capítulo sobre a elaboração<br /> deste projeto.<br /> <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de<br /> Mateusz Wierzbicki:  <span className="email"> antforfigma@gmail.com</span>
        </p>
        <Link to="/search">
            <ButtonIcon text="Começar" />
        </Link>
    </>
);

export default Home;