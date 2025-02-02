class easyHTTP {

    // Make an HTTP GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
        });
    }

    // Make an HTTP Post Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
        });
    }


    // Make an HTTP Put Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
        });
    }


     // Make an HTTP DELETE request
     delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
           .then(res => res.json())
           .then(data => resolve('Resource Deleted...'))
           .catch(err => reject(err));
        });
    }
}