import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
    it('renders without crashing', () => {
        const component = shallow(<App/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});
