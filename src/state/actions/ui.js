import actionTypes from "./actionTypes";

export function selectMemberId(id) {
  return {
    type: actionTypes.SELECT_MEMBER_ID,
    payload: id
  };
}

