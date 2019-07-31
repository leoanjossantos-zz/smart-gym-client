import actionTypes from "./actionTypes";

export function addMember(newMemberData) {
  return {
    type: actionTypes.NEW_MEMBER,
    payload: newMemberData
  };
}

export function updateMember(newMemberData) {
  return {
    type: actionTypes.UPDATE_MEMBER,
    payload: newMemberData
  };
}
