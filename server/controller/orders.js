const ordersService = require('../service/orders')
class OrdersController {
    async createOrder(order) {
        return await ordersService.createOrder(order)
    }

    // Customize Create
    async createPendingOrder(order) {
        return await ordersService.createPendingOrder(order)
    }

    async getOrders() {
        return await ordersService.getOrders()
    }

    async getOrder(id) {
        return await ordersService.getOrder(id)
    }

    async updateOrder(order) {
        return await ordersService.updateOrder(order)
    }

    async deleteOrder(id) {
        return await ordersService.deleteOrder(id)
    }
}

module.exports = new OrdersController()
