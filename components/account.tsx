import styles from "./styles";
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";
import MyTransaction from "./sendTx";

type AccountProps = {
  address: string;
  balance: number;
};

const dummyTransactions = [
  { id: 1, type: "Received", amount: 0.5, date: "2023-04-25" },
  { id: 2, type: "Sent", amount: 0.2, date: "2022-05-24" },
  { id: 3, type: "Received", amount: 0.8, date: "2021-05-23" },
  { id: 4, type: "Sent", amount: 10, date: "2024-05-23" },
];

const Account = ({ address, balance }: AccountProps) => {
  const [page, setPage] = useState("account");

  const one = address.substring(0, 5);
  const two = address.substring(38, 42);

  const navigation = useNavigation();

  const handleDelete = () => {
    confirmDelete();
  };

  const confirmDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete this account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Delete clicked") },
      ]
    );
  };

  const handleCopy = useCallback(() => {
    Clipboard.setString(address);
  }, [address]);

  const handlePage = useCallback(() => {
    setPage("send");
  }, []);

  return (
    <View style={styles.container}>
      {page === "account" && (
        <View style={styles.accountContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>My Account</Text>
            <TouchableOpacity onPress={handleCopy}>
              <View style={styles.addressBox}>
                <Text style={styles.address}>
                  {one}...{two}
                </Text>
                <Feather name="copy" size={19} color="dimgray" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.etherIcon}>
              <MaterialCommunityIcons name="ethereum" size={44} color="black" />
            </View>
            <Text style={styles.balanceText}>
              {balance === 0 ? 0 : balance} Sapolia ETH
            </Text>
            <Image
              source={require("../images/download.png")}
              style={styles.additionalImage}
            />
            <View style={styles.iconContainer}>
              <IconWithText
                onPress={() => {}}
                icon={
                  <MaterialIcons name="file-download" size={38} color="black" />
                }
                text="Buy"
              />
              <IconWithText
                onPress={handlePage}
                icon={<Feather name="arrow-up-right" size={38} color="black" />}
                text="Send"
              />
              <IconWithText
                onPress={() => {}}
                icon={
                  <MaterialIcons name="swap-horiz" size={38} color="black" />
                }
                text="Swap"
              />
              <IconWithText
                onPress={handleDelete}
                icon={<MaterialIcons name="delete" size={33} color="black" />}
                text="Delete"
              />
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionTitle}>Recent Transactions</Text>
            <ScrollView style={styles.scrollView}>
              {dummyTransactions.map((item) => (
                <View key={item.id} style={styles.transactionItem}>
                  {/* <TouchableOpacity> */}
                  <Text style={styles.transactionAmount}>
                    Amount Transferred: {item.amount} ETH
                  </Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                  <Text style={styles.transactionDate}>Date: {item.date}</Text>
                  {/* </TouchableOpacity> */}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
      {page === "send" && (
        <MyTransaction address={address} balance={balance} setPage={setPage} />
      )}
    </View>
  );
};

interface IconWithTextProps {
  onPress: () => void;
  icon: JSX.Element;
  text: string;
}

const IconWithText = ({ onPress, icon, text }: IconWithTextProps) => (
  <TouchableOpacity onPress={onPress} style={styles.iconBox}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.iconText}>{text}</Text>
  </TouchableOpacity>
);

export default Account;

