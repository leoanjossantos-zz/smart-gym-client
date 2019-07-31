import actionTypes from "../actions/actionTypes";
const initialState = {
  entities: {
    members: [
      {
        id: 12345,
        name: `Leandro Santos1`,
        cpf: "078.887.899-54",
        identity: "0999-3322",
        address: "Address1",
        planType: "monthly"
      },
      {
        id: 54321,
        name: `Leandro Santos2`,
        cpf: "078.887.899-99",
        identity: "0000-0000",
        address: "Address2",
        planType: "yearly"
      }
    ]
  },
  ui: {}
};

export function rootReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case actionTypes.NEW_MEMBER:
      newState.entities.members.push(action.payload);
      return newState;
    case actionTypes.SELECT_MEMBER_ID:
      newState.ui.currentMemberId = action.payload;
      return newState;
    case actionTypes.UPDATE_MEMBER:
      console.log("update");
      let ids = newState.ui.currentMemberId;
      let members = newState.entities.members;
      let currentMember = members.find(ele => ele.id === ids);

      members = members.filter(ele => ele.id === ids);

      currentMember = { ...currentMember, ...action.payload };
      members.push(currentMember);

      newState.entities.members = members;

      return newState;
    default:
      return state;
  }
}

/**
const action = {
    type: 'free format',
    payload: 'free format'
}
 */
