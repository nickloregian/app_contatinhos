import { theme } from "@/theme";
import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Input } from "../components/input";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        padding: 24, /*Para deslocar os cantos*/
    },
    input: {
        marginBottom: -27, /*metade da altura do input (54), para ficar na entrelinha*/
    },
})