/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ShoppingBasket from './ShoppingBasket';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import { getSessionStorage } from '@ebuy/utils';

export function App() {
  const basketFromStorage: any = getSessionStorage('shoppingBasket');
  console.log('Basket: ', basketFromStorage);
  const createCompleteBasket = (allItems: any, quantities: any) => {
    return allItems
      .filter((item: any) => quantities[item.id])
      .map((item: any) => {
        return {
          ...item,
          quantity: quantities[item.id],
        };
      });
  };
  const completeBasket = createCompleteBasket(
    PRODUCT_LIST_MOCKS,
    basketFromStorage,
  );
  return (
    <Container style={{ marginTop: '5rem' }}>
      <Text size="huge">Checkout</Text>
      <ShoppingBasket basketList={completeBasket} />
    </Container>
  );
}
export default App;
