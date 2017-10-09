import { mount } from 'avoriaz';
import CricketerInput from '@/components/CricketerInput';


describe('Cricketer Card', () => {
  let wrapper;
  let onAddCricketerSpy;

  beforeEach(() => {
    wrapper = mount(CricketerInput);
    onAddCricketerSpy = sinon.spy(wrapper.vm, '$emit');
  });

  describe('render', () => {
    it('should render input tag', () => {
      const input = wrapper.find('input');
      expect(input.length).to.equal(2);
    });

    it('should render select tag', () => {
      const select = wrapper.find('select');
      expect(select.length).to.equal(1);
    });

    it('should render countries', () => {
      const option = wrapper.find('option');
      expect(option.length).to.equal(9);
    });

    it('should render button', () => {
      const button = wrapper.find('button');
      expect(button.length).to.equal(1);
    });
  });

  describe('methods', () => {
    it('should add cricketer', () => {
      wrapper.vm.onAddCricketer();
      expect(onAddCricketerSpy.callCount).to.equal(1);
    });
  });
});
