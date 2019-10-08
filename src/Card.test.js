import React from 'react'; 
import ReactDom from 'react-dom'; 
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />',() =>{
  it('renders without crashing', () => {
    const div = document.createElement('div'); 

    reactDom.render(<Card title={store.allCards['a'].title} 
                        content={store.allCards['a'].content} 
                        key={store.allCards['a'].id} />); 

    ReactRom.unmountCoponenetAtNode(div);
  });

  it('renders this UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot(); 
  });
});

