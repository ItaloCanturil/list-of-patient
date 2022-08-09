import { shallowMount } from '@vue/test-utils';
import Table from '@/components/Table.vue';

describe('Table props', () => {
  it('Renders if table is true', () => {
    const wrapper = shallowMount(Table);
    expect(wrapper.is(Table)).toBe(true);
  });
});
