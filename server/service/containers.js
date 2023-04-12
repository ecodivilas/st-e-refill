const containersRepository = require('../repository/containers')

class containersService {

    async createContainer(container) {
        return await containersRepository.createContainer(container)
    }

    async getContainers() {
        return await containersRepository.getContainers()
    }

    async getContainer(id) {
        return await containersRepository.getContainer(id)
    }
    
    async updateContainer(container) {
        return await containersRepository.updateContainer(container)
    }

    async deleteContainer(id) {
        return await containersRepository.deleteContainer(id)
    }
}

module.exports = new containersService()