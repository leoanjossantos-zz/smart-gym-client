import actionTypes from "./actionTypes";
import axios from "axios";

const membersBaseURL = process.env.REACT_APP_BACKEND_URL + "/gymMembers";
// {
//   "name": "Leandro Test",
//   "cpf": "094.333.444-56",
//   "identity": "RG-232321",
//   "address": "Rua, address, 777",
//   "paymentPlan": null
// }
// {name: "Test", cpf: "0000000000000", identity: "te00000000", address: "Address asdf", planType: "monthly"}
export function addMember(newMemberData) {
  return function(dispatch) {
    axios.post(membersBaseURL, newMemberData).then(newMemberCallBack(newMemberData, dispatch));
  };
}

function newMemberCallBack(newMemberData, dispatch) {
  return function (response) {
    let action = {
      type: actionTypes.NEW_MEMBER,
      payload: response
    };
    dispatch(action);
  };
}

export function updateMember(newMemberData) {
  return {
    type: actionTypes.UPDATE_MEMBER,
    payload: newMemberData
  };
}
