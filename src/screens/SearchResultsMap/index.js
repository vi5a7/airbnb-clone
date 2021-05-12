import React , {useState} from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import MapView , {Marker} from 'react-native-maps'

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const width = useWindowDimensions().width

    return (  
        <View style={{width: '100%', height: '100%'}}>
             <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
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
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 250}
                    snapToAlignment='center'
                    decelerationRate='fast'
                />
            </View>
        </View>
    );
}
 
export default SearchResultsMap;