import React, { Component } from "react";
import { List, Input, Button } from "antd";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectMemberId, clearMemberId } from "../state/actions/ui";

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

class MembersContent extends Component {
  state = {
    memberList: []
  };
  componentDidMount() {
    this.props.clearMemberId();
  }
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
        <Button type="primary" htmlType="button">
          <Link to="/newMember">Novo Aluno</Link>
        </Button>
      </>
    );
  }
}

export default connect(
  null,
  { selectMemberId, clearMemberId }
)(MembersContent);
