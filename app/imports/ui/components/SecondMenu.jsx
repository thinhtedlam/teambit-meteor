import React from 'react';
import { Grid, Header, Menu, Button, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class SecondMenu extends React.Component {
  render() {
    return (
        <Grid columns={1} centered className='bottomgrid'>
          <Grid.Row>
            <Grid.Column>
              <div>
                <Header textAlign='center' className='mainheader'>Make your team the best it can be</Header>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div>
                <Header textAlign='center' className='subheader'>
                  Teambit helps teams create high performing cultures by making feedback a daily habit.</Header>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Menu borderless secondary className="bottommenu">
              <Button inverted color='blue'><Icon name="google icon"/>Sign up with Google </Button>
              <Menu.Item>or</Menu.Item>
              <Input placeholder='Email address...'/>
              <Menu.Item fitted></Menu.Item>
              <Button color='blue'>Get started for free</Button>
            </Menu>
          </Grid.Row>
        </Grid>
    );
  }
}

export default withRouter(SecondMenu);
