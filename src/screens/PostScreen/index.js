import React from 'react';
import { View , Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

import Post from '../../components/Post';
import places from '../../../assets/data/feed'
import DetailedPost from '../../components/DetailedPost';


const PostScreen = () => {

    const route = useRoute()
    const post = places.find(place => place.id === route.params.postId)

    return (  
        <View>
            <DetailedPost post={post}/>
        </View>
    );
}
 
export default PostScreen;