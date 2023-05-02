const { connect } = require('../config/db')

class OrdersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }


    // async createOrder(order) {
    //     try {
    //         const createdOrder = await this.db.orders.create(order)
    //         return createdOrder
    //     } catch (error) {
    //         console.log('Error: ', error)
    //     }
    // }

    // Customize Create Order
    async createPendingOrder(order) {
      
        const { order_items, ...newOrder } = order;

        try {
            const createdOrder = await this.db.orders.create(newOrder)
            
            if (createdOrder) {

                const createdOrderItem = []

                for (let i = 0; i <= order_items.length - 1; i++) {
                    order_items[i].order_id = createdOrder.dataValues.order_id
                    createdOrderItem[0] = await this.db.order_items.create(order_items[i])
                }

                return createdOrderItem
                
            } else {
                console.log("No record was created!")
            }

            return true

        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async getOneOrderItems(id){

        // const orders = this.db.orders.findAll({
        //     attributes: [
        //       'order_id',
        //       'order_date',
        //       [this.db.Sequelize.literal('order_items.quantity'), 'quantity'],
        //       [this.db.Sequelize.literal('order_items.quantity * order_items.unit_price'), 'total_price'],
        //       'is_paid',
        //       'status'
        //     ],
        //     include: [{
        //       model: this.db.order_items,
        //       attributes: []
        //     }],
        //     raw: true,
        //     where:{user_id: id}
        //   })

        // // Still working on this one
        // const order_items = this.db.orders.findAll({
        //     attributes: [
        //       'order_id',
        //       [this.db.Sequelize.literal('o_to_oi_containers.name'), 'name'],
        //       [this.db.Sequelize.literal('o_to_oi_containers.capacity'), 'capacity'],
        //       'order_date',
        //       [this.db.Sequelize.literal('o_to_order_items.quantity'), 'quantity'],
        //       [this.db.Sequelize.literal('(o_to_order_items.quantity * o_to_order_items.unit_price)'), 'total_price'],
        //       'is_paid',
        //       'status'
        //       // exclude the following fields:
        //       // 'o_to_oi_containers.order_items.created_at',
        //       // 'o_to_oi_containers.order_items.updated_at',
        //       // 'o_to_oi_containers.order_items.deleted_at'
        //     ],
        //     include: [
        //       {
        //         model: this.db.order_items,
        //         // attributes: { exclude: ['created_at'] },
        //         attributes: [],
        //         as: 'o_to_order_items',
        //         required: true // inner join
        //       },
        //       {
        //         model: this.db.containers,
        //         // attributes: { exclude: ['created_at'] },
        //         attributes: [],
        //         as: 'o_to_oi_containers',
        //         required: true // inner join
        
        //       },
        //     ],
        //     where:{user_id: id},
        //     raw: true,
        //     // exclude unwanted columns
        //     // nest: true,
        //     // plain: true,
        //   });

        const order_items = this.db.sequelize.query(`
        SELECT orders.order_id,
        containers.name,
        containers.capacity,
        orders.order_date,
        order_items.quantity,
        (order_items.quantity * order_items.unit_price) AS "total_price",
        orders.is_paid, orders.status from orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN containers ON containers.container_id = order_items.container_id
        WHERE orders.user_id = ${id};
      `, { type: this.db.QueryTypes.SELECT })
        
        return order_items
    }

    async getAllOrderItems() {
        const orders = this.db.orders.findAll({
            attributes: [
              'order_id',
              'order_date',
              [this.db.Sequelize.literal('order_items.quantity'), 'quantity'],
              [this.db.Sequelize.literal('order_items.quantity * order_items.unit_price'), 'total_price'],
              'is_paid',
              'status'
            ],
            include: [{
              model: this.db.order_items,
              attributes: []
            }],
            raw: true
          })
        
        return orders
    }

    async getOrders() {
        try {
            const orders = this.db.sequelize.query(`
            SELECT orders.order_id, users.username, order_date, delivery_date, delivery_time, mode_of_payment,
            is_paid, status, sum(order_items.quantity * order_items.unit_price) AS "total_price"
            FROM order_items LEFT JOIN orders ON orders.order_id = order_items.order_id
            LEFT JOIN users ON users.user_id = orders.user_id
            WHERE users.username IS NOT NULL AND orders.order_id IS NOT NULL
            GROUP BY orders.order_id, users.username;
            `, { type: this.db.QueryTypes.SELECT })

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
        console.log("order object: ", order)

        let data = {}

        try {
            // data = await this.db.orders.update(
            //     { ...order },
            //     {
            //         where: {
            //             user_id: order.user_id,
            //         },
            //     }
            // );
            data = await this.db.sequelize.query(`
            UPDATE orders SET mode_of_payment = '${order.mode_of_payment}',
            status = '${order.status}', is_paid = ${order.is_paid} WHERE order_id = ${order.order_id};
            `, { type: this.db.QueryTypes.SELECT })
        } catch (error) {
            console.log('Error: ', error)
        }
        return data;
    }
    
    async deleteOrder(id) {
        try {
            const order = await this.db.orders.update({ deleted_at: new Date }, { where:{"order_id": id}})
            return order
        } catch (error) {
            console.log('Error: ', error)
        }
    }

}

module.exports = new OrdersRepository()