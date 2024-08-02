import "./styles/index.scss";
import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import ConnectModals from "./components/ConnectModals";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="post-container">
        {user && (
          <div className="posting">
            <div className="user-infos">
              <p>{user?.displayName[0]}</p>
              <button onClick={() => handleLogout()}>Déconnexion</button>
            </div>
          </div>
        )}
        <div>{user ? <CreatePost /> : <ConnectModals />}</div>
      </div>
    </div>
  );
}
export default App;
