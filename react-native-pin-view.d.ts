// Type definitions for react-native-pin-view 2.1.2
// Project: https://github.com/talut/react-native-pin-view
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 2.8
declare module "react-native-pin-view" {
    import React from "react"
    import { ViewStyle, TextStyle } from "react-native"

    type onCompleteCallback = (value: string, clear: () => void) => void
    type onPressCallback = (value: string, pressed: boolean, clear: () => void) => void
    type onCustomButtonPress = () => void

    interface PinViewProps {
        pinLength: number
        showInputs?: boolean
        inputTextStyle?: TextStyle
        buttonTextColor?: string
        returnType?: string
        buttonBgColor?: string
        inputBgColor?: string
        onComplete: onCompleteCallback
        onPress?: onPressCallback
        disabled?: boolean
        inputActiveBgColor?: string
        inputBgOpacity?: number
        deleteText?: any
        customButtonText?: any
        onCustomButtonPress?: onCustomButtonPress,
        buttonDeletePosition?: string
        buttonDeleteStyle?: ViewStyle
        delayBeforeOnComplete?: number
        inputViewStyle?: ViewStyle
        keyboardViewStyle?: ViewStyle
        keyboardViewTextStyle?: TextStyle
        keyboardContainerStyle?: ViewStyle
    }

    const PinView: React.FunctionComponent<PinViewProps>
    export default PinView
}
