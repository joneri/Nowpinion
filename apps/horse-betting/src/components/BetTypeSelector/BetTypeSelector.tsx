import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBetType, fetchProducts } from '../../store/slices/bettingSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store';

const BetTypeSelector: React.FC = () => {
  const [selectedBetType, setSelectedBetType] = useState(''); // Local state to manage selected bet type
  const dispatch = useDispatch<AppDispatch>(); 
  const navigate = useNavigate();
  const betTypes = ['V75', 'V86', 'GS75'];

  const handleSelect = async (betType: string) => {
    setSelectedBetType(betType); // Update local state with selected bet type
    dispatch(setBetType(betType));
    await dispatch(fetchProducts(betType)); 
    navigate('/race-details');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Select Bet Type</h2>
      <p>This is the BetTypeSelector component.</p>
      <select
        value={selectedBetType} // Bind select element to local state
        onChange={(e) => handleSelect(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="" disabled>
          Select a bet type
        </option>
        {betTypes.map((betType) => (
          <option key={betType} value={betType}>
            {betType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BetTypeSelector;