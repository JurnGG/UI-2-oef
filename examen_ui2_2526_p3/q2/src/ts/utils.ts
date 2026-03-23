export function handleError(response:Response) {
    throw new Error( response.status === 404
        ? `Niet gevonden: ${response.url}`
        : `Fout: ${response.status}/${response.statusText}`);
}