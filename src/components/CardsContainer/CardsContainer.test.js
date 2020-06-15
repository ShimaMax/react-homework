import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from './CardsContainer';
import {describe, expect, it} from '@jest/globals';
import toJson from 'enzyme-to-json';

describe('<CardsContainer />', () => {
    it('renders without crashing', () => {
        const mockedFetchPromise = Promise.resolve({
            json: () => Promise.resolve({data: []})
        });
        global.fetch =jest.fn().mockImplementation(() => mockedFetchPromise);

        const component = shallow(<CardsContainer filter={{type: 0, string: ''}} sortType={0} />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
