'use client';
import { useState } from 'react';

export default function FilterSection({ onFilter }) {
    const [filters, setFilters] = useState({
        bedrooms: '',
        bathrooms: '',
        parking: '',
        minPrice: 0,
        maxPrice: 1000000,
    });

    const handleSearch = () => {
        onFilter(filters); // Pass filters to the parent component
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                        Bedrooms
                    </label>
                    <select
                        id="bedrooms"
                        name="bedrooms"
                        value={filters.bedrooms}
                        onChange={handleChange}
                        className="mt-1 block rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">Any</option>
                        <option value="1">1 +</option>
                        <option value="2">2 +</option>
                        <option value="3">3 +</option>
                        <option value="4">4 +</option>
                        <option value="5">5 +</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                        Bathrooms
                    </label>
                    <select
                        id="bathrooms"
                        name="bathrooms"
                        value={filters.bathrooms}
                        onChange={handleChange}
                        className="mt-1 block rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">Any</option>
                        <option value="1">1 +</option>
                        <option value="2">2 +</option>
                        <option value="3">3 +</option>
                        <option value="4">4 +</option>
                        <option value="5">5 +</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="parking" className="block text-sm font-medium text-gray-700">
                        Parking Spaces
                    </label>
                    <select
                        id="parking"
                        name="parking"
                        value={filters.parking}
                        onChange={handleChange}
                        className="mt-1 block rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">Any</option>
                        <option value="1">1 +</option>
                        <option value="2">2 +</option>
                        <option value="3">3 +</option>
                        <option value="4">4 +</option>
                        <option value="5">5 +</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price Range
                    </label>
                    <div className="mt-1 space-y-2">
                        <input
                            type="range"
                            id="maxPrice"
                            name="maxPrice"
                            min="0"
                            max="1000000"
                            value={filters.maxPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>${filters.minPrice}</span>
                            <span>${filters.maxPrice}</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
