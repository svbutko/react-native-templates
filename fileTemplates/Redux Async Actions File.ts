import {Dispatch} from "react-redux";

export class $NAME {
    static asyncAction(params: Object): SimpleThunk {
        return async function (dispatch: Dispatch<IAppState>): Promise<void> {
            try {
                dispatch(SomeAction.action.started(params));
                const response = "here goes your request";
                dispatch(SomeAction.action.done({params: params, result: response}));
            } catch (error) {
                dispatch(SomeAction.action.failed({params: params, error: error}));
            }
        };
    }
}