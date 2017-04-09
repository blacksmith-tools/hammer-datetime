import '../../../../internals/test/helper';
import GridCol from './index';

import data from '../../interface';
const styles = data.styles.gridCol;

/** @test {GridCol} */
describe('GridCol component', function() {
  /** @test {GridCol#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <GridCol></GridCol>
    );

    it('Should output a grid col', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a grid col with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles[`col`]));
    });
  });
});
