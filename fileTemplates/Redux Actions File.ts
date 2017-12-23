export class $NAME {
    static action = actionCreator.async<string, string, Error>("$Type/ACTION");
    static simpleAction = actionCreator("$Type/SIMPLE_ACTION");
}