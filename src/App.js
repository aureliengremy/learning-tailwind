import logo from './assets/images/logo.svg';
import image from './assets/images/beach-work.jpeg';
import './App.css';
import DestinationCard from './components/DestinationCard'
import popularDestination from './data/PopularDestination'

function App() {
  return (
    <div className="App">
      <div className="bg-gray-300">
        <div className="bg-gray-100 grid lg:grid-cols-2">
          <div className=" p-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0">
            <div className="xl:max-w-xl">
              <img src={logo} className="h-10" alt="logo" />
              <img src={image} className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" alt="Women working on the beach" />
              <h1 className=" mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">You can work from anywhere.
                <br className="hidden lg:inline" />
                <span className=" text-indigo-500"> Take advantage of it. </span></h1>
              <p className=" mt-2 text-gray-600 sm:mt-4 sm:text-xl">Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
                nice weather even when you're not on vacation.</p>
              <div className="mt-4 space-x-1 sm:mt-6">
                <a href="/" className="btn btn-primary hover:drop-shadow-custom-md ">
                  Book your escape
                </a>
                <a href="/" className="btn btn-secondary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:block">
            <img src={image} className="absolute inset-0 w-full h-full object-cover object-center" alt="Women working on the beach" />
          </div>
        </div>
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {popularDestination.map((destination) => (
              <DestinationCard  key={destination.city}
                                destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
