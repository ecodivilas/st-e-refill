const addressesRepository = require('../repository/addresses')

class AddressesService {
    async createAddress(address) {
        return await addressesRepository.createAddress(address)
    }

    async getAddresses() {
        return await addressesRepository.getAddresses()
    }

    async getAddress(id) {
        return await addressesRepository.getAddress(id)
    }

    async updateAddress(address) {
        return await addressesRepository.updateAddress(address)
    }

    async deleteAddress(id) {
        return await addressesRepository.deleteAddress(id)
    }

}

module.exports = new AddressesService()
