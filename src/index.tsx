import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { Button } from "../packages/Button/lib/button.js";

const args = {
  backgroundColor: null,
  primary: true,
  size: 'medium',
  onClick: undefined,
  label: 'Click me!!!'
}

ReactDOM.render(
  <Button {...args} />,
  document.getElementById('root')
);