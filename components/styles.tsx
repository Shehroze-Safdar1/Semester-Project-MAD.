import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5", // Background color for the entire UI
    },
    accountContainer: {
      flex: 1,
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    titleContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    titleText: {
      fontSize: 28,
      fontWeight: "bold",
    },
    addressBox: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    },
    address: {
      color: "dimgray",
      fontSize: 16,
      marginRight: 5,
    },
    subContainer: {
      borderWidth: 1,
      borderColor: "#E0E0E0",
      borderRadius: 10,
      padding: 20,
      backgroundColor: "#FFF",
      marginBottom: 20, // Reduced margin bottom to ensure it fits better within the screen
    },
    etherIcon: {
      alignItems: "center",
      marginBottom: 20,
    },
    balanceText: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
    },
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    iconBox: {
      alignItems: "center",
    },
    icon: {
      backgroundColor: "#007AFF",
      borderRadius: 50,
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    iconText: {
      color: "#007AFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      marginTop: 5,
    },
    additionalImage: {
      width: 100, // Adjust size according to your image
      height: 100, // Adjust size according to your image
      alignSelf: "center",
      marginTop: 20,
    },
    transactionContainer: {
      flex: 1,
      marginTop: 10,
    },
    transactionTitle: {
      alignSelf: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      marginBottom: 10,
    },
    scrollView: {
      flex: 1,
    },
    transactionItem: {
      padding: 10,
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 5,
      marginBottom: 10,
    },
    transactionType: {
      fontWeight: "bold",
      color: "black",
    },
    transactionAmount: {
      alignSelf: "flex-end",
      marginTop: 5,
      color: "black",
    },
    transactionDate: {
      alignSelf: "flex-end",
      color: "gray",
      fontSize: 12,
    },
  });
  export default styles