# Pensano's icons library

Ready to use SVG components of Aura for React!

## Installation - from the template repo to use as example

### Yarn

```bash
yarn add react-allergens
```

## Usage

```jsx
import { PhoneIcon } from "react-allergens";

const Example = () => {
  return <PhoneIcon />;
};

const ExampleProps = () => {
  return (
    <PhoneIcon width={100} height={100} wrapperStyle={{ float: "left" }} />
  );
};
```

## Props

| Key            | Default              | Notes                                  |
| -------------- | -------------------- | -------------------------------------- |
| `width`        | `200px`              |                                        |
| `height`       | `200px`              |                                        |
| `innerColor`   | `white`              |                                        |
| `outerColor`   | `default icon color` |                                        |
| `wrapperStyle` | `{}`                 | Style object passed to the svg wrapper |

## The icons

![image](https://user-images.githubusercontent.com/8389685/93021038-d435da80-f5e0-11ea-9385-2a42968d4697.png)
