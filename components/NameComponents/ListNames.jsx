import { List, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FriendName from './ShowFriends';
import GetNames from './ShowNamesInput';
import { useEffect, useMemo, useState } from 'react';
import { ValueContext } from '../../ValueContext';
import AddName from './AddName';
import AddFriends from './ShowAddFriends';
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
    const [listItems, setListItems] = useState()
    const [nameFormVis, setNameForm] = useState(false)
    const [degree, setDegree] = useState()

    useEffect(() => {

        let obj = []
        Object.keys(names).forEach(name => {
            obj.push({
                value: name,
                label: name
            })
        });
        setListItems(obj)
    }, [])

    const findDegree = () => {

        if (!target.end || !target.start) {
            setDegree('Please enter valid Input')
            return
        }

        if (names[target.start].includes(target.end))
            setDegree([target.start, target.end].join('>>'))

        const degree = bfs(names, target.start, target.end)
        if (degree)
            setDegree(degree.join('>>'))
        else
            setDegree('No connnection')

    }

    const value = useMemo(() => {
        return {
            target,
            setTarget,
        }
    }, [target]);

    const addName = (name) => {
        setNames({
            ...names,
            [name.name]: []
        })
    }

    const nameFormHandler = (currentItem) => {
        setCurrentName(currentItem)
        setNameForm(!nameFormVis)
    }

    const addFriend = (name) => {
        let arr = names[currentName]
        arr = [...arr, ...name]
        setNames({
            ...names,
            [currentName]: arr
        })
        setNameForm(false)
    }

    return (
        <div className="flex flex-col">
            <div className='flex flex-row'
                style={{ gap: '10px', marginTop: '50px', justifyContent: 'center' }}>
                <div className="flex flex-col"
                    style={{ gap: '20px' }}>
                    <div className="">
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
                                    <Button size='small' shape="circle"
                                        onClick={(e) => {
                                            nameFormHandler(item)
                                            e.stopPropagation();
                                        }}
                                        icon={<PlusOutlined />} />
                                </div>
                            </List.Item>} />
                    </div>
                    <div className="">
                        {currentName ?
                            <FriendName names={names[currentName]} /> :
                            null}
                    </div>
                </div>


                <div className="flex flex-col" style={{ gap: '16px' }}>
                    <ValueContext.Provider value={value}>
                        <GetNames names={Object.keys(names)} />
                    </ValueContext.Provider>
                    <div className="self-center	justify-self-center" style={{ justifySelf: 'center' }}>
                        <Button onClick={() => findDegree()}>Check Degree</Button>
                    </div>

                    <div className="flex flex-row" style={{ gap: '20px' }}>
                        {nameFormVis ? <AddFriends names={Object.keys(names)}
                            addFriend={addFriend} currentName={currentName}
                            currentFriends={names[currentName]} /> : null}
                    </div>
                    <AddName handler={addName} />
                </div>
            </div>
            <div className="" style={{ alignSelf: 'center' }}>
                {degree ? degree : null}

            </div>
        </div>
    )

}

export default ListNames