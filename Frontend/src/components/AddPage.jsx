import React, { useState } from 'react';

const AddPage = () => {
  const [FormData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
  });

  const HandelChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const HandelSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);

    try {
      const response = await fetch("https://new-book-store-fft2.onrender.com/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <form onSubmit={HandelSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded-md"
            id="title"
            value={FormData.title}
            onChange={HandelChange}
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-gray-700 font-medium">Author</label>
          <input
            type="text"
            name="author"
            className="w-full p-2 border rounded-md"
            id="author"
            value={FormData.author}
            onChange={HandelChange}
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
          <input
            type="text"
            name="price"
            className="w-full p-2 border rounded-md"
            id="price"
            value={FormData.price}
            onChange={HandelChange}
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add Book  
        </button>
      </form>
    </div>
  );
};

export default AddPage;
