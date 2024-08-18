import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { updateProfile } from '../../store/profileSlice';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.profile);

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProfile({ name, bio }));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700 dark:text-gray-300">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Save Changes
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Profile</h2>
        <p className="text-gray-700 dark:text-gray-300">Name: {profile.name}</p>
        <p className="text-gray-700 dark:text-gray-300">Bio: {profile.bio}</p>
      </div>
    </div>
  );
};

export default Profile;