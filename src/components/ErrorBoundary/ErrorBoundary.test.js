import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<ErrorBoundary />', () => {
    it('renders without crashing', () => {
        const component = shallow(<ErrorBoundary/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});
