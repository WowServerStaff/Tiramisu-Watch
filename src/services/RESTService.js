import axios from "axios";

/**
 * Simple REST Service
 * @module RESTService
 */
class RESTService {
	/**
	 * Constructor of the service, build the url
	 *
	 * @method constructor
	 * @param {String} 	name 	Name of the resource
	 */
	constructor(name) {
		this.basePath = "http://163.172.12.162:27001";
		this.fullPath = `${this.basePath}/${name}`;
	}

	/**
	 * Get all the results
	 *
	 * @method get
	 * @return {Promise}
	 */
	get(){
		return axios.get(this.fullPath);
	}

	/**
	 * Get the result matching the given id
	 * 
	 * @method getById
	 * @param {String} id Id
	 * @return {Promise}
	 */
	getById(id){
		return axios.get(`${this.fullPath}/${id}`);
	}
}

export default RESTService;