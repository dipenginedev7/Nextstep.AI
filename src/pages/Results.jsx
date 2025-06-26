
import CareerCard from "../components/CareerCard";

const mockResults = [
  { title: "Data Scientist", match: 95, description: "Work with data to build models and insights." },
  { title: "Product Manager", match: 89, description: "Lead cross-functional teams to build products." },
];

export default function Results() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-3xl font-bold mb-4">Your Best Fit Careers</h2>
      {mockResults.map((career, idx) => (
        <CareerCard key={idx} {...career} />
      ))}
    </div>
  );
}
