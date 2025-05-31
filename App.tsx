import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularAgua() {
    const pesoNum = parseFloat(peso);
    if (!nome || isNaN(pesoNum)) {
      setResultado('Preencha os campos corretamente.');
      return;
    }

    const consumo = pesoNum * 0.035;
    setResultado(`Ola seja bem vindo ${nome}, você deve consumir ${consumo.toFixed(2)} litros de água diariamente`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Consumo Diário de Água</Text>

      <View style={styles.bloco}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(valor) => setNome(valor)}
          placeholder=" Nome."
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={(valor) => setPeso(valor)}
          placeholder=" Peso."
        />
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn} onPress={calcularAgua}>
          <Text style={styles.btnTxt}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Read',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 60,
    fontWeight: 'bold',
    color: 'silver',
  },
  bloco: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    width: '80%',
    fontSize: 18,
    marginLeft: '10%',
    color: 'black',
  },
  input: {
    width: '80%',
    fontSize: 18,
    marginLeft: '10%',
    borderWidth: 1,
    borderColor: '#f08080',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  btn: {
    width: '80%',
    marginLeft: '10%',
    backgroundColor: '#blue',
    padding: 10,
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  resultado: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
});
