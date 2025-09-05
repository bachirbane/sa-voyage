import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 text-white ">
        <h1 className="text-5xl font-extrabold mb-6 ">
          Welcome to Sa-Voyage
        </h1>
        <p className="text-xl mb-10 font-semibold max-w-2xl mx-auto">
          Your trusted partner for Hajj, Umrah, and worldwide travel services.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            className="w-48 py-3 rounded-full bg-white text-emerald-700 font-bold text-lg shadow-md hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            onClick={() => navigate('/about')}
          >
            About Us
          </button>

          <button
            className="w-48 py-3 rounded-full bg-yellow-400 text-gray-900 font-bold text-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            onClick={() => navigate('/hadj')}
          >
            ✈️ Hajj & Umrah
          </button>
        </div>
      </section>

      {/* Live Streaming Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <h3 className="text-center font-extrabold text-4xl mb-12 text-emerald-800">
          Live Streaming from Mecca
        </h3>
        <div className="flex justify-center">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/XkVTJ9qWkcE"
            title="YouTube Live"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-2xl shadow-2xl border-4 border-white"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Home
