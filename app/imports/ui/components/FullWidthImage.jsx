import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class FullWidthImage extends React.Component {
  render() {
    return (
        <Container>
          <Image centered src="https://teambit.io/wp-content/themes/teambeat/img/main.jpg" />
        </Container>
    );
  }
}

export default withRouter(FullWidthImage);
