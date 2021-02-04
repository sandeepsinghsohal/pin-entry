import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

type Props = {
    onInputChange: (text: string) => void;
    digits?: number;
    placeholder?: string;
};

class PinInput extends Component<Props> {
    private inputRefs = []
    private digits = []
    static defaultProps = {
        digits: 4,
        placeholder: '0',
        style: {
            width: 30,
            zIndex: 1,
            borderBottomWidth: 1,
            margin: 12,
            textAlign: 'center',
            fontSize: 25,
            padding: 5
        }
    }
    state = {
        fields: []
    }

    private onChange(fields: string, index: number): void {
        const { digits } = this.props
        this.digits[index] = fields
        this.setState({ fields: this.digits });
        this.props.onInputChange(this.state.fields.join(''));
        if (!fields) {
            index && this.setInputFocus(index - 1);
            return;
        }
        index < (digits > 6 ? 5 : digits - 1) && this.setInputFocus(index + 1);
    }

    private setInputFocus(index: number): void {
        this.inputRefs[index].getNativeRef().focus()
    }

    private keyPressHandler(e, i) {
        if (e.nativeEvent.key === 'Backspace' && i > 0) {
            this.setInputFocus(i - 1);
        }
    }

    render() {
        const { placeholder, digits, ...rest } = this.props;
        const addInputFields = [...Array(digits > 6 ? 6 : digits)]
        return (
            <View style={styles.container}>
                {
                    addInputFields.map((x, index) => {
                        return (
                            <TextInput
                                {...rest}
                                key={index}
                                value={this.state.fields[index]}
                                selectTextOnFocus={true}
                                onKeyPress={(e) => this.keyPressHandler(e, index)}
                                ref={(ref) => this.inputRefs[index] = ref}
                                autoCapitalize="none"
                                placeholder={placeholder}
                                keyboardType='numeric'
                                maxLength={1}
                                onChangeText={(text: string) => this.onChange(text, index)}
                            />
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PinInput;
