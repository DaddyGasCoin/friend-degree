import { List, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FriendName from './FriendNames';
import GetNames from './NamesInput';
import { useMemo, useState } from 'react';
import { ValueContext } from '../../ValueContext';
import bfs from '../../utils/FindDegree';

const ListNames = () => {

    const relationships = {
        Alice: ["Bob", "Carol"],
        Bob: ["Alice", "Carol"],
        Carol: ["Alice", "Bob", "Dave"],
        Dave: ["Carol"],
    }

    const [names, setNames] = useState(relationships)
    const [currentName, setCurrentName] = useState()
    const [target, setTarget] = useState({
        start: null,
        end: null
    })

    const findDegree = () => {
        // console.log(target)
        console.log(bfs(relationships, target.start, target.end))
    }
    const value = useMemo(() => {
        return {
            target,
            setTarget,
        }
    }, [target]);
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

            <Button onClick={() => findDegree()}>Check Degree</Button>

            {currentName ?
                <FriendName names={names[currentName]} /> :
                null}
            <ValueContext.Provider value={value}>
                <GetNames names={Object.keys(names)} />
            </ValueContext.Provider>

        </div>



    )

}

export default ListNames