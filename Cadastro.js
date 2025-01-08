import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import TextTitle from './components/Title';
import Decorator from './components/decorator';

export default function Cadastro({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [numero, setNumero] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  const buscarDadosCep = async (cepAtualizado) => { 
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepAtualizado}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setRua(data.logradouro);
        setCidade(data.localidade);
      } else {
        alert('CEP não encontrado');
        setRua('');
        setCidade('');
      }
    } catch (error) {
      alert('Erro ao buscar dados do CEP');
    }
  };

  // Função para redirecionar após o cadastro
  const cadastrarConta = () => {
    navigation.navigate('Home'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Decorator />
      <TextTitle titleContent="Inscreva-se" />
      <View style={styles.form}>
        <Text style={styles.bold}>Nome</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 0 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(0)}
          onBlur={() => setFocusedIndex(null)}
          value={nome}
          onChangeText={setNome} 
        />
        <Text style={styles.bold}>Email</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 1 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(1)}
          onBlur={() => setFocusedIndex(null)}
          value={email}
          onChangeText={setEmail} 
        />
        <Text style={styles.bold}>Senha</Text>
        <View style={styles.inputWithIcon}>
          <TextInput 
            style={[styles.input, { borderColor: focusedIndex === 2 ? '#FFBB12' : '#D2CEC5' }]} 
            onFocus={() => setFocusedIndex(2)}
            onBlur={() => setFocusedIndex(null)}
            secureTextEntry={!isPasswordVisible} 
            value={senha}
            onChangeText={setSenha} 
          />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.bold}>CEP</Text>
            <TextInput 
              style={[styles.inputSmall, { borderColor: focusedIndex === 3 ? '#FFBB12' : '#D2CEC5' }]} 
              onFocus={() => setFocusedIndex(3)}
              onBlur={() => setFocusedIndex(null)}
              value={cep}
              onChangeText={(text) => {
                setCep(text);
                if (text.length === 8) {
                  buscarDadosCep(text);
                } 
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.bold}>Número</Text>
            <TextInput 
              style={[styles.inputSmall, { borderColor: focusedIndex === 4 ? '#FFBB12' : '#D2CEC5' }]} 
              onFocus={() => setFocusedIndex(4)}
              onBlur={() => setFocusedIndex(null)}
              value={numero}
              onChangeText={setNumero} 
            />
          </View>
        </View>
        <Text style={styles.bold}>Rua</Text>
        <TextInput 
          style={[styles.input, { borderColor: focusedIndex === 5 ? '#FFBB12' : '#D2CEC5' }]} 
          onFocus={() => setFocusedIndex(5)}
          onBlur={() => setFocusedIndex(null)}
          value={rua}
        />
        <Text style={styles.bold}>Cidade</Text>
        <View style={styles.inputWithIcon}>
          <TextInput 
            style={[styles.input, { borderColor: focusedIndex === 6 ? '#FFBB12' : '#D2CEC5' }]} 
            onFocus={() => setFocusedIndex(6)}
            onBlur={() => setFocusedIndex(null)}
            value={cidade}
            onChangeText={setCidade}
          />
        </View>
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setIsChecked(!isChecked)} 
        >
          <View style={[styles.checkbox, isChecked && styles.checkboxChecked]} />
          <Text style={styles.checkboxLabel}>Concordo com os Termos e Condições</Text>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={cadastrarConta} // Navegar para a próxima tela ao clicar em Cadastrar Conta
          >
            <Text style={styles.buttonText}>Cadastrar Conta</Text>
          </TouchableOpacity>

          {/* Botão Voltar */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: '#222222',
  },
  form: {
    width: '90%',
    height: "85%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    shadowColor: '#464247',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginTop: '2%',
    marginBottom: '3%',
    height: 48, 
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: "#F9F8F6"
  },
  inputWithIcon: {
    position: 'relative',
    marginBottom: '3%', 
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    height: '12%',
  },
  inputContainer: {
    width: '48%',
  },
  inputSmall: {
    height: 48, 
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 4,
    backgroundColor: "#F9F8F6"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '5%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#D2CEC5",
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F8F6', 
  },
  checkboxChecked: {
    backgroundColor: '#8B0000', 
  },
  checkboxLabel: {
    marginLeft: 8, 
    fontWeight: 'bold', 
    fontSize: 15
  },
  button: {
    backgroundColor: "#8B0000", 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF", 
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
    margin: 1,
  },
  bold: {
    fontWeight: 'bold'  
  },
  buttonsContainer: {
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
