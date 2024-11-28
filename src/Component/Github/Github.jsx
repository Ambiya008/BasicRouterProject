import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);  // Holds GitHub profile data
  const [loading, setLoading] = useState(true);  // Loading state for API call
  const [error, setError] = useState(null);  // Error state in case of failure

  useEffect(() => {
    // Fetch data from GitHub API for the user 'Ambiya008'
    fetch('https://api.github.com/users/Ambiya008')
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Set the data received from API
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        setError(error);  // Set the error if API call fails
        setLoading(false);  // Stop loading
      });
  }, []);  // Empty array makes this effect run only once when the component mounts

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">GitHub Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-md w-full text-center">
        <img
          src={data.avatar_url}  // Use the avatar URL from GitHub API
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{data.name || 'No name available'}</h2>
        <p className="text-lg text-gray-700">
          Followers: <span className="font-semibold text-orange-700">{data.followers}</span>
        </p>
        <p className="text-lg text-gray-700">
          Following: <span className="font-semibold text-orange-700">{data.following}</span>
        </p>
        <a
          href={data.html_url}  // GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-4 block"
        >
          View Profile on GitHub
        </a>
      </div>
    </div>
  );
}

export default Github;
