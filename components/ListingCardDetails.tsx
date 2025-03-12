import Image from "next/image";
import {ListProps} from "../types/types";
import CardDetail from "./CardDetail";

export default function ListingCardDetails({listing}: {
    listing: ListProps
}) {
    const dateValue = new Date(listing.DateListed);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(dateValue);

    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{listing.Title}</h2>
            <p className="text-3xl tracking-tight text-gray-900 mb-4">${listing["Sale Price"]}</p>
            <p className="text-gray-500 mb-4">{listing.Location}</p>
            <div className="border-t border-gray-200 pt-2"/>
            <p className="text-gray-500 mb-4">Date listed: {formattedDate}</p>
            <Image
                src={listing.PictureURL}
                width={500}
                height={500}
                alt={listing.Title}
            />
            <p className="mt-4 text-gray-500">{listing.Description}</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                <CardDetail property="Bedrooms" value={listing.Bedrooms}/>
                <CardDetail property="Bathrooms" value={listing.Bathrooms}/>
                <CardDetail property="Parking" value={listing.Parking}/>
                <CardDetail property="Sqft" value={listing.Sqft}/>
                <CardDetail property="Year Built" value={listing.YearBuilt}/>
            </dl>
        </div>
    );
}
