import { StyleSheet } from "react-native"
export default StyleSheet.create({
  passwordInputView: {
    alignSelf: "center",
  },
  passwordInputViewItem: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    margin: 5,
    width: 35,
    borderRadius: 35 / 2,
  },
  passwordInputViewItemActive: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    margin: 5,
    borderRadius: 35 / 2,
  },
  // KeyboardView
  keyboardView: {
    alignItems: "center",
    marginVertical: 15,
  },
  keyboardViewItem: {
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 75,
    margin: 15,
    borderRadius: 75 / 2,
  },
  keyboardViewItemText: {
    fontSize: 22,
    fontWeight: "900",
  },
})
