import React from "react"
import renderer from "react-test-renderer"
import {StaticQuery} from "gatsby"
import Index from "../index"

import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new EnzymeAdapter()})

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({render}) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

// describe("Index", () =>
//   it("renders correctly", () => {
//     const tree = renderer.create(<Index />).toJSON()
//     expect(tree).toMatchSnapshot()
//   }))
test('render without error', () => {
  const wraper = shallow(<Index />);
  const IndexComp = wraper.find("[data-test='comp-index-page']");
  expect(IndexComp.length).toBe(1);
})
test('render skillsTour button', () => {
  const wraper = shallow(<Index />);
  const IndexComp = wraper.find("[data-test='skills-tour-button']");
  expect(IndexComp.length).toBe(1);
})




