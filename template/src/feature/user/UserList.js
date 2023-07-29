import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../container/user/Slice"

const UserList = props => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userSlice.userList);

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        dispatch(getUserList())
    }, [])

    useEffect(() => {
        if (userList.length > 0) {
            setDataSource(userList)
        }
    }, [userList])

    const Item = ({ item }) => {
        console.log("🚀 ~ file: UserList.js:30 ~ Item ~ item:", item)
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name.title + " " + item.name.first + " " + item.name.last}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                dataSource && dataSource.length > 0 ? (
                    <FlatList
                        data={dataSource}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
                ) : null
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default UserList;