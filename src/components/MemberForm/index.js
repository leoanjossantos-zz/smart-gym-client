import { connect } from "react-redux";
import { updateMember } from "../../state/actions/members";
import { Form } from "antd";
import MemberForm from "./MemberForm";
import { withRouter } from "react-router-dom";
const routedMemberForm = withRouter(MemberForm);

const antdFormDecorator = Form.create({
  name: "member",
  mapPropsToFields(props) {
    let result = {};
    const fields = ["cpf", "name", "address", "identity", "planType"];
    fields.forEach(
      ele =>
        (result[ele] = Form.createFormField({
          value: props.editingFields[ele]
        }))
    );
    return result;
  }
});

const formMember = antdFormDecorator(routedMemberForm);

const mapStateToProps = ({ app }) => {
  return {
    editingFields: app.entities.members.find(
      member => (member.id = app.ui.currentMemberId)
    )
  };
};

export default connect(
  mapStateToProps,
  { updateMember }
)(formMember);
