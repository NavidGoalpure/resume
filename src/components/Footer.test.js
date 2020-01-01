import React from "react"
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import Footer from "./Footer"

Enzyme.configure({adapter: new EnzymeAdapter})
test('render without crash', () => {
  const wraper = shallow(<Footer />);
  expect(wraper).toBeTruthy();
});

