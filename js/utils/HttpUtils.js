export default class HttpUtils{
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
    static post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}