import { View, Text, Pressable, StyleSheet, PressableProps } from "react-native"
import { ThemedText } from "./ThemedText"

interface Props extends PressableProps {
   children: string
}

const ThemedPressable = ({ children, ...rest }: Props) => {
   return (
      <Pressable style={styles.btnPrimary} {...rest}>
         <Text>{children}</Text>
      </Pressable>
   )
}
export default ThemedPressable

const styles = StyleSheet.create({
   btnPrimary: {
      backgroundColor: "white",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      margin: 10,
   },
})
