import '../../../../internals/test/helper';
import HelpText from './index';

import data from '../../interface';
const styles = data.styles.helpText;

/** @test {HelpText} */
describe('HelpText component', function() {
  /** @test {HelpText#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <HelpText>Test</HelpText>
    );

    it('Should output a help text', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
    });

    it('Should output a help text with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['help-text']));
    });
  });
});
