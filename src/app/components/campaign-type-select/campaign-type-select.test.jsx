import {
  renderIntoDocument,
  findAllInRenderedTree,
  scryRenderedDOMElementsWithTag,
  findRenderedVNodeWithType,
  scryRenderedVNodesWithType
} from 'inferno-test-utils';
import CampaignTypeSelect from './campaign-type-select';

const render = (vNodeTree) => renderIntoDocument(vNodeTree);

describe('CampaignTypeSelect component', () => {
  afterEach(TestSupport.clearDOM);

  test('contains 4 options', () => {
    const renderedTree = render(<CampaignTypeSelect />);
    const result = scryRenderedDOMElementsWithTag(renderedTree, 'option');

    expect(result).toHaveLength(4);
  });

  // test('use the given callback to get the value', () => {
  //   const stub = jest.fn();
  //   const renderedTree = render(<CampaignTypeSelect onChange={ stub }/>);
  //   const select = findRenderedVNodeWithType(renderedTree, 'select');
  //
  //   select.dom.value = 'ThreeValue';
  //   TestSupport.fire.change(select);
  //
  //   expect(stub).toHaveBeenCalled();
  //   expect(stub).toHaveBeenCalledTimes(1);
  // });

  test('option vNode has a selected attribute', () => {
    const renderedTree = render(<CampaignTypeSelect value='OneValue' />);
    const select = scryRenderedVNodesWithType(renderedTree, 'option');

    console.log('THE VNODE', select[1]);
    expect(select[0].props).not.toHaveProperty('selected');
    expect(select[1].props).toHaveProperty('selected', true);
  });

  test('option DOM has no selected attribute', () => {
    const renderedTree = render(<CampaignTypeSelect value='OneValue' />);
    const select = scryRenderedDOMElementsWithTag(renderedTree, 'option');

    console.log('THE DOM NODE', select[1]);
    console.log(document.body.innerHTML);

    expect(document.body.innerHTML).toContain('selected');
  });
});
