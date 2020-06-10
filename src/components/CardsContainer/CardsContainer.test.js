import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardsContainer from './CardsContainer';
import {describe, expect, it} from '@jest/globals';

configure({ adapter: new Adapter() });

describe('<CardsContainer />', () => {
    it('renders without crashing', () => {
        const component = render(<CardsContainer filter={{type: 0, string: ''}} sortType={0} />);
        expect(component).toMatchSnapshot();
    });
});
