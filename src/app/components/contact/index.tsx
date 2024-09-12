import { TouchableOpacity, Text, ImageProps, TouchableOpacityProps } from "react-native";
import { Avatar } from "../avatar";
import { styles } from "./styles";

export type ContactProps = {
    name: string
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}

export function Contact({contact, ...rest }: Props){
    
    return <TouchableOpacity style={styles.container}>
        <Avatar name="Nicolao" />
        <Text style={styles.name}>Nicolly</Text>
    </TouchableOpacity>
}