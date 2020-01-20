// Type definitions for react-native-pin-view v3.0.0
// Project: https://github.com/talut/react-native-pin-view
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 2.8
declare module "react-native-pin-view" {
    // @ts-ignore
    import React from "react"
    // @ts-ignore
    import { ViewStyle, TextStyle } from "react-native"

    type onCompleteCallback = (value: string, clear: () => void) => void
    type onPressCallback = (key: string) => void

    export interface PinViewProps {
        onComplete: onCompleteCallback
        pinLength: number,
        inputSize?: number
        activeOpacity?: number
        buttonSize?: number

        style ?: ViewStyle
        inputAreaStyle?: ViewStyle
        inputViewStyle?: ViewStyle
        inputViewEmptyStyle?: ViewStyle
        customRightButtonViewStyle?: ViewStyle
        customLeftButtonViewStyle?: ViewStyle
        buttonViewStyle?: ViewStyle
        buttonAreaStyle ?: ViewStyle
        inputViewFilledStyle?: ViewStyle

        onButtonPress?: onPressCallback

        inputTextStyle?: TextStyle
        buttonTextStyle?: TextStyle

        leftAccessibilityLabel?:string,
        rightAccessibilityLabel?:string,

        leftButtonDisabled?: boolean
        rightButtonDisabled?: boolean
        disabled?: boolean
        showInputText?: boolean
        accessible?: boolean

        buttonTextByKey ?: object,

        leftCustomButton?: any
        rightCustomButton?: any
    }

    const PinView: React.FunctionComponent<PinViewProps>
    export default PinView
}
