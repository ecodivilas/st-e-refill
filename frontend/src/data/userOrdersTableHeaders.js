export const columns = [
    {
        name: 'Order ID',
        selector: (row) => row.order_id,
        sortable: true,
    },
    {
        name: 'Order Date',
        selector: (row) => row.order_date,
        sortable: true,
    },
    {
        name: 'Container',
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: 'Capacity',
        selector: (row) => row.capacity,
        sortable: true,
    },
    {
        name: 'Quantity',
        selector: (row) => row.quantity,
        sortable: true,
    },
    {
        name: 'Total Price',
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
    // {
    //     name: 'Actions',
    //     selector: (row) => row.actions,
    // }
]