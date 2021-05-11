import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 20,
        marginHorizontal:20,
        borderBottomWidth: 1, 
        borderColor: 'lightgrey'
    },

    buttons: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    button: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'lightgrey',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    number: {
        marginHorizontal: 20,
        fontSize: 16
    },

    plusnminus:{
        color: '#5d5d5d',
        fontSize: 20,
    },

    searchBar:{
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal : 20,
        borderRadius: 10 
    },

    searchButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default styles