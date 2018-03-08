import React from 'react';
import { Container, Menu, Image, Dropdown, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless secondary className="topmenu">
          <Container>
            <Menu.Item fitted className="image">
              <Image
                  size = 'small'
                  alt="teambit's Logo"
                  src="https://teambit.io/wp-content/themes/teambeat/img/logo.svg"
              />
            </Menu.Item>
            <Menu.Item position="right"> </Menu.Item>
            <Dropdown icon='dropdown icon' item simple text='Solutions'>
              <Dropdown.Menu>
                <Dropdown.Item text='Feedback'/>
                <Dropdown.Item text='Surveys'/>
                <Dropdown.Item text='Reviews'/>
                <Dropdown.Item text='Praise'/>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>Pricing</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Sign in</Menu.Item>
            <Button inverted color='blue'><Icon name="google icon"/>Sign up </Button>
          </Container>
        </Menu>
    );
  }
}

export default withRouter(TopMenu);
