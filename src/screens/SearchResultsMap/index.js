import React , {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import MapView , {Marker} from 'react-native-maps'

import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = (props) => {

    const {posts} = props

    const [selectedPlaceId, setSelectedPlaceId] = useState()
    const width = useWindowDimensions().width
    const map = useRef()
    const flatlist = useRef()
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if(!selectedPlaceId || !flatlist){
            return ;
        }
        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = posts[index]
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeData: 0.8,
            longitudeDelta: 0.8
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])

    return (  
        <View style={{width: '100%', height: '100%'}}>
             <MapView
                ref={map}
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {posts.map(post => (
                    <CustomMarker 
                        key={post.id}
                        isSelected={post.id === selectedPlaceId}
                        coordinate={{latitude: post.latitude, longitude: post.longitude}}
                        price={post.newPrice}
                        onPress={() => setSelectedPlaceId(post.id)}
                    />
                ))}
            </MapView>

            <View style={{position: 'absolute', bottom: 40}}>
                <FlatList
                    ref={flatlist}
                    data={posts}
                    renderItem={({item}) => <PostCarouselItem post={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment='center'
                    decelerationRate='fast'
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    );
}
 
export default SearchResultsMap;