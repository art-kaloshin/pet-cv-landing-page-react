import React from 'react';
import LinkItem from "./LinkItem";
import styles from "./LinkList.module.scss";

function LinkContainer(props: {linkList: any}) {
    let linkList = props.linkList

    return (
        <div className={styles.container}>
            {linkList.map((link: any) => <LinkItem link={link}></LinkItem>)}
        </div>
    );
}

export default LinkContainer;