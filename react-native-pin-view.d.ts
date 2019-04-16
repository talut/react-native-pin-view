// Type definitions for react-native-pin-view 2.1.2
// Project: https://github.com/talut/react-native-pin-view
// Definitions by: Talut TASGIRAN <https://github.com/talut>
// TypeScript Version: 2.8
declare module "react-native-pin-view" {
    import React from 'react';
    interface PinViewProps {
        pinLength?: number,
        showInputs?: boolean,
        inputTextStyle?: object,
        buttonTextColor?: string,
        returnType?: string,
        buttonBgColor?: string,
        inputBgColor?: string,
        onComplete: () => void,
        disabled?: boolean,
        inputActiveBgColor?: string,
        inputBgOpacity?: number,
        deleteText?: string
    }

    const PinView: (props: PinViewProps) => React.Component<PinViewProps>;
    export default PinView;
}