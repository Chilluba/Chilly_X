
import React from 'react';
import { useSnark } from '../context/SnarkContext';

interface SnarkyProps {
  normal: React.ReactNode;
  snark: React.ReactNode;
}

const Snarky: React.FC<SnarkyProps> = ({ normal, snark }) => {
  const { isSnarky } = useSnark();
  return <>{isSnarky ? snark : normal}</>;
};

export default Snarky;
