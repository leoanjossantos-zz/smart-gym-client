import { connect } from "react-redux";
import { updateMember, addMember } from "../../state/actions/members";
import { Form } from "antd";
import MemberForm from "./MemberForm";
import { withRouter } from "react-router-dom";
const routedMemberForm = withRouter(MemberForm);

const antdFormDecorator = Form.create({
  name: "member",
  mapPropsToFields(props) {
    let result = {};
    const fields = ["cpf", "name", "address", "identity", "paymentPlan"];
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
  if (app.ui.currentMemberId) {
    return {
      editingFields: app.entities.members.find(
        member => (member.id = app.ui.currentMemberId)
      ),
      mode: "editingMode"
    };
  }
  return {
    editingFields: {},
    mode: "creatingMode"
  };
};

export default connect(mapStateToProps, { updateMember, addMember }) (formMember);
