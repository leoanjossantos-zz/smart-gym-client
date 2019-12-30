import actionTypes from "./actionTypes";

export function selectMemberId(id) {
  return {
    type: actionTypes.SELECT_MEMBER_ID,
    payload: id
  };
}

export function clearMemberId() {
  return { type: actionTypes.CLEAR_MEMBER_ID };
}
