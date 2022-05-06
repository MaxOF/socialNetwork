import  {ComponentType} from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

import {compose} from "redux";

import {initialStateMessagesType} from "../../../redux/messagesReducer/types";
import {AppStateType} from "../../../redux/store";
import {getMessagesPageSelector} from "../../../selectors/selectors";
import {withAuthRedirect} from "../../../utils/hoc/WithAuthRedirect";
import {MessageActions} from "../../../redux/messagesReducer/actions/actions";


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: getMessagesPageSelector(state)
    }
}

const DialogsContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        addMessage: MessageActions.addMessage
    }), withAuthRedirect
)(Dialogs)

export default DialogsContainer

//types===================
type MapStateToPropsType = {
    messagesPage: initialStateMessagesType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
