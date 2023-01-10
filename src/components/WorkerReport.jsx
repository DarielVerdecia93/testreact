import React, {useState} from 'react';
import {Input, Table} from 'antd'


export default function Worker() {
    const [searchText, setSearchText] = useState("");
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
                <Input.Search placeholder='Buscar'
                              style={{marginBottom: 10}}
                              onSearch={value => setSearchText(value)}
                              onChange={(e) => {
                                setSearchText(e.target.value);
                              }
                              }
                />
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        </>
    )

}

