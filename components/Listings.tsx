'use client'
import {use, useState} from 'react'
import {ListProps} from "../types/types";
import ListingCard from "./ListingCard";
import FilterSection from "./FilterSection";

export default function Listings({
    listings,
}: {
    listings: Promise<ListProps[]>
}) {
    const allListings = use(listings);

    const [filteredListings, setFilteredListings] = useState(allListings);
    const handleFilter = (filters) => {
        const filtered = allListings.filter((listing) => {
            return (
                (!filters.bedrooms || listing.Bedrooms >= parseInt(filters.bedrooms)) &&
                (!filters.bathrooms || listing.Bathrooms >= parseInt(filters.bathrooms)) &&
                (!filters.parking || listing.Parking >= parseInt(filters.parking)) &&
                (!filters.minPrice || listing["Sale Price"] >= parseInt(filters.minPrice)) &&
                (!filters.maxPrice || listing["Sale Price"] <= parseInt(filters.maxPrice))
            );
        });
        setFilteredListings(filtered);
    };

    return (
        <>
            <div className="md:col-span-1">
                <FilterSection onFilter={handleFilter} />
            </div>
            {filteredListings.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-600 text-lg">No listings match your filters.</p>
                    <p className="text-gray-500">Try adjusting your search criteria.</p>
                </div>
            ) : (
                <div
                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredListings?.map((listing) => (
                        <ListingCard key={listing.Id} listing={listing} />
                    ))}
                </div>
            )}

        </>
    )
}
