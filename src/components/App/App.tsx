import React, {useEffect, useState} from 'react';
import Profile from "../Profile/Profile";
import LinkContainer from "../LinkContainer/LinkContainer";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";

function App() {
    const [userData, setUserData] = useState({"user": {}, "links": []})

    useEffect(() => {
        fetch('/api/data.php').then((r) => r.json()).then((userDataJson) => setUserData(userDataJson))
    }, []);

    return (
        <div className={styles.app}>
            <Profile user={userData.user}></Profile>
            <LinkContainer linkList={userData.links}></LinkContainer>
            <Footer user={userData.user}></Footer>
        </div>
    );
}

export default App;
