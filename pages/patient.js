import QuotePreview from import QuotePreview from "../components/QuotePreview";

export default function PatientPage() {
  const mockQuote = {
    procedure: "Knee Replacement",
    location: "Cancún, Mexico",
    stayLength: "10 days",
    includedItems: ["Hotel-clinic transportation", "In-country facilitator", "Procedure labs"],
    setPrice: null,
    priceRange: "$5200 - $6200",
    quotedPrice: "$5900",
    quoteType: "Pending Surgeon Review",
    quoteStatus: "Pending",
    doctor: "Dr. Rodriguez",
    recordsSubmitted: true,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Quote Preview</h1>
      <QuotePreview quote={mockQuote} />
    </div>
  );
}
