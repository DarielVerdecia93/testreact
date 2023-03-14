import React, {useEffect,useState, useCallback} from 'react';
import {Button, Input, Modal, Table} from 'antd';


export default function Worker() {

const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchData = useCallback(async () =>
    {
        setLoading(true);
        await fetch('http://localhost:3000/productos')
        .then((res) => {
            setData(res);
        });  
        setLoading(false);      
    }, [setLoading, setData]);

    useEffect(() => {
        fetchData();      
    }, [fetchData]);

   
    const columns = [
        
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Producto',
            dataIndex: 'Name',
            filteredValue: [searchText],
            onFilter: (value, record) => {
                return String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase());
            },
        },
        {
            title: 'U/M',
            dataIndex: 'Unity',
        },
        {
            title: 'Cantidad',
            dataIndex: 'Count',
        },
        {
            title: 'Precio',
            dataIndex: 'Price',
        },        
    ];

   
    return (
        <>
        <div>
        <Button type="primary" onClick={showModal}>
        Insertar nuevo Producto
      </Button>
      <Modal title='Insertar nuevo Producto' open={isModalOpen} onOk={onClose} onCancel={onClose}>
                      
         
      </Modal>
        </div>

            <div>
                <h1>Productos</h1>
                <Input.Search placeholder='Buscar'
                              style={{marginBottom: 10}}
                              onSearch={value => setSearchText(value)}
                              onChange={(e) => {
                                setSearchText(e.target.value);
                              }
                              }
                />
                <Table dataSource={data} columns={columns} loading={loading} />
            </div>
        </>
    )


}