import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Group, Icon, Nav } from '../src/';
import Toggler from './Toggler';

storiesOf('Nav', module)
  .add('Nav', () =>
    <Toggler>
      {(toggle, value) =>
        <Nav>
          <Nav.Left>
            <Nav.Item brand href="#">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </Nav.Item>
          </Nav.Left>
          <Nav.Toggle onClick={toggle} active={value} />
          <Nav.Right menu active={value}>
            <Nav.Item href="#">
              Home
            </Nav.Item>
            <Nav.Item href="#">
              Documentation
            </Nav.Item>
            <Nav.Item href="#">
              Blog
            </Nav.Item>
            <Nav.Item href="#">
              <Icon icon="github" size="medium" />
            </Nav.Item>
            <Nav.Item>
              <Group>
                <Button control color="info" outlined href="https://twitter.com">
                  Tweet
                </Button>
                <Button control color="primary">Download</Button>
              </Group>
            </Nav.Item>
          </Nav.Right>
        </Nav>}
    </Toggler>,
)
  .add('Modifiers', () =>
    <Toggler>
      {(toggle, value) =>
        <Nav shadow>
          <Nav.Left>
            <Nav.Item brand href="#">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </Nav.Item>
            <Nav.Item hiddenMobile tab active href="#">
              Home
              </Nav.Item>
            <Nav.Item hiddenMobile tab href="#">
              Features
              </Nav.Item>
            <Nav.Item hiddenMobile tab href="#">
              Pricing
              </Nav.Item>
            <Nav.Item hiddenMobile tab href="#">
              About
              </Nav.Item>
          </Nav.Left>
          <Nav.Toggle onClick={toggle} active={value} />
          <Nav.Right menu active={value}>
            <Nav.Item hiddenTablet tab active href="#">
              Home
              </Nav.Item>
            <Nav.Item hiddenTablet tab href="#">
              Features
              </Nav.Item>
            <Nav.Item hiddenTablet tab href="#">
              Pricing
              </Nav.Item>
            <Nav.Item hiddenTablet tab href="#">
              About
              </Nav.Item>
            <Nav.Item tab href="#">
              Profile
              </Nav.Item>
            <Nav.Item tab href="#">
              Log out
              </Nav.Item>
          </Nav.Right>
        </Nav>}
    </Toggler>,
)
  .add('With dropdown', () =>
    <Toggler>
      {(toggle, value) =>
        <Nav shadow aria-label="dropdown navigation">
          <Nav.Left>
            <Nav.Item brand href="#">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </Nav.Item>
            <Nav.Item hiddenMobile tab active href="#">
              Home
            </Nav.Item>
            <Nav.Dropdown hoverable title="Docs">
              <Nav.Item href="#">
                  Overview
              </Nav.Item>
              <Nav.Item href="#">
                  Assets
              </Nav.Item>
            </Nav.Dropdown>
          </Nav.Left>
          <Nav.Toggle onClick={toggle} active={value} />
        </Nav>}
    </Toggler>,
);

