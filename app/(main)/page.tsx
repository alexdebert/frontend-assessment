import { Suspense } from 'react';
import ErrorBoundary from "../../components/ErrorBoundary";
import Listings from "../../components/Listings";
import Loading from '../../components/Loading';
import { fetchListings } from '../../utils/fetchListings';

export default function ListingsPage() {
    const listings = fetchListings();
    return (
        <div>
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Listings</h1>
            </div>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Listings listings={listings}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
