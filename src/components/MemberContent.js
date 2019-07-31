import React, { Component } from "react";
import { List, Input } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectMemberId } from "../state/actions/ui";

const { Search } = Input;

function PureMemberList(props) {
  return (
    <List
      size="small"
      bordered
      dataSource={props.memberList}
      renderItem={({ id, name }) => (
        <List.Item
          onClick={() => {
            props.history.push(`/Member/${id}`);
            props.selectMemberId(id);
          }}
        >{`${id} ${name}`}</List.Item>
      )}
    />
  );
}

const MemberList = withRouter(PureMemberList);

class MemberContent extends Component {
  state = {
    memberList: []
  };
  render() {
    return (
      <>
        <Search
          placeholder="input search text"
          onSearch={value => {
            console.log(value);
            const memberList = [
              { id: 12345, name: `Leandro Santos` },
              { id: 54321, name: `Leandro Santos ${value}` }
            ];
            this.setState({ memberList });
          }}
          enterButton
        />
        <MemberList
          memberList={this.state.memberList}
          selectMemberId={this.props.selectMemberId}
        />
      </>
    );
  }
}

export default connect(
  null,
  { selectMemberId }
)(MemberContent);
