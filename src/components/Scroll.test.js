
import React from "react"
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import Scroll from "./Scroll"

Enzyme.configure({adapter: new EnzymeAdapter})
test('render without crash', () => {
  const wraper = shallow(<Scroll children={<div />} />);
  const scrollComponent = wraper.find("[data-test='component-scroll']")
  expect(scrollComponent.length).toBe(1);
});

