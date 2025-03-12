export async function fetchListings() {
    const isServer = typeof window === 'undefined';
    const url = isServer
        ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/listings-mock.json`
        : '/listings-mock.json';

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}
