import {createSelector} from "reselect";
import {Dispatch} from "react-redux";

export const $NAME = {
    mapStateToProps: createSelector<IAppState, string | null, IReduxProps<$StateProps, {}>>(
        state => state.authState.error,
        (error) => ({
            stateProps: {
                error,
            }
        })
    ),

    mapDispatchToProps(dispatch: Dispatch<IAppState>): IReduxProps<{}, $DispatchProps> {
        return {
            dispatchProps: {
                navigateToPage: (pageName: string): void => {
                    dispatch(Navigation.Actions.navigateToPage(pageName));
                },
            }
        };
    }
};