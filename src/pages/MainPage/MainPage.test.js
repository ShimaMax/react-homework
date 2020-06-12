import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<MainPage />', () => {
    it('renders without crashing', () => {
        const component = shallow(<MainPage/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});
