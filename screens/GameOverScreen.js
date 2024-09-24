import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/title";
import Colors from "../Constant/Color";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

  const {width,height} = useWindowDimensions();

  let imageSize = 300;

  if(width<380){
    imageSize = 150;
  }
  if(height<400){
    imageSize = 80;

  }
  const imageStyle ={
    width:imageSize,
    height:imageSize,
    borderRadius: imageSize/2

  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.gameOverText}>
      <Title>Game is Over!</Title>
      <View style={[styles.imageContainer,imageStyle]}>
        <Image 
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number{" "}
        <Text style={styles.highlight}> {userNumber}.</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth =Dimensions.get('window').width

const styles = StyleSheet.create({
  gameOverText: {
    flex: 1,
    padding: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 :150,
    // width: deviceWidth < 380 ? 150 :300,
    // height: deviceWidth < 380 ? 150 :300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "oswald-light",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  highlight: {
    fontFamily: "oswald-bold",
    color: Colors.primary500,
  },
  screen:{
    flex: 1
  }
});
