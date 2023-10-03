import { useState } from "react";
import axios from "axios";

const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const handleFormChange = (e) => {
    setUsername(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.get(`https://api.github.com/users/${username}`);

      setUserData(resp.data);
      setError(false);
    } catch (err) {
      setUserData(null);
      setError(err.response.data);
    }
  };

  return (
    <div>
      <h1>Find Github User</h1>
      <form method="GET" onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleFormChange} />
        <button>Search</button>
      </form>
      {userData && (
        <>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={"User"} />
          <a href={userData.html_url}>User Profile</a>
        </>
      )}
      {error && (
        <>
          <h2>{error.message}</h2>
        </>
      )}
    </div>
  );
};

export default GithubUser;
