import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './styles'

const Post = (props) => {

    const post = props.post

    return (  
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}}
            />
            <Text style={styles.bedrooms}>{post.bed} bed - {post.bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>   ${post.newPrice}</Text>
                /night
            </Text>
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    );
}
 
export default Post;