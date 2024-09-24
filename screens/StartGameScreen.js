import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../Constant/Color";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputhandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputhandler() {
    setEnteredNumber("");
  }

  function confirmInpurHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // show alert
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputhandler },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.titleContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess my Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputhandler}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonFlexContainer}>
              <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonFlexContainer}>
              <PrimaryButton onPress={confirmInpurHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    //  marginTop:deviceHeight <380 ? 30 : 100,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    fontSize: 28,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    // fontWeight: "bold",
    fontFamily: "oswald-light",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonFlexContainer: {
    flex: 1,
  },
});
