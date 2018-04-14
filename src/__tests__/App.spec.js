import App from '../App.vue'
import { shallow } from '@vue/test-utils'
import Modal from '../components/Modal.vue'

test('hides Modal when Modal emits close-modal', () => {
  const wrapper = shallow(App) // #A
  wrapper.find(Modal).vm.$emit('close-modal') // #B
  expect(wrapper.find(Modal).exists()).toBeFalsy()
})
