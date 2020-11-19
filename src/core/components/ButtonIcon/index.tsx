import React from 'react';
import './styles.scss';

type Props = {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const ButtonIcon = ({text, onClick}: Props) => {
    return (
        <button onClick={onClick} className="btn-button">
            <h5 className="btn-text">{text}</h5>
        </button>
    )
}

export default ButtonIcon;