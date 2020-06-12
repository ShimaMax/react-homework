import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<Header />', () => {
    it('renders without crashing', () => {
        const onSearch = jest.fn();
        const component = shallow(<Header onSearch={onSearch}/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});
