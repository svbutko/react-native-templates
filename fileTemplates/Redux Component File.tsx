import * as React from "react";
import {View, ViewStyle} from "react-native";
import {NavigationScreenOptions} from "react-navigation";
import {connect} from "react-redux";

export interface IStateProps {
    error: string | null;
}

export interface IDispatchProps {

}


interface IProps {

}

interface IState {

}

@connect(${Selector}.mapStateToProps, ${Selector}.mapDispatchToProps)
export class $NAME extends BaseReduxComponent<IProps, IStateProps, IDispatchProps, IState> {
    static navigationOptions: NavigationScreenOptions = {};

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
    
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1
    } as ViewStyle,
});