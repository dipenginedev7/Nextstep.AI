
export default function InputForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Your Top Skills</label>
        <input type="text" placeholder="e.g. Python, Communication..." className="w-full p-2 mt-1 border rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium">Preferred Work Environment</label>
        <select className="w-full p-2 mt-1 border rounded">
          <option>Remote</option>
          <option>In-Office</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Upload Aptitude Score (PDF)</label>
        <input type="file" className="w-full mt-2" />
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
        Submit & Get Recommendation
      </button>
    </form>
  );
}
