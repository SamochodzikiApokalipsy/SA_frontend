const getResponseFromEndpoint = async (endpoint, config) => {
    const response = await fetch(endpoint, config);
    return await response.json();
};

export default getResponseFromEndpoint;