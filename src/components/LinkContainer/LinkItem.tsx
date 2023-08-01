import React from 'react';
import styles from "./LinkList.module.scss";

function LinkItem(props: {link: any}) {
    let link = props.link

    return (
        <div className={styles.item}>
            <a href={link.link} target='_blank' rel='noreferrer' className={styles.itemLink}>
                <img src={link.logo} alt={link.title}/>
                <span>{link.title}</span>
            </a>
        </div>
    );
}

export default LinkItem;