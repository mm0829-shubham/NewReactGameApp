import { StyleSheet, Text, View } from "react-native"
import Colors from "../../Constant/Color";



function InstructionText({children ,style}) {
    return     (
        <View >

            <Text style={[styles.instruction,style]}>{children}</Text>
        </View>
    )    
}


export default InstructionText;

const styles = StyleSheet.create({
    instruction:{
        fontFamily:'oswald-light',
        color:Colors.accent500,
        fontSize:24,
        
      }
})