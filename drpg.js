const request = require('snekfetch')

class DiscordRPG {

	/**
	 * Creates a new API Interface
	 * @constructs DiscordRPG
	 * @param {String} Token - Your API Token
	 */
	constructor(token) {
		this._token = token
		this._baseURL = "http://api.discorddungeons.me/v3"
	}

	/**
	 * Gets a guild by it's ID
	 * @function
	 * @param {String} id - The ID of the guild
	 * @returns {Promise.<Object>} 
	 */
	async getGuild(id) {
		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input a guild ID!"))
		}

		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/guild/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets a guild item by it's ID
	 * @function
	 * @param {String} id - The ID of the item to get
	 * @returns {Promise.<Object>} 
	 */
	async getGuildItem(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input an item ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/gitem/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets all items
	 * @function
	 * @returns {Promise.<Object>} 
	 */
	async getAllItems() {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}
		let requestData = await request.get(`${this._baseURL}/all/items`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets an item by it's ID
	 * @function
	 * @param {String} id - The ID of the item to get
	 * @returns {Promise.<Object>} 
	 */
	async getItem(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input an item ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/item/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets the bot stats
	 * @function
	 * @returns {Promise.<Object>} 
	 */
	async getBotStats() {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		let requestData = await request.get(`${this._baseURL}/stats`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets a trade by it's ID
	 * @function
	 * @param {String} id - The ID of the trade to get
	 * @returns {Promise.<Object>} 
	 */
	async getTrade(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input a trade ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/trade/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	

	/**
	 * Gets all buying trades for an item ID
	 * @function
	 * @param {String} id - The ID of the item trades to get
	 * @returns {Promise.<Object>} 
	 */
	async getItemBuyingTrades(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input an item ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/trade/buy/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}


	/**
	 * Gets all selling trades for an item ID
	 * @function
	 * @param {String} id - The ID of the item trades to get
	 * @returns {Promise.<Object>} 
	 */
	async getItemSellingTrades(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input an item ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/trade/sell/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets all trades
	 * @function
	 * @returns {Promise.<Object>} 
	 */
	async getAllTrades() {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		let requestData = await request.get(`${this._baseURL}/trade`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}

	/**
	 * Gets a users stats
	 * @function
	 * @param {String} id - The ID of the user to get
	 * @returns {Promise.<Object>} 
	 */
	async getUser(id) {
		if(this._token === null || this._token === undefined) {
			return Promise.reject(new Error("You need to put in your API key!"))
		}

		if(id === null || id === undefined) {
			return Promise.reject(new Error("You need to input a user ID!"))
		}
	
		let requestData = await request.get(`${this._baseURL}/user/${id}`, {
			headers: {
				'Authorization': this._token
			}
		})

		return requestData.body
	}
}

module.exports = DiscordRPG
