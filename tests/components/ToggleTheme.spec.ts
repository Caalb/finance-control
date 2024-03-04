import {
  it,
  expect,
  describe,
  beforeEach,
} from 'vitest'

import { mount } from "@vue/test-utils";
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

import { ToggleTheme } from "#components";

const createComponent = () => {
  return mount(ToggleTheme, {});
}

mockNuxtImport('useColorMode', () => {
  return () => ({ value: 'light'})
})

describe('ToggleTheme', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = createComponent();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
