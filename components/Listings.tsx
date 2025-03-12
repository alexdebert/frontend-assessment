'use client'
import { use } from 'react'
import {ListProps} from "../types/types";

export default function Listings({
    listings,
}: {
    listings: Promise<ListProps[]>
}) {
    const allListings = use(listings)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allListings.map((listing) => (
                <p key={listing.Id}>{listing.Title}</p>
            ))}
        </div>
    )
}
