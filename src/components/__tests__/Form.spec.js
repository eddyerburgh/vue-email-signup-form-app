import { shallow } from '@vue/test-utils'
import Form from '../Form.vue'

describe('Form.vue', () => {
  test('emits form-submitted when form is submmited', () => {
    const wrapper = shallow(Form, {
      mocks: { axios: { post: jest.fn() } }
    })
    wrapper.find('button').trigger('submit') // #A
    expect(wrapper.emitted('form-submitted')).toHaveLength(1) // #B
  })

  test('sends post request with email on submit', () => {
    const axios = { // #
      post: jest.fn()
    }
    const wrapper = shallow(Form, { // #B
      mocks: {
        axios
      }
    })
    const input = wrapper.find('input[type="email"]') // #C
    input.element.value = 'email@gmail.com' // #D
    input.trigger('input') // #E
    wrapper.find('button').trigger('submit') // #F
    const url = 'http://demo7437963.mockable.io/validate'
    expect(axios.post.mock.calls[0][0]).toBe(url) // #G
    expect(axios.post.mock.calls[0][1].email).toBe('email@gmail.com') // #G
  })

  test('sends post request with the shouldContact tickbox on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallow(Form, { // #A
      mocks: {
        axios
      }
    })
    const url = 'http://demo7437963.mockable.io/validate'
    wrapper.find('button').trigger('submit') // #B

    expect(axios.post.mock.calls[0][0]).toBe(url)
    expect(axios.post.mock.calls[0][1].enterCompetition).toBe(true) // #C

    const noRadiobox = wrapper.find('input[value="no"]') // #D
    noRadiobox.checked = true // #E
    noRadiobox.trigger('change') // #F
    wrapper.find('button').trigger('submit') // #G

    expect(axios.post.mock.calls[1][0]).toBe(url)
    expect(axios.post.mock.calls[1][1].enterCompetition).toBe(false) // #H
  })
})
