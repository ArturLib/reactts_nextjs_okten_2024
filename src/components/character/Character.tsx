import React, {FC} from 'react';
import styles from './Character.module.css';

interface IProps {
    name: string;
    img: string;
    // children?: React.ReactNode; // можна тут передавати пропертю, якщо є дочірні елементи в компоненті
}

type ITypeProps = IProps & {children?: React.ReactNode}; // другий спосіб як впровадити дочірні елементи в компонент

const Character: FC<ITypeProps> = ({name, img, children}) => {

    return (
        <div className={styles.characterBox}>
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <p>{children}</p>
            </div>
        </div>
    );
};

export {Character}