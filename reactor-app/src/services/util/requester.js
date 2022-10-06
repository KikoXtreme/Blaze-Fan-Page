const requester = async (method, url, data) => {
    try {
        let headers = {};
        let currentRequest;

        const user = localStorage.getItem('user');
        const auth = JSON.parse(user || '{}');

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        if (method === 'GET') {
            currentRequest = fetch(url, { headers });
        } else {
            currentRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            });
        }
        const res = await currentRequest;
        const result = await res.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const get = requester.bind({}, 'GET');
export const post = requester.bind({}, 'POST');
export const put = requester.bind({}, 'PUT');
export const patch = requester.bind({}, 'PATCH');
export const del = requester.bind({}, 'DELETE');