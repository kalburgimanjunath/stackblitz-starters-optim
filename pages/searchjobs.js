export default function SearchJobs() {
  return (
    <div>
      <div className="flex m-2 p-4 justify-content-space-between w-full">
        <input
          type="text"
          placeholder="Search keywords,job title,description"
          className="p-2 w-full border-2 border-color-gray-100 hover:border-color-gray-100 focus: border-color-gray-100 focus-visible:border-color-gray-100 rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          className="p-2 w-full border-2 border-color-gray-100 hover:border-color-gray-100 focus: border-color-gray-100 focus-visible: border-color-gray-100 rounded-lg ml-2 mr-2"
        />
        <button
          className="bg-green-600 rounded-lg p-2 w-full text-white"
          type="submit"
        >
          Search Jobs
        </button>
      </div>
    </div>
  );
}
