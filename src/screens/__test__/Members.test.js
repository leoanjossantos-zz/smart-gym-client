import { shallow } from "../../enzyme";
import React from "react";
import Member from "../Members";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import LateralMenu from "../../components/LateralMenu";
import MemberLayout from "../../components/MemberLayout";

describe("Member screen", () => {
  const comp = shallow(<Member />);
  const layout = comp.find(Layout);

  it("has a lateral menu", () => {
    expect(layout.childAt(0).type()).toEqual(LateralMenu);
  });
  it("has member layout", () => {
    expect(layout.childAt(1).type()).toEqual(MemberLayout);
  });
});
