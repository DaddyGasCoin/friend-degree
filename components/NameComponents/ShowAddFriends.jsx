import { Select, Button } from 'antd';
import { useState, useEffect } from 'react';

const AddFriends = ({ names, addFriend, currentName, currentFriends }) => {

    const [listItems, setListItem] = useState([])
    const [selected, setSelected] = useState([])
    useEffect(() => {
        let obj = []
        names = names.filter((i) => i != currentName)
        names = names.filter((i) => !currentFriends.includes(i))
        names.forEach(name => {
            obj.push({
                value: name,
                label: name
            })
        });
        setListItem(obj)
    }, [currentName])
    const handleChange = (value) => {
        setSelected(value)
    };

    const sumbitValues = () => {
        addFriend(selected)
    }
    return (
        <>
            <Select
                mode="multiple"
                placeholder="Select names"
                onChange={handleChange}
                style={{
                    width: '100%',
                }}
                options={listItems}
            />
            <Button onClick={() => sumbitValues()}>Submit</Button>
        </>


    )
}

export default AddFriends