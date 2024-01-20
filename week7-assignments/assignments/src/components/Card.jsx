export function Card({
  avatar,
  name,
  location,
  publicr,
  followers,
  following,
}) {
  return (
    <div className="mt-10 border-2 rounded-lg p-2 w-full shadow-lg">
      <img src={avatar} className="h-20 rounded-xl"></img>
      <div className="mt-5">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
      <div className="mt-5 flex justify-around">
        <h2>Public repos: {publicr}</h2>
        <h3>Followers: {followers}</h3>
        <h2>Following: {following}</h2>
      </div>
    </div>
  );
}
