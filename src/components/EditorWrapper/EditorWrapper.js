import React from 'react';

import styles from './EditorWrapper.module.css';

const EditorWrapper = ({children}) => {
    return (
        <footer className={styles.wrapper}>
            { children }
        </footer>
    );
};

export default EditorWrapper;
