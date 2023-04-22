export const deliveryAddressFields = [
    {
        id: 'address',
        name: 'address',
        label: 'Address',
        rows: "4",
        cols: "20",
        placeholder: '4321 Seasame Street Suite 900',
    },
    {
        id: 'baranggay',
        name: 'baranggay',
        label: 'Baranggay',
        type: 'text',
        placeholder: 'Baranggay',
        values: [{
            "value": "Holy Spirit",
            "zip": 1127
        }]
    },
    {
        id: 'city',
        name: 'city',
        label: 'City',
        type: 'text',
        placeholder: 'City',
        values: ["Quezon City"]
    },
    {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'text',
        placeholder: 'Country',
        values: ["Philippines"]
    },
    {
        id: 'tin',
        name: 'tin',
        label: 'TIN',
        type: 'text',
        placeholder: 'TIN'
    },
    {
        id: 'description',
        name: 'description',
        label: 'Description',
        rows: "4",
        cols: "20",
        placeholder: 'Near the parking area',
    }
]
