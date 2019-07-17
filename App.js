import * as React from 'react';
import { View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Form from './src/components/Form';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    accent: "#ffff",
    backdrop: "rgba(0, 0, 0, 0.5)",
    background: "#f6f6f6",
    disabled: "rgba(0, 0, 0, 0.26)",
    error: "#d84356",
    notification: "#f50057",
    placeholder: "rgba(0, 0, 0, 0.54)",
    primary: "#6393c5",
    surface: "#ffffff",
    text: "#6393c5",
  },
};

export default class MyComponent extends React.Component { 
  render(){
    return (
      <PaperProvider theme={theme}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Form loginStepOne={ (values) => {
            console.log('values', values);
          }} />
        </View>
        </PaperProvider>
    );
  }
}
