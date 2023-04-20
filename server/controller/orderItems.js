const orderItemsService = require('../service/orderItems')
class OrderItemsController {
    async createOrderItem(order_item) {
        return await orderItemsService.createOrderItem(order_item)
    }

    async getOrderItems() {
        return await orderItemsService.getOrderItems()
    }

    async getOrderItem(id) {
        return await orderItemsService.getOrderItem(id)
    }

    async updateOrderItem(order_item) {
        return await orderItemsService.updateOrderItem(order_item)
    }

    async deleteOrderItem(id) {
        return await orderItemsService.deleteOrderItem(id)
    }
}

module.exports = new OrderItemsController()
