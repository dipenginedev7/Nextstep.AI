
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-700">NextStep.AI</Link>
      <div className="space-x-4">
        <Link to="/assess" className="text-gray-700 hover:text-indigo-600">Assessment</Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
      </div>
    </nav>
  );
}
