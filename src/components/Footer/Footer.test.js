import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const component = shallow(<Footer />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
