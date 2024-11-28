import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">User Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg max-w-md w-full">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">User ID:</span> {userid}
        </p>
        <p className="mt-2 text-gray-600">
          Welcome to the profile page! Here you can find details about user <span className="text-orange-700 font-semibold">{userid}</span>.
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">User Actions</h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                href="#"
                className="text-orange-700 hover:text-orange-800 underline"
              >
                View Recent Activity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-orange-700 hover:text-orange-800 underline"
              >
                Update Profile Information
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-orange-700 hover:text-orange-800 underline"
              >
                Settings & Privacy
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => alert('Logging out...')}
          className="mt-6 bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default User;
