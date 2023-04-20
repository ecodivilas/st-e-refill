
const containersService = require('../service/containers')
class containersController {

    async createContainer(container) {
        return await containersService.createContainer(container)
    }

    async getContainers() {
        return await containersService.getContainers()
    }

    async getContainer(id) {
        return await containersService.getContainer(id)
    }

    async updateContainer(container) {
        return await containersService.updateContainer(container)
    }
    
    async deleteContainer(id) {
        return await containersService.deleteContainer(id)
    }
} 

module.exports =  new containersController()