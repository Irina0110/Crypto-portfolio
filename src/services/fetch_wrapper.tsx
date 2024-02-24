import {urlBase} from "@/constants/url.ts";



export const fetch_wrapper = {
    get
};



const fetchHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
    }
}

function get(url: string) {
    const params = {
        method: "GET",
        headers: fetchHeaders(),
    };
    return fetch(`${urlBase}${url}`, params).then(handleResponse).catch(error => console.log('Error:', error))
}

function handleResponse(response: Response): Promise<any> {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            response.json().then(data => resolve(data)).catch(() => resolve(response));
        } else {
            switch (response.status) {
                case 400:
                    console.log('Bad Request');
                    break;
                case 401:
                    break;
                case 403:
                    break;
                case 404:
                    break;
                case 422:
                    response.json().then(data => reject(data)).catch(() => reject('Unprocessable Entity'));
                    break;
                case 500:
                    break;
                case 503:
                    break;
                default:
                    console.log('An unknown error occurred.');
            }
        }
    });
}

