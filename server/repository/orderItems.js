const { connect } = require('../config/db')

class OrderItemsRepository {
    db = {}

    constructor() {
        this.db = connect()
    }


    async createOrderItem(order_item) {
        try {
            const createdOrderItem = await this.db.order_items.create(order_item)
            return createdOrderItem
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getOrderItems() {
        try {
            const orderItems = await this.db.order_items.findAll({
                order: [['id', 'ASC']],
            })
            return orderItems
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getOrderItem(id) {
        try {
            const orderItem = await this.db.order_items.findByPk(id);
            return orderItem
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    
    async updateOrderItem(orderItem) {
        let data = {}

        try {
            data = await this.db.order_items.update(
                { ...orderItem },
                {
                    where: {
                        id: orderItem.id,
                    },
                }
            );
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
    }
    
    async deleteOrderItem(id) {
        try {
            const orderItem = await this.db.order_items.destroy({ where: { id } })
            return orderItem
        } catch (error) {
            console.log('Error: ', error)
        }
    }

}

module.exports = new OrderItemsRepository()