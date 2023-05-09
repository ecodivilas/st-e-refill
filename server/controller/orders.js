const ordersService = require('../service/orders')
class OrdersController {
    async createPendingOrder(order) {
        return await ordersService.createPendingOrder(order)
    }

    async getAllOrderItems() {
        return await ordersService.getAllOrderItems()
    }

    async getOneOrderItems(id) {
        return await ordersService.getOneOrderItems(id)
    }

    async getAllOrders() {
        return await ordersService.getAllOrders()
    }

    async getOneOrder(id) {
        return await ordersService.getOneOrder(id)
    }

    async updateOrder(order) {
        return await ordersService.updateOrder(order)
    }

    async deleteOrder(id) {
        return await ordersService.deleteOrder(id)
    }
}

module.exports = new OrdersController()
