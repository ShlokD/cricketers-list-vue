import { mount } from 'avoriaz';
import CricketerCard from '@/components/CricketerCard';


describe('Cricketer Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CricketerCard, { propsData: { cricketer: { name: 'foo', team: 'bar', picture: 'baz' } }, index: 0 });
  });

  describe('render', () => {
    it('should render picture', () => {
      const image = wrapper.find('img')[0];
      expect(image.getAttribute('src')).to.equal('baz');
    });

    it('should render cricketer name', () => {
      const name = wrapper.find('.cricketer-name')[0];
      expect(name.text()).to.equal('foo');
    });

    it('should render cricketer team', () => {
      const name = wrapper.find('.cricketer-team')[0];
      expect(name.text()).to.equal('bar');
    });
  });
});
