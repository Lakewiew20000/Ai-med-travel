import React from 'react';

const QuotePreview = ({ quote }) => {
  if (!quote) return <p>No quote available yet.</p>;

  const {
    procedure,
    location,
    stayLength,
    includedItems,
    setPrice,
    priceRange,
    quotedPrice,
    quoteType,
    doctor,
    quoteStatus,
  } = quote;

  // Determine what price to display
  const showFinalPrice = quoteStatus === "Final Quote Ready" && quotedPrice;
  const showSetPrice = setPrice && !showFinalPrice;
  const showPriceRange = priceRange && !setPrice && !showFinalPrice;

  return (
    <div className="relative p-1 rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-border-glow">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">{procedure}</h2>

        <ul className="text-sm text-gray-800 mb-4 space-y-1 list-disc list-inside">
          <li><strong>Location:</strong> {location}</li>
          <li><strong>Length of Stay:</strong> {stayLength}</li>
          <li><strong>Included:</strong> {includedItems?.join(', ')}</li>
          {doctor && <li><strong>Doctor:</strong> {doctor}</li>}
          <li><strong>Status:</strong> {quoteType}</li>
        </ul>

        <div className="text-lg font-bold text-teal-600 mt-2">
          {showFinalPrice && <>Final Quote: ${quotedPrice}</>}
          {showSetPrice && <>Estimated Price: ${setPrice}</>}
          {showPriceRange && <>Estimated Price Range: {priceRange}</>}
        </div>

        {!showFinalPrice && (
          <p className="text-xs text-gray-500 mt-2 italic">
            *This is a preliminary estimate. Final price will follow a specialist review.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuotePreview;
