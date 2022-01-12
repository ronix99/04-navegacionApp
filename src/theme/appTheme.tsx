import { StyleSheet } from "react-native";

export const colores = {
    primary: "#5856D6",
}

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    }, 
    title: {
        fontSize: 30,
        marginBottom: 10,
    }, 
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginVertical: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
    },
    menuContainer: {
        marginHorizontal: 20,
    },
    botonMenu: {
        marginBottom: 20,
        marginLeft: 20,
    },
    textoMenu: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ajustesContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ajustesAvatar: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    ajustesTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20,
    },
    ajustesContainer: {
        backgroundColor: '#E3E3E3',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    ajusteItem: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 5,
    },
    ajusteItemLine: {
        height: 1,
        backgroundColor: '#ADADAD',
        marginBottom: 10,
    },
    ajustesItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;