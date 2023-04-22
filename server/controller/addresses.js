const addressesService = require('../service/addresses')
class AddressesController {
    async createAddress(address) {
        return await addressesService.createAddress(address)
    }

    async getAddresses() {
        return await addressesService.getAddresses()
    }

    async getAddress(id) {
        return await addressesService.getAddress(id)
    }

    async updateAddress(address) {
        return await addressesService.updateAddress(address)
    }

    async deleteAddress(id) {
        return await addressesService.deleteAddress(id)
    }
}

module.exports = new AddressesController()
