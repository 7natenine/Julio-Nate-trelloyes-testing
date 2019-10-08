import React from 'react'; 
import ReactDom from 'react-dom'; 
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />',() =>{
  it('renders without crashing', () => {
    const div = document.createElement('div'); 

    reactDom.render(<List title={store.List[0].id} 
                        content={store.List[0].header} 
                        key={store.List[0].carIds[0]} />); 

    ReactRom.unmountCoponenetAtNode(div);
  });

  it('renders this UI as expected', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot(); 
  });
});

