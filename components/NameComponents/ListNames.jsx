import { List, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FriendName from './FriendNames';
import { useState } from 'react';

const ListNames = () => {

    const relationships = {
        John: ['Jane', 'Bob', 'Alice'],
        Jane: ['Bob', 'Alice'],
        Bob: ['Alice'],
        Alice: []
    }
    const [names, setNames] = useState(relationships)
    const [currentName, setCurrentName] = useState()

    const addName = () => {

    }
    return (
        <div>
            <List
                style={{
                    width: 300, maxHeight: 250,
                    overflow: 'auto',
                }}
                size="default"
                bordered
                dataSource={Object.keys(names)}
                renderItem={(item) => <List.Item className='list-item'
                    onClick={() => currentName == item ? setCurrentName('') : setCurrentName(item)}>
                    <div style={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: "center", justifyContent: "space-between",
                        marginRight: '3px', width: '100%'
                    }}>
                        {item}
                        <Button size='small' shape="circle" icon={<PlusOutlined />} />
                    </div>
                </List.Item>} />

            <Button onClick={() => addName()}>Add Name</Button>

            {currentName ?
                <FriendName names={names[currentName]} /> :
                null}

        </div>



    )

}

export default ListNames