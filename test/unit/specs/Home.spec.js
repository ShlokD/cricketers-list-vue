import { mount } from 'avoriaz';
import Home from '@/components/Home';
import CricketerCard from '@/components/CricketerCard';
import CricketerInput from '@/components/CricketerInput';
import AppNavigation from '@/components/AppNavigation';

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Home);
  });

  describe('render', () => {
    it('should render navigation bar', () => {
      const appNavigation = wrapper.find(AppNavigation);
      expect(appNavigation.length).to.equal(1);
    });

    it('should render cricketer card', () => {
      const cricketerCard = wrapper.find(CricketerCard);
      expect(cricketerCard.length).to.equal(2);
    });

    it('should render cricketer input', () => {
      const cricketerInput = wrapper.find(CricketerInput);
      expect(cricketerInput.length).to.equal(1);
    });
  });

  describe('methods', () => {
    it('should add cricketer', () => {
      wrapper.vm.addCricketer({
        name: 'foo',
        team: 'bar',
        picture: 'baz'
      });
      expect(wrapper.data().cricketers).to.have.length(3);
    });
  });
});
