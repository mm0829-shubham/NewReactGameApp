import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/title";
import Colors from "../Constant/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.gameOverText}>
      <Title>Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed 
        <Text style={styles.highlight}> {roundsNumber} </Text>
         rounds to guess the number{' '}
        <Text style={styles.highlight}> {userNumber}.</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        Start New game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverText: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily:'oswald-light',
    fontSize:24,
    textAlign:'center',
    marginVertical:20
  },
  highlight:{
    fontFamily:'oswald-bold',
    color:Colors.primary500
  }
});
