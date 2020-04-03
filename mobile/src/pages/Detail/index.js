import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const value = Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'USD'
  }).format(incident.value);
  const message = `Hi, ${incident.name}! I'd like to contribute with an amount of ${value} for "${incident.title}"`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    if (incident.whatsapp) {
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    } else {
      console.log('Nao tem whatsapp')
    }
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Be a hero: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity
          onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty, { marginTop: 0 }}>NGO:</Text>
        <Text style={styles.incidentValue}>{incident.name} at {incident.city} / {incident.state}</Text>

        <Text style={styles.incidentProperty}>Incident:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>{value}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero from this incident.</Text>
        <Text style={styles.heroDescription}>Contact through:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.action}
            onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}