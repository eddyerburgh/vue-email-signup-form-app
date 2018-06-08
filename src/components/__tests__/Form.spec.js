import Form from '../Form.vue'
import { shallowMount } from '@vue/test-utils'

describe('Form.vue', () => {
  test('emits form-submitted when form is submmited', () => {
    const wrapper = shallowMount(Form, {
      mocks: { axios: { post: jest.fn() } }
    })
    wrapper.find('button').trigger('submit') // #A
    expect(wrapper.emitted('form-submitted')).toHaveLength(1) // #B
  })

  test('sends post request with email on submit', () => {
    const axios = { // #A
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, { // #B
      mocks: {
        axios
      }
    })
    const input = wrapper.find('input[type="email"]') // #C
    input.element.value = 'email@gmail.com' // #D
    input.trigger('input') // #E
    wrapper.find('button').trigger('submit') // #F
    const url = 'http://demo7437963.mockable.io/validate'
    const expectedData = expect.objectContaining({
      email: 'email@gmail.com'
    })
    expect(axios.post).toHaveBeenCalledWith(url, expectedData) // #G
  })

  test('sends post request with the shouldContact tickbox on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, { // #A
      mocks: {
        axios
      }
    })
    const url = 'http://demo7437963.mockable.io/validate'

    wrapper.find('button').trigger('submit') // #B

    expect(axios.post).toHaveBeenCalledWith(url, expect.objectContaining({
      enterCompetition: true
    }))

    const noRadiobox = wrapper.find('input[value="no"]') // #D
    noRadiobox.checked = true // #E
    noRadiobox.trigger('change') // #F
    wrapper.find('button').trigger('submit') // #G

    expect(axios.post).toHaveBeenCalledWith(url, expect.objectContaining({
      enterCompetition: true
    }))
  })
})
