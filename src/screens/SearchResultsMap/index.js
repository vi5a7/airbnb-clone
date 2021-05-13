import React , {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import MapView , {Marker} from 'react-native-maps'

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {

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
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})

        const selectedPlace = places[index]
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
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
                {places.map(place => (
                    <CustomMarker 
                        key={place.id}
                        isSelected={place.id === selectedPlaceId}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                ))}
            </MapView>

            <View style={{position: 'absolute', bottom: 40}}>
                <FlatList
                    ref={flatlist}
                    data={places}
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