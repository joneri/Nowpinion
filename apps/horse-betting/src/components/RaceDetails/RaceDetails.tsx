import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { RaceType } from '../../types/raceTypes'; 

const RaceDetails = () => {
  const races = useSelector((state: RootState) => state.betting.gameDetails?.races);

  // Fallback to an empty array if races is undefined or null
  if (!races || races.length === 0) {
    return <p>No race details available.</p>;
  }

  return (
    <div>
      <h2>Race Details</h2>
      <ul>
        {races.map((race: RaceType, index: number) => (
          <li key={index}>
            <p>Race Number: {race.number}</p>
            <p>Race Name: {race.name}</p>
            <p>Start Time: {race.startTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RaceDetails;