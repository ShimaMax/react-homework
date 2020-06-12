import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggler from './Toggler';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<Toggler />', () => {
    it('renders without crashing', () => {
        const component = shallow(<Toggler title="test title" tabs={['tab1', 'tab2']} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('right tab index', () => {
        const onChange = jest.fn()

        const component = mount(<Toggler title="test title" tabs={['tab1', 'tab2']} onChange={onChange} />);

        component.find('#test_toggler_tab_1').simulate('change', { target: {value: 'match string'} });
        component.find('#test_toggler_tab_1').simulate('click');
        expect(onChange).toHaveBeenCalledWith(1);
    });
});
