export const columns = [
    {
        name: 'Order ID',
        selector: (row) => row.order_id,
        sortable: true,
    },
    {
        name: 'Username',
        selector: (row) => row.username,
        sortable: true,
    },
    {
        name: 'Order',
        selector: (row) => row.order,
        sortable: true,
    },
    {
        name: 'Order Date',
        selector: (row) => row.order_date,
        sortable: true,
    },
    {
        name: 'Delivery Schedule',
        selector: (row) => row.delivery_schedule,
        sortable: true,
    },
    {
        name: 'MOP',
        selector: (row) => row.mode_of_payment,
        sortable: true,
    },
    {
        name: 'Price (₱)',
        selector: (row) => row.total_price,
        sortable: true,
    },
    {
        name: 'Payment',
        selector: (row) => row.is_paid,
        sortable: true,
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
    },
    {
        name: 'Actions',
        selector: (row) => row.actions,
    }
]