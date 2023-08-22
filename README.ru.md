# @2e32/react-button

React кнопка.

## Установка

```bash
yarn add @2e32/react-button
```

## Использование

App.js

```javascript
// Единожды подключить стили кнопки на уровне приложения (точки входа)
import '@2e32/react-button/css';

const App = () => <Page />;

export default App;
```

Page.js

```javascript
// Импортировать компонент
import Button from '@2e32/react-button';

const Page = () => {
  return <Button>Click me!</Button>;
};

export default Page;
```

## Примеры

Смотри [storybook](https://github.com/2e32/react-button-storybook).

## Лицензия

[MIT](https://choosealicense.com/licenses/mit)
