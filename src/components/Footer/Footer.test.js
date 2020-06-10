import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import {describe, expect, it} from '@jest/globals';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const component = render(<Footer />);
        expect(component).toMatchSnapshot();
    });
});
