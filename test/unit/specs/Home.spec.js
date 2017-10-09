import { mount } from 'avoriaz';
import Home from '@/components/Home';
import CricketerCard from '@/components/CricketerCard';
import CricketerInput from '@/components/CricketerInput';

describe('Home.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Home);
  });

  describe('render', () => {
    it('should set title', () => {
      const title = wrapper.find('.title')[0];
      expect(title.text()).to.contain('All Cricketers');
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
