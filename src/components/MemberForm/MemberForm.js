import React, { Component } from "react";
import { Form, Radio, Input, Button, Tabs } from "antd";
import MemberTabs from "../ComponentTabs/MemberTabs";

const { TabPane } = Tabs;
const { Item } = Form;

class MemberForm extends Component {
  saveOrUpdate = values => {
    if (this.props.mode === "creatingMode") {
      this.props.addMember(values);
    } else {
      this.props.updateMember(values);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.saveOrUpdate(values);
        this.props.history.push("/");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const fields = [
      { label: "Nome", name: "name" },
      { label: "CPF", name: "cpf" },
      { label: "Identidade", name: "identity" },
      { label: "Address", name: "address" }
    ];
    return (
      <Form onSubmit={this.handleSubmit}>
        {fields.map(({ label, name }, i) => (
          <Item label={label} key={i}>
            {getFieldDecorator(name, {
              rules: [
                {
                  required: true,
                  message: "Campo obrigatório."
                }
              ]
            })(<Input placeholder="Preencha o campo." />)}
          </Item>
        ))}
        <Item label="Tipo de Plano">
          {getFieldDecorator("paymentPlan", {
            rules: [{ required: true, message: "Campo obrigatório." }]
          })(
            <Radio.Group>
              <Radio value="YEARLY">Anual</Radio>
              <Radio value="MONTHLY">Mensal</Radio>
            </Radio.Group>
          )}
        </Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <MemberTabs />
      </Form>
    );
  }
}

export default MemberForm;
