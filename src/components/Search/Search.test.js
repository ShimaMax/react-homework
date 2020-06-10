import React from 'react';
import { configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import {describe, expect, it} from '@jest/globals';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
    it('renders without crashing', () => {
        const component = render(<Search />);
        expect(component).toMatchSnapshot();
    });

    it('generate right filter', () => {
        const onSearch = jest.fn()

        const component = mount(<Search onSearch={onSearch} />);

        // const val = component.find('#test_search_input').prop('value');
        // console.log(val);
        expect(component.find('#test_search_input').prop('value')).toEqual('');

        component.find('#test_search_input').simulate('change', { target: {value: 'match string'} });
        component.find('#test_search_button').simulate('click');
        expect(onSearch).toHaveBeenCalledWith({type: 0, string: 'match string'});
    });
});
