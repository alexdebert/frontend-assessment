import Image from 'next/image'
import {ListProps} from "../types/types";

export default function ListingCard({
    listing,
}: {
    listing: ListProps
}) {
    return (
        <article key={listing.Id} className="flex max-w-xl flex-col items-start justify-between">
            <Image
                src={listing.ThumbnailURL}
                width={500}
                height={500}
                alt={listing.Title}
            />
            <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    {listing.Title}
                </h3>
                <h2 className="text-sm font-medium text-gray-900">{listing.Location}</h2>
                <span className="text-gray-600">{`${listing.Bedrooms} bedrooms | ${listing.Bathrooms} bathrooms`}</span>
                <p className="text-3xl tracking-tight text-gray-900">${listing["Sale Price"]}</p>
            </div>
            <button
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                View Details
            </button>
        </article>
    )
}
