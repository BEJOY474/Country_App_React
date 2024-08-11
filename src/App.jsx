import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './components/Cards';
import useEffects from './components/useEffects';
import './App.css';
import Search from './components/Search';

function App() {
  const { data, isLoading, errors } = useEffects("https://restcountries.com/v3.1/all");

  const [filterData, setfilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data) {
      const filtered = data.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setfilterData(filtered);
    }
  }, [data, searchTerm]);

  const hendelSearch = (val) => {
    setSearchTerm(val.toLowerCase());
  };

  const deleteCountry = (name) => {
    const getfilterData = filterData.filter((oneData) => oneData.name.common !== name);
    setfilterData(getfilterData);
    toast("Country has been deleted!", {
      className: 'custom-toast',
      closeButton: <span style={{ color: 'black', fontWeight: 'bold' }}>×</span>,
    });
  };

  const loadingMsg = (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="text-red-500 mt-2">Data loading...</p>
    </div>
  );

  const noDataFoundMsg = (
    <div className="text-red-500 text-center mt-4">
      No data found
    </div>
  );

  return (
    <>
      <div className="container h-auto p-5 px-4 mx-auto max-w-screen-2xl xl:px-24">
        <h1 className="text-center mb-4 text-2xl">Country App</h1>

        <Search onSearch={hendelSearch} />

        {isLoading && loadingMsg}
        {errors && <div className="text-red-500 text-center mt-4">Failed to fetch data</div>}
        {!isLoading && filterData.length === 0 && !errors && noDataFoundMsg}
        {filterData && filterData.length > 0 && <Cards countryData={filterData} deleteCountry={deleteCountry} />}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
