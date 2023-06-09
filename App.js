import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Component} from 'react-native';

export default function App() {

	const[peso, setPeso] = useState(0);
	const[altura, setAltura] = useState(0);
	const[resultado, setResultado] = useState(0);
	const[nmResultado, setNmResultado] = useState("");

	
	function imc(){
		let nmResult;
		let r = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
		setResultado(r);
		if(r <= 16.9){
			nmResult = ("Muito abaixo do peso");
		}else if(r <= 18.4){
			nmResult = ("Abaixo do peso");
		}else if(r <= 24.9){
			nmResult = ("Peso normal");
		}else if(r <= 29.9){
			nmResult = ("Sobrepeso");
		}else if(r <= 34.9){
			nmResult = ("Obesidade I")
		}else if(r <= 40){
			nmResult = ("Obesidade II")
		}else{
			nmResult = ("Obesidade III (Morbida)")
		}
		setNmResultado(nmResult)
	}

  return (
    <View style={styles.container}>
		  <View style={styles.titulo}>
			  <Text style={styles.textoTitulo}>CALCULADORA IMC</Text>
		  </View>
		  
		  <View style={styles.blocoImagem}>
		  		<Image
					resizeMode={'cover'}
				 	style={styles.imagem}
				 	source={require('./assets/IMC.png')}
				/>
		  </View>
		  
		  
		  <View style={styles.bloco}>
				<Text style={styles.label}>Peso: </Text>
			  	<TextInput
					style={styles.input}
					value={peso}
					onChangeText={(valor)=>setPeso(valor)}
				/>
			  
		  		<Text style={styles.label}>Altura: </Text>
			  	<TextInput
					style={styles.input}
					value={altura}
					onChangeText={(valor)=>setAltura(valor)}
				/>
			  
			  <View style={styles.blocoBotao}>
				<TouchableOpacity style={styles.botao} onPress={imc}>
					<Text style={styles.textoBotao}>Calcular</Text>
				</TouchableOpacity>
				  
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.textoBotao}>Limpar</Text>
				</TouchableOpacity>
			  </View>
			  
			<View style={styles.label1}>
				<Text style={styles.label1}> Resultado: {resultado.toFixed(2)} </Text>
				<Text> {nmResultado}</Text>
			</View>
		  </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#fff'
  },
	
	titulo: {
		backgroundColor: '#fed455',
		height: '10%',
		justifyContent: 'center'
	},
	
	textoTitulo: {
		fontSize: 20,
		textAlign: 'center',
		color: '#000'
	},
				  
	imagem: {
		width: '100%',
		height: 120
	},
	
	blocoImagem: {
		alignItems: 'center',
		marginTop: 30
	},
	
	bloco:{
		width: '70%',
		marginLeft: '15%'
		
	},

	input: {
	 	backgroundColor: '#fed455',
		borderWidth: 1,
		fontSize: 15,
		borderRadius: 5
		
	},
	
	label: {
		fontSize: 15,
		marginTop: 10
	},
	
	label1: {
		fontSize: 15,
		marginTop: 10,
		textAlign: 'center'
	},
	
	
	blocoBotao:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	
	botao:{
		width: '25%',
		marginTop: 20,
		marginLeft: '05%',
		marginRight: '05%',
		alignItems: 'center',
		backgroundColor: '#a5c3d1',
		borderWidth: 1
	},
	
	textoBotao: {
		fontSize: 15,
		textAlign: 'center'		
	},
});
