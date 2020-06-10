import React from 'react';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggler from './Toggler';
import {describe, expect, it} from '@jest/globals';
import Search from '../Search/Search';

configure({ adapter: new Adapter() });

describe('<Toggler />', () => {
    it('renders without crashing', () => {
        const component = render(<Toggler title="test title" tabs={['tab1', 'tab2']} />);
        expect(component).toMatchSnapshot();
    });

    it('right tab index', () => {
        const onChange = jest.fn()

        const component = mount(<Toggler title="test title" tabs={['tab1', 'tab2']} onChange={onChange} />);

        component.find('#test_toggler_tab_1').simulate('change', { target: {value: 'match string'} });
        component.find('#test_toggler_tab_1').simulate('click');
        expect(onChange).toHaveBeenCalledWith(1);
    });
});
