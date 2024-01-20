export function Profile() {
  return (
    <div className="w-1/5 ml-auto mr-auto mt-20 border-2 border-gray-300 rounded-lg shadow-lg">
      <div>
        <img src="./cover.jpg" className="rounded-tl-md rounded-tr-md"></img>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="./profile.jpg"
          className="w-36 h-36 rounded-full z-10 -mt-20 border-gray-400 border-4"
        ></img>
        <div className="mt-5 mb-2">
          <span className="text-lg mr-4 font-semibold">Rita Correia</span>
          <span className="text-lg text-gray-500">32</span>
        </div>
        <h3 className="text-lg text-gray-500 mb-4">London</h3>
      </div>
      <div className="flex justify-around mt-4 border-gray-200 border-t-2 pt-2 pb-2">
        <div className="text-center">
          <h2 className="font-bold">80K</h2>
          <p className="text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold">803K</h2>
          <p className="text-gray-400">Likes</p>
        </div>
        <div className="text-center">
          <h2 className="font-bold">1.4K</h2>
          <p className="text-gray-400">Photos</p>
        </div>
      </div>
    </div>
  );
}
