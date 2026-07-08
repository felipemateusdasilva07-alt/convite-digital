import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Importamos a imagem diretamente aqui no topo
const fundoConvite = require('./assets/convite.jpg');

export default function ConviteDigital() {
  
  const confirmarPresenca = () => {
    const numeroTelefone = '5591992366733';
    const mensagem = 'Olá! Gostaria de confirmar minha presença no evento.';
    const url = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  const abrirLocalizacao = () => {
    Linking.openURL('https://maps.app.goo.gl/zg471FQNYWj2L2Ss9');
  };

  return (
    <ImageBackground 
      source={fundoConvite} 
      style={styles.fundo}
      resizeMode="cover"
    >
      <View style={styles.container}>
        
        <View style={styles.card}>
          <Text style={styles.titulo}>Você é nosso convidado!</Text>
          
          <TouchableOpacity style={[styles.botao, styles.botaoMaps]} onPress={abrirLocalizacao}>
            <Text style={styles.textoBotao}>📍 Ver Localização</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, styles.botaoWpp]} onPress={confirmarPresenca}>
            <Text style={styles.textoBotao}>✅ Confirmar Presença</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 },
  card: { backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 20, width: '90%', alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  botao: { paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, marginVertical: 5, width: '100%', alignItems: 'center' },
  botaoMaps: { backgroundColor: '#4285F4' },
  botaoWpp: { backgroundColor: '#25D366' },
  textoBotao: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});