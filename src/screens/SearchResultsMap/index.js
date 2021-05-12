import React , {useState} from 'react';
import { View, Text } from 'react-native';
import MapView , {Marker} from 'react-native-maps'

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)

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

            <View style={{position: 'absolute', bottom: 10}}>
                <PostCarouselItem post={places[0]}/>
            </View>
        </View>
    );
}
 
export default SearchResultsMap;