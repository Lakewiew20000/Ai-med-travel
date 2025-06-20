import React from "react";

const clinics = [
  {
    name: "Regenera Ortho Center",
    location: "Cancun, Mexico",
    languages: ["English", "Spanish"],
    certifications: ["AAOS", "Intl. Ortho Assoc."],
    rating: 4.8,
    cost: "$5,200 USD",
    verified: true,
    logo: "/images/clinic1.png",
    website: "#",
  },
  {
    name: "BioKnee Surgical Group",
    location: "Tijuana, Mexico",
    languages: ["English"],
    certifications: ["Intl. Joint Council"],
    rating: 4.6,
    cost: "$4,800 USD",
    verified: true,
    logo: "/images/clinic2.png",
    website: "#",
  },
  {
    name: "NuevoMéd Ortho",
    location: "Guadalajara, Mexico",
    languages: ["English", "Spanish"],
    certifications: ["Mexico Health Board", "JCI"],
    rating: 4.7,
    cost: "$5,900 USD",
    verified: true,
    logo: "/images/clinic3.png",
    website: "#",
  },
];

export default function TopThreeMatches() {
  return (
    <div className="p-6 md:p-12 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">
        🔍 We've Found Your Top 3 Matches
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Based on your request for a <strong>Knee Replacement in Mexico</strong>,
        with a budget of <strong>$4,000 – $6,000</strong> and preference for an
        English-speaking doctor, here are your recommended clinics:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clinics.map((clinic, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={clinic.logo}
              alt={clinic.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700 mb-1">
              {clinic.name}
            </h3>
            <p className="text-gray-600 mb-2">📍 {clinic.location}</p>
            <p className="text-gray-600 mb-2">
              🌐 Languages: {clinic.languages.join(", ")}
            </p>
            <p className="text-gray-600 mb-2">
              🎓 Certifications: {clinic.certifications.join(", ")}
            </p>
            <p className="text-yellow-500 font-semibold mb-2">
              ⭐ {clinic.rating.toFixed(1)} Rating
            </p>
            <p className="text-teal-600 text-lg font-bold mb-2">
              💰 Estimated Cost: {clinic.cost}
            </p>
            {clinic.verified && (
              <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mb-2">
                ✅ Verified Provider
              </span>
            )}
            <div className="mt-4 flex gap-2">
              <a
                href={clinic.website}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
              >
                Learn More
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
