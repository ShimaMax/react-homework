import React from 'react';
import {shallow} from 'enzyme';
import MoviePage from './MoviePage';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<MoviePage />', () => {
    it('renders without crashing', () => {
        const component = shallow(<MoviePage/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});
