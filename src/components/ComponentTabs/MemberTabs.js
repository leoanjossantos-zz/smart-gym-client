import React, { Component } from "react";
import { Tabs } from "antd";
import ActivitiesTab from "./ActivitiesTab";
import ExamesTab from "./ExamesTab";
import PaymentTab from "./PaymentTab";
import VacantionTab from "./VacantionTab";

const { TabPane } = Tabs;

class MemberTabs extends Component {
  render() {
    return (
      <Tabs type="card">
        <TabPane tab="Atividades" key="1">
          <ActivitiesTab />
        </TabPane>
        <TabPane tab="Exames" key="2">
          <ExamesTab />
        </TabPane>
        <TabPane tab="Pagamentos" key="3">
          <PaymentTab />
        </TabPane>
        <TabPane tab="Férias" key="4">
          <VacantionTab />
        </TabPane>
      </Tabs>
    );
  }
}

export default MemberTabs;
