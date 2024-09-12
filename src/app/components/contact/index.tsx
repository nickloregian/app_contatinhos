import { TouchableOpacity, Text } from "react-native";
import { Avatar } from "../avatar";
import { styles } from "./styles";

export function Contact(){
    return <TouchableOpacity style={styles.container}>
        <Avatar name="Nicolao" />
        <Text style={styles.name}>Nicolly</Text>
    </TouchableOpacity>
}