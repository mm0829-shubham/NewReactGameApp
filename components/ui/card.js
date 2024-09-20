import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../Constant/Color";



function Card({children}) {
    return     (
    <View style={styles.card}>
       {children}
       </View>
    )  
}

export default Card;

const deviceWidth =  Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginTop: deviceWidth<380 ? 18 :36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary700,
        borderRadius: 6,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center",
      }, 
})