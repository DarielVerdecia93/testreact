import React, {useState} from 'react';
import {DatePicker, Table} from 'antd'


export default function Worker() {
    const [searchText] = useState("");
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filteredValue: [searchText],
            onFilter: (value, record) => {
                return String(record.name)
                    .toLowerCase()
                    .includes(value) ||
                    String(record.age)
                        .toLowerCase()
                        .includes(value) ||
                    String(record.address)
                        .toLowerCase()
                        .includes(value);
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    return (
        <>
            <div>
                <h1>Workers</h1>
                <DatePicker.RangePicker> </DatePicker.RangePicker>
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        </>
    )

}

