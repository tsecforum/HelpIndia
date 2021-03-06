import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Card from './Card';
const DonationsCard = props => {
    const {id, event, ngo, amount} = props;
    // dummy data
    // const title = "Provide a nutritional care package to HIV";
    // const org = "Isha Foundation";
    // let price = "1000"
    // price = "₹" + price;
    
    return (
       <Card style={styles.container}>
           <View style={styles.details}>
               <View style={styles.titleContainer}>
               <Text numberOfLines={2} style={styles.title}>{event}</Text>
               <Text style={styles.org}>{ngo}</Text>
               </View>
               <View style={styles.priceContainer}>
               <Text style={styles.price}>₹{amount}</Text>
               </View>
           </View>
       </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        marginVertical: 10,

    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
    priceContainer: {
        padding: 10
    },
    title: {
        flex: 1,
        fontSize: 18,
        flexWrap: 'wrap',

    },
    org: {
        fontSize: 14,
        color: "#888"

    },
    price: {
        fontSize: 16,
        color: "red"
    }
});
export default DonationsCard;