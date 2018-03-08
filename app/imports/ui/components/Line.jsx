import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Line extends React.Component {
  render() {
    return (
        <Grid secondary columns={1} centered className="line">
          <Container>
            <Grid.Column>
              <div>
                <hr/>
              </div>
            </Grid.Column>
          </Container>
        </Grid>
    );
  }
}

export default withRouter(Line);
