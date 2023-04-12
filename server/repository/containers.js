const { connect } = require('../config/db')

class ContainersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }


    async createContainer(container) {
        let containerData = {}
        try {
            const createdContainer = await this.db.containers.create(containerData)
            return createdContainer
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getContainers() {
        try {
            const containers = await this.db.containers.findAll({
                order: [['id', 'ASC']],
            })
            return containers
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getContainer(id) {
        try {
            const container = await this.db.containers.findByPk(id);
            return container
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async deleteContainer(id) {
        try {
            const container = await this.db.containers.destroy({ where: { id } })
            return container
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateContainers(container) {
        let data = {};

        try {
            data = await this.db.container.update(
                { ...container },
                {
                    where: {
                        id: container.id,
                    },
                }
            );
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
    }
}

module.exports = new ContainersRepository()