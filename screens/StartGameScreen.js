import { TextInput, Button, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../Constant/Color";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

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
  return (
    <View style={styles.titleContainer}>
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
            <PrimaryButton onPress={confirmInpurHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    titleContainer:{
     flex:1,
     marginTop:100,
     alignItems:'center'
    },  
  textInput: {
    height: 50,
    fontSize: 28,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    // fontWeight: "bold",
    fontFamily:'oswald-light',
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
