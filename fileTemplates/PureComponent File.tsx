import React, {PureComponent} from "react";
import {Text, TextStyle, View, ViewStyle} from "react-native";

interface IProps {

}

interface IState {
}

export class $NAME$ extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{"Some text"}</Text>
            </View>
        );
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1,
        backgroundColor: "white",
    } as ViewStyle,
    title: {
        fontFamily: FontNames.regular,
        fontSize: 16,
        color: Colors.primaryText,
        backgroundColor: Colors.transparent,
    } as TextStyle,
});
