import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    innerContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },

    description: {
        fontSize: 15,
    },

    prices: {
        fontSize: 15,
        marginTop: 10,
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },

    newPrice: {
        fontWeight: 'bold',
    },

    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
        marginTop: 5
    },
})

export default styles;