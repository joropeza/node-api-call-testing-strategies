import * as strategy2Service from '../services/strategy2';
import { assert, expect } from 'chai';

describe('Strategy 2', () => {
    describe('(getRawForecastFromResponseBody)', () => {
        it('should return a forecast object if the param structure matches', () => {
            // ARRANGE
            const weatherResponse = {
                text: '{"query":{"results":{"channel":{"item":{"forecast":"weather"}}}}}'
            };
            const expected = 'weather';
            // ACT
            const actual = strategy2Service.getRawForecastFromResponseBody(weatherResponse);

            // ASSERT
            expect(expected).to.equal(actual);

        });

        it('should return an error if param data structure is invalid', () => {
            // ARRANGE
            const weatherResponse = {
                definitelyNotTheText: '{"query":{"results":{"channel":{"item":{"forecast":"weather"}}}}}'
            };
            const expectedError = 'unexpected response body';
            const functionToTest = strategy2Service.getRawForecastFromResponseBody;

            // ACT & ASSERT
            expect(functionToTest.bind(functionToTest, weatherResponse)).to.throw(expectedError);
        });
    });
    /*
    ...
    tests on the rest of the functions
    ...
    */
});
