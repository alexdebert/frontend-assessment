import { Suspense } from 'react';
import ErrorBoundary from "../../components/ErrorBoundary";
import Listings from "../../components/Listings";
import Loading from '../../components/Loading';
import { fetchListings } from '../../utils/fetchListings';

export default function ListingsPage() {
    const listings = fetchListings();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Listings</h1>
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Listings listings={listings}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
