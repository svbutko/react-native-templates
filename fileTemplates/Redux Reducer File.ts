import {reducerWithInitialState} from "typescript-fsa-reducers";
import {Failure} from "typescript-fsa";

function actionStartedHandler(state: $State): $State {
    return newState(state, {error: null});
}

function actionDoneHandler(state: $State): $State {
    return newState(state, {error: null});
}

function actionFailedHandler(state: $State, failed: Failure<{}, Error>): $State {
    return newState(state, {error: failed.error.message});
}

export const $NAME = reducerWithInitialState($InitialState)
    .case(${Action}.action.started, actionStartedHandler)
    .case(${Action}.action.done, actionDoneHandler)
    .case(${Action}.action.failed, actionFailedHandler)
;