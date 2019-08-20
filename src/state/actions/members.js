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
  return dispatch => {
    axios.post(membersBaseURL, newMemberData).then(response =>
      dispatch({
        type: actionTypes.NEW_MEMBER,
        payload: newMemberData
      })
    );
  };
}

export function updateMember(newMemberData) {
  return {
    type: actionTypes.UPDATE_MEMBER,
    payload: newMemberData
  };
}
