import { View, TextInput, ViewProps, TextInputProps } from 'react-native'
import { styles } from './styles'

import { theme } from '@/theme'

function Input({ children, style }: ViewProps){
    return <View style={styles.container}>{children}</View>
}

function Field( {...rest}: TextInputProps){
    return <TextInput style={styles.input} placeholderTextColor={theme.colors.gray_300} {...rest} /> 
    /*com '...rest' estamos passando todas as propiedades de TextInputProps para o componente TextInput*/
}

Input.Field = Field /*adicionanmos uma propiedade 'Field' ao input, á 
qual atribuímos o componente 'Field()'*/

export { Input }