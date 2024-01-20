import { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

function GithubCard() {
  const [username, setUsername] = useState("");
  const [github, setGithub] = useState(null);
  return (
    <div className="flex flex-col w-1/3 mx-auto mt-20 items-center">
      <input
        type="text"
        placeholder="Enter github username"
        className="border-2 border-black mb-5 w-full p-2 rounded-md"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <button
        className="bg-blue-600 p-4 w-48 rounded-full shadow-lg shadow-slate-600"
        onClick={async () => {
          const fetchedata = await axios.get(
            `https://api.github.com/users/${username}`
          );
          setGithub(fetchedata.data);
        }}
      >
        Generate Card
      </button>
      {github == null ? null : (
        <Card
          avatar={github.avatar_url}
          name={github.name}
          location={github.location}
          publicr={github.public_repos}
          followers={github.followers}
          following={github.following}
        ></Card>
      )}
    </div>
  );
}

export default GithubCard;
