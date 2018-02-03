const request = require('snekfetch')
var baseurl = "http://api.discorddungeons.me/v3"

class DiscordRPG {
    constructor(token) {
        this._token = token
    }
    getGuild(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input a guild ID!"))
            } else {
                request.get(baseurl + "/guild/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getGuildItem(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input an item ID!"))
            } else {
                request.get(baseurl + "/gitem/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getAllItems() {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            request.get(baseurl + "/all/items/", {
                headers: {
                    'Authorization': token
                }
            }).then(r => {
                resolve(r.body)
            })
        })
    }
    getItem(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input an item ID!"))
            } else {
                request.get(baseurl + "/item/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getBotStats() {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            request.get(baseurl + "/stats", {
                headers: {
                    'Authorization': token
                }
            }).then(r => {
                resolve(r.body)
            })
        })
    }
    getTrade(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input a trade ID!"))
            } else {
                request.get(baseurl + "/trade/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getItemBuyingTrades(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input an item ID!"))
            } else {
                request.get(baseurl + "/trade/buy/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getItemSellingTrades(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input an item ID!"))
            } else {
                request.get(baseurl + "/trade/buy/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
    getAllTrades() {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            request.get(baseurl + "/trade", {
                headers: {
                    'Authorization': token
                }
            }).then(r => {
                resolve(r.body)
            })
        })
    }
    getUser(id) {
        let token = this._token

        return new Promise(function(resolve, reject) {
            if(token === null || token === undefined) {
                reject(Error("You need to put in your API key!"))
            }
            if(id === null || id === undefined) {
                reject(Error("You need to input a user ID!"))
            } else {
                request.get(baseurl + "/user/" + id, {
                    headers: {
                        'Authorization': token
                    }
                }).then(r => {
                    resolve(r.body)
                })
            }
        })
    }
}

module.exports = DiscordRPG
