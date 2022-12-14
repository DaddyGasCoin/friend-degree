import { List } from 'antd';


const FriendName = ({ names }) => {

    return (
        <div className="">

            <div className="">
                <List
                    style={{
                        width: 300, maxHeight: 250,
                        overflow: 'auto',
                    }}
                    size="default"
                    bordered
                    dataSource={names}
                    renderItem={(item) => <List.Item className='list-item'>
                        {item}
                    </List.Item>} />
            </div>

        </div>
    )
}

export default FriendName