
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useDados } from "../hooks/useDados";

export default function DadosComp() {

    const {dadoRandom, generateRandomNumber} = useDados();

     return (
        <Pressable style={styles.container} onPress={generateRandomNumber}>
            <View style={styles.background}>
                <Text style={styles.dadoText}>
                    {dadoRandom}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    background: {
        backgroundColor: '#f0f0f5',
        borderRadius: 12,
        padding: 150,
        width: '100%',
        height: '100%', alignItems: 'center',
        justifyContent: 'center',
    },
    dadoText: {
        fontSize: 90,
        fontWeight: 'bold',
        color: '#2e7d86',
    },
});
