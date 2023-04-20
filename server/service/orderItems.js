const orderItemsRepository = require('../repository/orderItems')

class OrderItemsService {
    async createOrderItem(order_item) {
        return await orderItemsRepository.createOrderItem(order_item)
    }

    async getOrderItems() {
        console.log('GETTING ORDER ITEMS IN THE REPOSITORY')
        return await orderItemsRepository.getOrderItems()
    }

    async getOrderItem(id) {
        return await orderItemsRepository.getOrderItem(id)
    }

    async updateOrderItem(order_item) {
        return await orderItemsRepository.updateOrderItem(order_item)
    }

    async deleteOrderItem(id) {
        return await orderItemsRepository.deleteOrderItem(id)
    }
}

module.exports = new OrderItemsService()
