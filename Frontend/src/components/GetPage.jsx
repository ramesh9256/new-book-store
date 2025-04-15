import React, { useEffect, useState } from "react";
import axios from "axios";

const GetPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://new-book-store-fft2.onrender.com/get");
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Fetched Data</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
          {data.length > 0 ? (
            <ul className="divide-y divide-gray-300">
              {data.map((item, index) => (
                <li key={index} className="p-3 hover:bg-gray-100 rounded-lg">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.author}</p>
                  <p className="text-gray-600">{item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GetPage;
