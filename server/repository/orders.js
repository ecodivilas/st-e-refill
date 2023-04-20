const { connect } = require('../config/db')

class OrdersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }


    async createOrder(order) {
        try {
            const createdOrder = await this.db.orders.create(order)
            return createdOrder
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getOrders() {
        try {
            const orders = await this.db.orders.findAll({
                order: [['id', 'ASC']],
            })
            return orders
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getOrder(id) {
        try {
            const order = await this.db.orders.findByPk(id);
            return order
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    
    async updateOrder(order) {
        let data = {}

        try {
            data = await this.db.orders.update(
                { ...order },
                {
                    where: {
                        id: order.id,
                    },
                }
            );
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
    }
    
    async deleteOrder(id) {
        try {
            const order = await this.db.orders.destroy({ where: { id } })
            return order
        } catch (error) {
            console.log('Error: ', error)
        }
    }

}

module.exports = new OrdersRepository()