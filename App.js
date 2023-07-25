import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable ,SafeAreaView} from 'react-native';
import { styles } from './style';
import React ,{ useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [textValue,setTextValue] = useState('0');
  const [displayValue,setDisplayValue] = useState('');
  const [operator,setOperator] = useState(null);
  const [firstvalue, setFirstvalue] = useState('');
  const [secondvalue, setSecondvalue] = useState('');

const handleNumberInput = (number) => {
  if(textValue === '0'){
    setTextValue(number.toString());
  }
  else{
    setTextValue(textValue + number.toString());
  }
};


const clearThem = ()=>{
  setTextValue('')
};
const handleDelete = ()=>{
  setTextValue(textValue.slice(0,-1))
};
const calculateResult = ()=>{
  if(textValue !== ''){
  const seconder = textValue;
  const calculate = eval(seconder);
  console.log(seconder)
  setDisplayValue(calculate);
  }
  setFirstvalue('');
  setSecondvalue('');
  setOperator(null);

}
  return (
    <>
        <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.areaview}>
      <View style={styles.container}>
        <View style={styles.mamac}>
        <Text style={styles.textvalue}>{textValue}</Text>
        <Text style={styles.displayvalue}>{displayValue}</Text>
        </View>
        <View style={styles.contain}>
          <View style={styles.topbox}>
            <Pressable style={styles.equallol} onPress={() => clearThem()} >
              <Text style={styles.equalrot}>C</Text>
            </Pressable>
            <Pressable style={styles.equall} onPress={() => handleNumberInput('/')}>
              <Text style={styles.equalrt}>/</Text>
            </Pressable>
            <Pressable style={styles.equall} onPress={() => handleNumberInput('*')}>
              <Text style={styles.equalrt}>x</Text>
            </Pressable>

          </View>
          <View style={styles.viewbox}>
            <Pressable style={styles.equallot} onPress={() => handleDelete()}>
              <Text style={styles.equalrt}>del</Text>
            </Pressable>
            <Pressable style={styles.equalr} onPress={() => handleNumberInput('-')} >
              <Text style={styles.equalrt}>-</Text>
            </Pressable>
            <Pressable style={styles.equalr} onPress={() => handleNumberInput('+')}>
              <Text style={styles.equalrt}>+</Text>
            </Pressable>
            <Pressable style={styles.equalb} onPress={() => calculateResult()} >
              <Text style={styles.equalt}>=</Text>
            </Pressable>
          </View>
          <View style={styles.blackbox}>
            <View style={styles.top}>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(7)} >
              <Text style={styles.equaltried}>7</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(4)} >
              <Text style={styles.equaltried}>4</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(1)} >
              <Text style={styles.equaltried}>1</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput('00')} >
              <Text style={styles.equaltried}>00</Text>
            </Pressable>
            </View>
            <View style={styles.top}>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(8)} >
              <Text style={styles.equaltried}>8</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(5)} >
              <Text style={styles.equaltried}>5</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(2)} >
              <Text style={styles.equaltried}>2</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(0)} >
              <Text style={styles.equaltried}>0</Text>
            </Pressable>
            </View>
            <View style={styles.top}>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(9)} >
              <Text style={styles.equaltried}>9</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(6)} >
              <Text style={styles.equaltried}>6</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput(3)} >
              <Text style={styles.equaltried}>3</Text>
            </Pressable>
            <Pressable style={styles.tried} onPress={() => handleNumberInput('.')} >
              <Text style={styles.equaltried}>.</Text>
            </Pressable>
            </View>
          </View>

        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}

