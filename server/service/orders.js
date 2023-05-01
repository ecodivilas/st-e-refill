const ordersRepository = require('../repository/orders')

class OrdersService {
    async createOrder(order) {
        return await ordersRepository.createOrder(order)
    }
    
    // Customize create orders
    async createPendingOrder(order) {
        return await ordersRepository.createPendingOrder(order)
    }

    // Customize Get only one record
    async getOneOrderItems(id){
        return await ordersRepository.getOneOrderItems(id)
    }
    
    // Customize Get only one record
    async getAllOrderItems(){
        return await ordersRepository.getAllOrderItems()
    }

    async getOrders() {
        return await ordersRepository.getOrders()
    }

    async getOrder(id) {
        return await ordersRepository.getOrder(id)
    }

    async updateOrder(order) {
        return await ordersRepository.updateOrder(order)
    }

    async deleteOrder(id) {
        return await ordersRepository.deleteOrder(id)
    }
}

module.exports = new OrdersService()
