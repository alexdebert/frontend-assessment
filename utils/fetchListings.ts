import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export async function fetchListings() {
    const response = await fetch(`${publicRuntimeConfig.baseUrl}/listings-mock.json`);
    if (!response.ok) {
        return 'Failed to fetch listings';
    }
    return await response.json();
}
