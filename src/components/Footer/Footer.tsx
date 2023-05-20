import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"

function Footer(props: { user: any }) {
    let user = props.user

    return (
        <div className={styles.footer}>
            <FontAwesomeIcon icon={["fal", "envelope"]}></FontAwesomeIcon>
            <div className={styles.item}>
                <a href={'mailto:' + user.contacts?.email}>
                    <FontAwesomeIcon className={styles.icon} icon={faMailBulk}></FontAwesomeIcon>
                    {user.contacts?.email}
                </a>
            </div>
            <div className={styles.item}>
                <a href={'https://wa.me/' + user.contacts?.whatsapp}>
                    <FontAwesomeIcon className={styles.icon} icon={faWhatsapp}></FontAwesomeIcon>
                    {user.contacts?.whatsapp}
                </a>
            </div>
            <div className={styles.item}>
                <a href={'https://t.me/' + user.contacts?.telegram}>
                    <FontAwesomeIcon className={styles.icon} icon={faTelegram}></FontAwesomeIcon>
                    @{user.contacts?.telegram}
                </a>
            </div>
        </div>
    );
}

export default Footer;