// Version with Async and Await

class easyHTTP {

    // Make an HTTP GET request
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP Post Request
    async post(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        
            const resData = await response.json();
            return resData;   
    }


    // Make an HTTP Put Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        const resData = await response.json();
        return resData;   
}


     // Make an HTTP DELETE request
     async delete(url) {
        const response = await fetch(url);

        const resData = await 'Resource Deleted...';
        return resData;
    }
}