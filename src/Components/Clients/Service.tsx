
export async function getClientsList() {
    try {
        // Replace the URL with the actual endpoint you want to fetch data from
        const response = await fetch('http://localhost:5109/api/clients/clients-list');

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        return await response.json();
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch Error:', error);
    }
}
/*
export function getClientsList(): Client[] {
    try {
        fetch('http://localhost:5109/api/clients/clients-list')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                return data as Client[];
            })

        // Check if the request was successful (status code 200-299)
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch Error:', error);
    }

    return [];
}*/
