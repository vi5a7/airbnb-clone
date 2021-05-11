import React, {useState} from 'react';
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles'

import searchResults from '../../../assets/data/search'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
    const navigation = useNavigation()
    const [inputText, setInputText] = useState('')
    return (  
        <View style={styles.container}>

            <View style={{height: 500}}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests')
                    }}
                    query={{
                        key: 'AIzaSyDjEzfWH0QcnMxaWYodubKWNNgkMnwdDJY',
                        language: 'en',
                        type: '(cities)'
                    }}
                    style={{
                        textInput: styles.TextInput
                    }}
                    renderRow={(item)=> <SuggestionRow item={item}/>}
                    suppressDefaultStyle
                    fetchDetails
                />
            </View>
        </View>
    );
}
 
export default DestinationSearchScreen;