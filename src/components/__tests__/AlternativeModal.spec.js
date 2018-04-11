import AlternativeModal from '../../../src/components/AlternativeModal.vue'
import { mount } from '@vue/test-utils'

test('disaptches on-close when button is clicked', () => {
  const wrapper = mount(AlternativeModal, {
    propsData: {
      visible: true
    }
  })
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted('close-modal')).toBeTruthy()
})
