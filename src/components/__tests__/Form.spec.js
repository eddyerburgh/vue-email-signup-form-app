import { shallow } from '@vue/test-utils'
import Form from '../Form.vue'

describe('Form', () => {
  test('calls httpCall with email on submit', () => {
    const $httpCall = jest.fn()
    const wrapper = shallow(Form, {
      mocks: {
        $httpCall
      }
    })
    const input = wrapper.find('input[type="email"]')
    input.element.value = 'some val'
    input.trigger('input')
    wrapper.find('button').trigger('submit')
    expect($httpCall).toHaveBeenCalledWith('some val')
  })
})
