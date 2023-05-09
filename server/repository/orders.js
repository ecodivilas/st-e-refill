const { connect } = require('../config/db')

class OrdersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // Customize Create Order
    async createPendingOrder(order) {
        const { order_items, ...newOrder } = order

        try {
            const createdOrder = await this.db.orders.create(newOrder)

            if (createdOrder) {
                const createdOrderItem = []

                for (let i = 0; i <= order_items.length - 1; i++) {
                    order_items[i].order_id = createdOrder.dataValues.order_id
                    createdOrderItem[0] = await this.db.order_items.create(
                        order_items[i]
                    )
                }

                return createdOrderItem
            } else {
                console.log('No record was created!')
            }

            return true
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllOrders() {
        try {
            const orders = this.db.sequelize.query(
                `
                SELECT orders.order_id, users.username, order_date, delivery_date, delivery_time, mode_of_payment,
                is_paid, status, sum(order_items.quantity * order_items.unit_price) AS "total_price"
                FROM order_items LEFT JOIN orders ON orders.order_id = order_items.order_id
                LEFT JOIN users ON users.user_id = orders.user_id
                WHERE users.username IS NOT NULL AND orders.order_id IS NOT NULL
                GROUP BY orders.order_id, users.username;
            `,
                { type: this.db.QueryTypes.SELECT }
            )

            return orders
        } catch (error) {
            console.log('Error: ', error)
            return []
        }
    }

    async getOneOrder(id) {
        try {
            const order = this.db.sequelize.query(
                `
            SELECT orders.order_id, users.username, users.user_id, order_date, delivery_date, delivery_time, mode_of_payment,
            is_paid, status, sum(order_items.quantity * order_items.unit_price) AS "total_price"
            FROM order_items LEFT JOIN orders ON orders.order_id = order_items.order_id
            LEFT JOIN users ON users.user_id = orders.user_id
            WHERE users.username IS NOT NULL AND orders.order_id IS NOT NULL AND users.user_id = ${id}
            AND orders.archieved_at is null AND orders.deleted_at is null
            GROUP BY orders.order_id, users.username, users.user_id;
            `,
                { type: this.db.QueryTypes.SELECT }
            )
            return order
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getAllOrderItems() {
        const orders = this.db.orders.findAll({
            attributes: [
                'order_id',
                'order_date',
                [this.db.Sequelize.literal('order_items.quantity'), 'quantity'],
                [
                    this.db.Sequelize.literal(
                        'order_items.quantity * order_items.unit_price'
                    ),
                    'total_price',
                ],
                'is_paid',
                'status',
            ],
            include: [
                {
                    model: this.db.order_items,
                    attributes: [],
                },
            ],
            raw: true,
        })

        return orders
    }

    async getOneOrderItems(id) {
        const order_items = this.db.sequelize.query(
            `
        SELECT orders.order_id,
        containers.name,
        containers.capacity,
        orders.order_date,
        containers.refill_price,
        order_items.quantity,
        (order_items.quantity * order_items.unit_price) AS "total_price",
        orders.is_paid, orders.status from orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN containers ON containers.container_id = order_items.container_id
        WHERE orders.user_id = ${id} and orders.deleted_at is null;
      `,
            { type: this.db.QueryTypes.SELECT }
        )

        return order_items
    }

    async updateOrder(order) {
        console.log('order object: ', order)

        let data = {}

        try {
            data = await this.db.sequelize.query(
                `UPDATE orders SET mode_of_payment = '${order.mode_of_payment}',
                status = '${order.status}', is_paid = ${order.is_paid} WHERE order_id = ${order.order_id};`,
                { type: this.db.QueryTypes.SELECT }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    async deleteOrder(id) {
        console.log('ID: ', id)
        try {
            const order = await this.db.orders.update(
                { archieved_at: new Date() },
                { where: { order_id: id } }
            )
            return order
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new OrdersRepository()
