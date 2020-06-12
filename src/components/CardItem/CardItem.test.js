import React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<CardItem />', () => {
    it('renders without crashing', () => {
        const component = shallow(<CardItem />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
