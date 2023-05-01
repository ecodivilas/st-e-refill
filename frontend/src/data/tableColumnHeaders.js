export const columns = [
    {
        name: 'Username',
        selector: (row) => row.username,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true,
    },
    {
        name: 'First Name',
        selector: (row) => row.first_name,
        sortable: true,
    },
    {
        name: 'Middle Name',
        selector: (row) => row.middle_name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row) => row.last_name,
        sortable: true,
    },
    {
        name: 'Gender',
        selector: (row) => row.gender,
        sortable: true,
    },
    {
        name: 'Mobile No.',
        selector: (row) => row.mobile_number,
        sortable: true,
    },
    {
        name: 'Actions',
        selector: (row) => row.actions,
    }
]