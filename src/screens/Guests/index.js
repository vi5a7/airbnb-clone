import React, {useState} from 'react';
import { View , Text, Pressable} from 'react-native';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = () => {

    const navigation = useNavigation()

    const [adults, setAdults] = useState(0)
    const [childrens, setChildrens] = useState(0)
    const [infants, setInfants] = useState(0)
    
    return (  
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Adults</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setAdults(adults - 1)}
                            style={styles.button}
                            disabled={adults < 1}
                        >
                            <Text style={styles.plusnminus}>-</Text>
                        </Pressable>

                        <Text style={styles.number}>{adults}</Text>

                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.plusnminus}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Childrens</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setChildrens(childrens - 1)}
                            style={styles.button}
                            disabled={childrens < 1}
                        >
                            <Text style={styles.plusnminus}>-</Text>
                        </Pressable>

                        <Text style={styles.number}>{childrens}</Text>

                        <Pressable
                            onPress={() => setChildrens(childrens + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.plusnminus}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Infants</Text>
                        <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setInfants(infants - 1)}
                            style={styles.button}
                            disabled={infants < 1}
                        >
                            <Text style={styles.plusnminus}>-</Text>
                        </Pressable>

                        <Text style={styles.number}>{infants}</Text>

                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.plusnminus}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View>
                <Pressable 
                    style={styles.searchBar}
                    onPress={() => navigation.navigate('Home',{
                        screen: 'Explore',
                        params:  {
                            screen: 'Search Results',
                            params: {
                                guests: adults + childrens
                            }
                        }
                    })}>
                    <Text style={styles.searchButton}>Search</Text>
                </Pressable>
            </View>
        </View>
    );
}
 
export default GuestsScreen;