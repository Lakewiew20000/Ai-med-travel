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
    quoteType,
    doctor,
    quotedPrice,
    recordsSubmitted,
    quoteStatus,
  } = quote;

  // Logic to determine which price to show
  const showFinalPrice = quoteStatus === "Final Quote Ready" && quotedPrice;
  const showSetPrice = setPrice && !showFinalPrice;
  const showPriceRange = priceRange && !setPrice && !showFinalPrice;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-2xl mx-auto mt-6">
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
          *This is a preliminary estimate based on similar cases. Final price will be provided after specialist review.
        </p>
      )}
    </div>
  );
};

export default QuotePreview;
