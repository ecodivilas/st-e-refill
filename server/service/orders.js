const ordersRepository = require('../repository/orders')

class OrdersService {
    async createPendingOrder(order) {
        return await ordersRepository.createPendingOrder(order)
    }

    async getAllOrderItems() {
        return await ordersRepository.getAllOrderItems()
    }

    async getOneOrderItems(id) {
        return await ordersRepository.getOneOrderItems(id)
    }

    async getAllOrders() {
        return await ordersRepository.getAllOrders()
    }

    async getOneOrder(id) {
        return await ordersRepository.getOneOrder(id)
    }

    async updateOrder(order) {
        return await ordersRepository.updateOrder(order)
    }

    async deleteOrder(id) {
        return await ordersRepository.deleteOrder(id)
    }
}

module.exports = new OrdersService()
