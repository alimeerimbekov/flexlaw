import {createSelector} from "@reduxjs/toolkit";

export const userSelector = createSelector(store => store.persistedReducer.user, item => item)
// export const findUserSelector = createSelector(store => store.persistedReducer.findUsers, item => item)
// export const notificationSelector = createSelector(store => store.persistedReducer.notification, item => item)
// export const myFriendsSelector = createSelector(store => store.persistedReducer.myFriends, item => item)
export const lawsSelector = createSelector(store => store.persistedReducer.laws, item => item)
export const myLawsSelector = createSelector(store => store.persistedReducer.myLaws, item => item)
