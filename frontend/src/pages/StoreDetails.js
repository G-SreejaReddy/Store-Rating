import React from 'react';
import { useParams } from 'react-router-dom';

const StoreDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Store Details - ID: {id}</h2>
      {/* You can fetch and display store name, address, ratings, etc. */}
    </div>
  );
};

export default StoreDetails;
