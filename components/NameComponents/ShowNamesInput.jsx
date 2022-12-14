
import { Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ValueContext } from '../../ValueContext';


//This component if used to get the values used from the two select form 
// for finding the degree of seperation
const GetNames = ({ names }) => {

    const [listItems, setListItem] = useState([])
    useEffect(() => {
        let obj = []
        names.forEach(name => {
            obj.push({
                value: name,
                label: name
            })
        });
        setListItem(obj)
    }, [names])

    const values = useContext(ValueContext)

    const handleStart = (value) => {
        let obj = values.target
        obj.start = value
        values.setTarget(obj)
    };
    const handleEnd = (value) => {
        let obj = values.target
        obj.end = value
        values.setTarget(obj)
    };


    return (
        <div className="flex flex-row gap-3">
            <Select
                style={{
                    width: 120,
                }}
                onChange={handleStart}
                placeholder='Pick a name'
                options={listItems}
            />
            <Select
                style={{
                    width: 120,
                }}
                onChange={handleEnd}
                placeholder='Pick a name'
                options={listItems}
            />
        </div>

    )
}


export default GetNames