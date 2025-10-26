// Github component
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  //less optimized way of fetching data
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/octocat/followers")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center m-4">
      Github Followers: {data.length}
      <img src={data[0]?.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

//optimized way of feaching data using loader function
export const githubLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/octocat/followers"
  );
  return response.json();
}