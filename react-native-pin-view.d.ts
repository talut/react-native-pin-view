// Type definitions for react-native-pin-view 2.1.2
// Project: https://github.com/talut/react-native-pin-view
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 2.8
declare module "react-native-pin-view" {
    import React from 'react';

    type onCompleteCallback = (value: string, clear: () => void) => void;
    type onPressCallback = (value: string, pressed: boolean, clear: () => void) => void;

    interface PinViewProps {
        pinLength?: number,
        showInputs?: boolean,
        inputTextStyle?: object,
        buttonTextColor?: string,
        returnType?: string,
        buttonBgColor?: string,
        inputBgColor?: string,
        onComplete: onCompleteCallback,
        onPress: onPressCallback,
        disabled?: boolean,
        inputActiveBgColor?: string,
        inputBgOpacity?: number,
        deleteText?: string
    }

    const PinView: React.FunctionComponent<PinViewProps>;
    export default PinView;
}
