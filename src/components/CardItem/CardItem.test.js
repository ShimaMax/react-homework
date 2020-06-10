import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardItem from './CardItem';
import {describe, expect, it} from '@jest/globals';

configure({ adapter: new Adapter() });

describe('<CardItem />', () => {
    it('renders without crashing', () => {
        const component = render(<CardItem />);
        expect(component).toMatchSnapshot();
    });
});
