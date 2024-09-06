import { theme } from "@/theme";
import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
    },
})