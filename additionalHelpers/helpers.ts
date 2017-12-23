import {ThunkAction} from "redux-thunk";
import {StyleSheet} from "react-native";
import {actionCreatorFactory} from "typescript-fsa";
import * as React from "react";
import {Persistor, persistStore} from "redux-persist";

//Thunk helpers where IAppState is your main redux state
export type SimpleThunk = ThunkAction<void, IAppState, Error>;
export type SimpleAsyncThunk = ThunkAction<Promise<void>, IAppState, Error>;

//Stylesheet creator function which simplifies the styles constant initialization look cleaner
export function styleSheetCreate<T>(styles: T): T {
    return StyleSheet.create(styles as any) as any;
}

export abstract class BaseComponent<TP, TS> extends React.Component<TP, TS> {
    state: TS;
    props: TP;

    constructor(props?: TP) {
        super(props);
    }
}

export abstract class BaseReduxComponent<TP, TSP, TDP, TS = {}> extends BaseComponent<TP, TS> {
    constructor(props: TP) {
        super(props);
    }

    get dispatchProps(): TDP {
        return (this.props as any).dispatchProps;
    }

    get stateProps(): TSP {
        return (this.props as any).stateProps;
    }
}

export interface IReduxProps<TStateProps, TDispatchProps> {
    readonly stateProps?: TStateProps;
    readonly dispatchProps?: TDispatchProps;
}

export const actionCreator = actionCreatorFactory();
