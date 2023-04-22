const { connect } = require('../config/db')

class AddressesRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createAddress(address) {
        try {
            const createdAddress = await this.db.addresses.create(address)
            return createdAddress
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAddresses() {
        try {
            const addresses = await this.db.addresses.findAll({
                order: [['id', 'ASC']],
            })
            return addresses
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getAddress(id) {
        try {
            const address = await this.db.addresses.findByPk(id)
            return address
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async deleteAddress(id) {
        try {
            const address = await this.db.addresses.destroy({ where: { id } })
            return address
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateAddress(address) {
        let data = {}

        try {
            data = await this.db.addresses.update(
                { ...address },
                {
                    where: {
                        id: address.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }
}

module.exports = new AddressesRepository()
