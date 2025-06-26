
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">NextStep.AI</h1>
        <p className="text-lg mb-10">
          Discover your ideal career path using the power of AI. Analyze your skills, interests, and aptitude to find the best fit.
        </p>
        <Link to="/assess" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Start Assessment
        </Link>
      </div>
    </section>
  );
}
