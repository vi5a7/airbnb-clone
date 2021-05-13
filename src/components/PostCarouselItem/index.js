import React from 'react';
import { View, Text, Image, SafeAreaView, useWindowDimensions } from 'react-native';
import styles from './styles'

const PostCarouselItem = (props) => {

    const post = props.post
    const widthh = useWindowDimensions().width

    return (  
        <View style={styles.container}>
            <View style={[styles.innerContainer, {width: widthh - 60}]}>
                <Image
                    style={styles.image}
                    source={{uri: post.image}}
                />
                <View style={{flex: 1, marginHorizontal: 20}}>
                    <Text style={styles.bedrooms}>{post.bed} bed - {post.bedroom} bedroom</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    <Text style={styles.prices}>
                        <Text style={styles.newPrice}>${post.newPrice}</Text>
                        /night
                    </Text>
                </View>
            </View>
        </View>
    );
}
 
export default PostCarouselItem;