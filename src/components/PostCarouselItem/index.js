import React from 'react';
import { View, Text, Image, SafeAreaView, useWindowDimensions, Pressable } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const PostCarouselItem = (props) => {

    const widthh = useWindowDimensions().width

    const post = props.post
    const navigation = useNavigation()

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id})
    }

    return (  
        <Pressable onPress={goToPostPage} style={styles.container}>
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
        </Pressable>
    );
}
 
export default PostCarouselItem;