import { Image, ImageProps, Text } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { styles } from "./styles";

const variants = {
    size: {
        medium: {width: 54, height: 54, borderRadius: 18},
        large: {width: 100, height: 100, borderRadius: 32},
    },
    text: {
        medium: {fontSize: 24},
        large: {fontSize: 52},
    }
}

type Props = { /*definimos uma tipagem separada, que denominamos Props*/
    name: string
    image?: ImageProps | null /*definimos que image é opcional e pode ser null*/
    variant?: "medium" | "large" /*opcional, medium ou large*/
}

export function Avatar({ name, image, variant="medium" }: Props){ /*caso não seja fornecida uma variant, o padrão é a medium*/
    return (
    <View>
        { image? (
            <Image source={image} style={variants.size[variant]} />
        ) : (
            <View style={[styles.letter, variants.size[variant]]}>
                <Text style={[styles.text, variants.text[variant]]}>{name[0].toUpperCase()}</Text>
            </View>
        )}
    </View>
    )
}