import { shallow } from "../../../enzyme";
import React from "react";
import MemberLayout from "../MemberLayout";
import { Layout } from "antd";

describe("Member Layout", () => {
  it("has Header", () => {
    const comp = shallow(<MemberLayout />);
    const header = comp.find(Layout).childAt(0);
    expect(header.type()).toEqual(Layout.Header);
    expect(header.render().text()).toEqual("Pesquisar Aluno");
  });
});
