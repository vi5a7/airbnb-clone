import React , {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import MapView , {Marker} from 'react-native-maps'

import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listPosts.items)
            }catch(e){
                console.log('ERROR')
            }
        }
        fetchPosts()
    }, [])

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
            latitudeData: 0.01,
            longitudeDelta: 0.01
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])

    return (  
        <View style={{width: '100%', height: '100%'}}>
             <MapView
                ref={map}
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: 11.585230, 
                    longitude: 104.866203,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
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