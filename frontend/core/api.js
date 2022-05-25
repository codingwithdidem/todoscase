import fetch from 'isomorphic-unfetch'

export default class Api {

    get apiPath() {
        let apiPath
        if (process.browser) {
            apiPath = "http://localhost:8001"
        } else {
            apiPath = "http://backend:8001"
        }
        return apiPath
    }

    makeSettings(method, data) {
        let settings = {}
        if (method) {
            settings.method = method
        } else {
            settings.method = "GET"
        }

        settings.headers = {
            "Content-Type": "application/json"
        }

        if (data) {
            settings.body = JSON.stringify(data)
        }
        return settings
    }

    async fetch(url, method, data) {
  
        return new Promise((resolve, reject) => {
            fetch(`${this.apiPath}${url}`, this.makeSettings(method, data))
                .then(r => {
                    if (r.ok) {
                        return r.text()
                    } else {
                        return null
                    }
                })
                .then(data => {
                    if (!data) {
                        reject("error")
                    } else { 
                        resolve(data)
                    }
                });
        })
    }

    async fetchJson(url, method, data) {
 
        return new Promise((resolve, reject) => {
            fetch(`${this.apiPath}${url}`, this.makeSettings(method, data))
                .then(r => {
                    if (r.ok) {
                        return r.json()
                    } else {
                        return null
                    }
                })
                .then(data => {
                    if (!data) {
                        reject("error")
                    } else { 
                        resolve(data)
                    }
                });
        })
    }
}