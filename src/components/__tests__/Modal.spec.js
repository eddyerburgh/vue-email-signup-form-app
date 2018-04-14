import Modal from '../../../src/components/Modal.vue'
import { shallow } from '@vue/test-utils'

describe('Modal.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallow(Modal, {
      slots: {
        default: '<span />'
      }
    })
    expect(wrapper.find('span').exists()).toBeTruthy() // #B
  })

  test('emits on-close when button is clicked', () => {
    const wrapper = shallow(Modal)
    wrapper.find('button').trigger('click') // #A
    expect(wrapper.emitted('close-modal')).toHaveLength(1) // #B
  })
})
