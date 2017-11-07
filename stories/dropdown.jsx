import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '../src/';
import DropdownDivider from '../src/components/Dropdown/DropdownDivider';

storiesOf('Dropdown', module)
  .add('Simple dropdown', () =>


    <Dropdown hoverable>
      <Dropdown.Menu>
        <Dropdown.Item>
           Dropdown item
        </Dropdown.Item>
        <Dropdown.Item>
           Other dropdown item
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,

)
  .add('With links', () =>


    <Dropdown hoverable>
      <Dropdown.Menu>
        <Dropdown.Item href="#">
          Link 1
        </Dropdown.Item>
        <Dropdown.Item href="#">
          Link 2
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,

)

  .add('With custom trigger', () =>


    <Dropdown hoverable trigger={<span style={{ color: 'red' }} >Hi</span>} >
      <Dropdown.Menu>
        <Dropdown.Item href="#">
          Link 1
        </Dropdown.Item>
        <Dropdown.Item href="#">
          Link 2
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,

  )

  .add('With divider', () =>


    <Dropdown hoverable>
      <Dropdown.Menu>
        <Dropdown.Item href="#">
          Link 1
        </Dropdown.Item>
        <Dropdown.Item href="#">
          Link 2
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item>
          Under divider
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,

  )

  .add('Controlled', () =>


    <div>
      <Dropdown trigger={<span>I am not active</span>} active={false}>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Link 1
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Link 2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <hr />

      <Dropdown trigger={<span>I am active</span>} active>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Link 1
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Link 2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>,

  )


  .add('Custom items', () =>


    <Dropdown up active>
      <Dropdown.Menu>
        <Dropdown.Item as="div">
          Link 1
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt=""/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,

  );

