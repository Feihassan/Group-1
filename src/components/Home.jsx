
function Home(){

  return (
    <div className="bg-blue-50 p-8 rounded-2xl shadow-md max-w-3xl mx-auto text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
    Welcome to Dream Apartment Finder
  </h1>
      <p className="text-lg leading-relaxed text-justify">
        Discover your ideal apartment with ease.<br/>
        Whether you,re relocating, upgrading your lifestyle, or simply exploring new neighborhoods-<br/>
       <strong className="text-blue-600 font-semibold">Dream Apartment Finder</strong> helps you find a place that truly feels like home.<br /><br />
       Browse verified listings, filter by price, size, amenities or location<br/>
       and save your favorites for later comparison.<br/>
       You can even track updates in real time , so you'll never miss a new opportunity.<br/><br/>
       Say goodbye to stressful apartment hunting.<br/>
       Let us simplify your search and connect you to spaces where comfort meets convenience.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <input
          type="text"
          placeholder="City or ZIP code"
          className="w-full sm:w-2/3 p-2 border border-gray-300 rounded sm:rounded-l-md focus:outline-none"
        />
        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded sm:rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

    </div>

  )
}

export default Home;

