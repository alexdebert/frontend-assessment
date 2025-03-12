'use client'
import {useEffect, useState, Suspense} from "react";
import { useParams } from 'next/navigation'
import { fetchListings } from '../../../../utils/fetchListings';
import ContactForm from "../../../../components/ContactForm";
import ErrorBoundary from '../../../../components/ErrorBoundary';
import ListingCardDetails from "../../../../components/ListingCardDetails";
import Loading from '../../../../components/Loading';

export default function ListingDetails() {
    const {id} = useParams<{ id: string; }>();

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <ListingContent id={id} />
            </Suspense>
        </ErrorBoundary>
    );
}

function ListingContent({ id }) {
    const [listing, setListing] = useState(null);
    useEffect(() => {
        fetchListings()
            .then((data) => {
                const selectedListing = data.find((item) => item.Id === parseInt(id));
                setListing(selectedListing);
            })
            .catch(() => {
                throw new Error('Failed to fetch listing details');
            });
    }, [id]);

    if (!listing) return <Loading />;

    return (
        <div
            className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 mb-2">
            <ListingCardDetails listing={listing}/>
            <ContactForm/>
        </div>
    );
}
