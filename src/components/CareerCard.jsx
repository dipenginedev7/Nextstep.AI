
export default function CareerCard({ title, match, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-2 border-l-4 border-indigo-600">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <span className="text-sm font-semibold text-indigo-700">Match: {match}%</span>
    </div>
  );
}
