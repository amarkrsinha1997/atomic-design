
// import { configure } from '@storybook/react';
import "antd/dist/antd.css";

// const req = require.context("../src/", true, /stories.js$/)
// const req = require.context('../src/components', true, /stories\.js$/);

// function loadStories() {
//   req.keys().forEach(filename => req(filename))
// }

// configure(loadStories, module);
import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'

import "antd/dist/antd.css"

const req = require.context('../src/', true, /stories.js$/)
console.log(req)
function loadStories() {
  req.keys().forEach(req)
}

setDefaults({
  inline: true,
})

addDecorator((story, context) => withInfo(context.kind)(story)(context))
configure(loadStories, module)