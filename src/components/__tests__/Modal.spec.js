import Modal from '../../../src/components/Modal.vue'
import { mount } from '@vue/test-utils'

test('does not render when not passed visible prop', () => {
  const wrapper = mount(Modal)
  expect(wrapper.isEmpty()).toBe(true)
})

test('renders when passed visible prop as true', () => {
  const wrapper = mount(Modal, {
    propsData: {
      visible: true
    }
  })
  expect(wrapper.isEmpty()).toBe(false)
})

test('calls onClose when button is clicked', () => {
  const onClose = jest.fn()
  const wrapper = mount(Modal, {
    propsData: {
      visible: true,
      onClose
    }
  })
  wrapper.find('button').trigger('click')
  expect(onClose).toHaveBeenCalled()
})

test('renders correctly', () => {
  const wrapper = mount(Modal, {
    propsData: {
      visible: true
    },
    slots: {
      default: '<p>some content</p>'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
