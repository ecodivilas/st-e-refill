
export const deliveryAddressFields = [
    {
        id: 'address',
        name: 'address',
        label: 'Address',
        rows: "4",
        cols: "20",
        placeholder: '4321 Seasame Street Suite 900... flr... Building... Subdivision... Unit...',
    },
    {
        id: 'baranggay',
        name: 'baranggay',
        label: 'Baranggay',
        type: 'text',
        placeholder: 'Baranggay',
        values: [{
            "id": 1,
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
        values: 
        [{
            "id": 1,
            "value": "Quezon City"
        }]
    },
    {
        id: 'country',
        name: 'country',
        label: 'Country',
        type: 'text',
        placeholder: 'Country',
        values: [
            {
                "id": 1,
                "value": "Philippines"
            }
        ]
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
        placeholder: 'Near the parking area xd',
    }
]
