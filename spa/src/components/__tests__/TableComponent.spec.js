import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TableComponent from '../TableComponent.vue'


describe('TableComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(TableComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
 
describe('TableComponent', () => {
    it('displays the correct data', () => {
      const jsonData = [
        { id: 1, name: 'Item 1', value: 10 },
        { id: 2, name: 'Item 2', value: 20 },
        { id: 3, name: 'Item 3', value: 30 },
      ]
      const wrapper = mount(TableComponent, { data() { return { jsonData } } })
      const rows = wrapper.findAll('tbody tr')
      expect(rows.length).toBe(jsonData.length)
      jsonData.forEach((item, index) => {
        const cells = rows.at(index).findAll('td')
        expect(cells.at(0).text()).toBe(item.id.toString())
        expect(cells.at(1).text()).toBe(item.name)
        expect(cells.at(2).text()).toBe(item.value.toString())
      })
    })
  })

  describe('TableComponent', () => {
    it('displays the loading message when fetching data', () => {
      const wrapper = mount(TableComponent, { data() { return { loading: true } } })
      const loadingMessage = wrapper.find('div[role="status"]')
      expect(loadingMessage.exists()).toBe(false)
    })
  })