import React, { useState, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Image } from 'react-native';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import MyTransaction from './sendTx';

type AccountProps = {
  address: string;
  balance: number;
};

const Account = ({ address, balance }: AccountProps) => {
  const [page, setPage] = useState('account');
  const one = address.substring(0, 5);
  const two = address.substring(38, 42);

  const navigation = useNavigation();

  const handleDelete = () => {
    confirmDelete();
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete this account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('Delete clicked') },
      ]
    );
  };

  const handleCopy = useCallback(() => {
    Clipboard.setString(address);
  }, [address]);

  const handlePage = useCallback(() => {
    setPage('send');
  }, []);

  return (
    <View style={styles.container}>
      {page === 'account' && (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>My Account</Text>
            <TouchableOpacity onPress={handleCopy}>
              <View style={styles.addressBox}>
                <Text style={styles.address}>{one}...{two}</Text>
                <Feather name="copy" size={19} color="dimgray" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.etherIcon}>
              <MaterialCommunityIcons name="ethereum" size={44} color="black" />
            </View>
            <Text style={styles.balanceText}>{balance === 0 ? 0 : balance} Sapolia ETH</Text>
            <Image source={require('../images/download.png')} style={styles.additionalImage} />
            <View style={styles.iconContainer}>
              <IconWithText
                onPress={() => {}}
                icon={<MaterialIcons name="file-download" size={38} color="black" />}
                text="Buy"
              />
              <IconWithText
                onPress={handlePage}
                icon={<Feather name="arrow-up-right" size={38} color="black" />}
                text="Send"
              />
              <IconWithText
                onPress={() => {}}
                icon={<MaterialIcons name="swap-horiz" size={38} color="black" />}
                text="Swap"
              />
              <IconWithText
                onPress={handleDelete}
                icon={<MaterialIcons name="delete" size={33} color="black" />}
                text="Delete"
              />
            </View>
          </View>
        </View>
      )}
      {page === 'send' && <MyTransaction address={address} balance={balance} setPage={setPage} />}
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
    <View style={styles.icon}>
      {icon}
    </View>
    <Text style={styles.iconText}>{text}</Text>
  </TouchableOpacity>
);

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5', // Background color for the entire UI
    justifyContent: 'flex-start', // Align items at the top of the screen
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  address: {
    color: 'dimgray',
    fontSize: 16,
    marginRight: 5,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 50, // Add margin bottom to shift the container down
  },
  etherIcon: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconBox: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  additionalImage: {
    width: 100, // Adjust size according to your image
    height: 100, // Adjust size according to your image
    alignSelf: 'center',
    marginTop: 20,
  },
});
