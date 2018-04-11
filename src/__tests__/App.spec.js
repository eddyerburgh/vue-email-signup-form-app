import App from '../App.vue'
import { shallow } from '@vue/test-utils'
import AlternativeModal from '../components/AlternativeModal.vue'

test('hides AlternativeModal when AlternativeModal emits close-modal', () => {
  const wrapper = shallow(App)
  wrapper.find(AlternativeModal).vm.$emit('close-modal')
  expect(wrapper.find(AlternativeModal).exists()).toBeFalsy()
})
