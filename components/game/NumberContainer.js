import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constant/Color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    //  fontWeight:'bold',
    fontFamily: "oswald-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
