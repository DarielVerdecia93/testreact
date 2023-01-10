import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';


const App = () => (
    <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
    </Tooltip>
);
export default App;