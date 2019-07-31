import React, { Component } from "react";
import { Form, Radio, Input, Button, Tabs } from "antd";
import ActivitiesTab from "../ComponentTabs/ActivitiesTab";
import ExamesTab from "../ComponentTabs/ExamesTab";
import PaymentTab from "../ComponentTabs/PaymentTab";
import VacationTab from "../ComponentTabs/VacantionTab";
import MemberTabs from "../ComponentTabs/MemberTabs";

const { TabPane } = Tabs;
const { Item } = Form;

class MemberForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.updateMember(values);
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
          {getFieldDecorator("planType", {
            rules: [{ required: true, message: "Campo obrigatório." }]
          })(
            <Radio.Group>
              <Radio value="yearly">Anual</Radio>
              <Radio value="monthly">Mensal</Radio>
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
