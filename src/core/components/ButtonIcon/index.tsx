import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({text}: Props) => (
        <button className="btn-container">
            <h5 className="config-text">{text}</h5>
        </button>
);

export default ButtonIcon;