# Pin Entry Component for React Native

![React Native Pin Entry](/README/pin.gif)

## Features

* Custom styles
* Custom size 
* Auto Focus
* Light-weight: No other dependencies besides `react-native`

## Installation

`yarn add react-native-pin-entry`

or

`npm install --save react-native-pin-entry`

## Usage

```javascript
import PinInput from 'react-native-pin-entry'

render() {
    return (
        <PinInput onInputChange={(pin) => console.log(pin)} />
}
```

## Props
You can pass custom style to PinInput

| onInputChange | Returns the complete PIN | Function | ✓ |  |
| placeholder | Placeholder to show in the pin fields | String | ✓ |  |
| digits | Number to pin options max 6 | Number | ✓ |  |
