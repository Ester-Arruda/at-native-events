import { Text, Pressable, ScrollView, View, StyleSheet } from "react-native";
import Routes from "../routes";

export default function AboutPage({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Sobre a EventsEasy </Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>
                    A EventsEasy Eventos & Hospedagem, é uma plataforma inovadora que visa simplificar a 
                    experiência de viajar e participar de eventos ao redor do mundo. 
                    Com uma abordagem centrada no cliente e uma tecnologia avançada, estamos 
                    transformando a maneira como as pessoas encontram e reservam tanto eventos quanto acomodações próximas.
                </Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Nossa Diretoria</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>
                    A EventsEasy Eventos & Hospedagem é guiada por uma equipe de liderança experiente e visionária, 
                    comprometida em impulsionar o crescimento e a inovação da empresa. 
                    Nossa diretoria é composta por indivíduos talentosos e apaixonados, 
                    cada um trazendo uma riqueza de experiência e conhecimento para suas respectivas funções.
                </Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Nossos Colaboradores</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>
                    Na EventsEasy Eventos & Hospedagem, reconhecemos que nossos colaboradores são o pilar 
                    fundamental do nosso sucesso. Valorizamos e celebramos a diversidade de talentos, 
                    habilidades e perspectivas que cada membro da nossa equipe traz consigo. 
                    Nosso ambiente de trabalho é caracterizado por uma cultura de colaboração, 
                    respeito mútuo e oportunidades de crescimento profissional e pessoal
                </Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Nossos desenvolvedores</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>
                    Na EventsEasy Eventos & Hospedagem, nossa equipe de desenvolvedores é o núcleo da nossa inovação tecnológica. 
                    Com habilidades técnicas excepcionais, criatividade e um compromisso inabalável com a excelência, 
                    esses profissionais são responsáveis por criar e aprimorar nossa plataforma digital, 
                    garantindo uma experiência excepcional para nossos clientes.
                </Text>
            </View>

            <View style={styles.containerContact}>
                <View>
                    <View>
                        <Text style={[styles.textTitle, {paddingHorizontal: 0}]}>Fale Conosco</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.bold}>Telefone: </Text>
                        <Text>+55 21 99999-9999</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.bold}>Email: </Text>
                        <Text>eventsEasy@gmail.com</Text>
                    </View>
                </View>
                <View>
                    <Pressable
                        onPress={() => {
                        navigation.navigate(Routes.EventsPage);
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Eventos</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5D5FF'
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: '#350543',
    },
    containerContent: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    textContent: {
        textAlign: 'justify',
    },
    containerContact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#DC8FF3'
    },
    buttonText: {
        color: '#350543',
        fontWeight: 'bold',
    },
})
