import { Header } from '@ebuy/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
export function App() {
  return (
    <Container style={{ marginTop: '5rem' }}>
      <Header />
      <Text size="huge">Catalog App</Text>
    </Container>
  );
}
export default App;