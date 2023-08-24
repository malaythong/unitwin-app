// import React from 'react';
// import { SafeAreaView, Text, View, StyleSheet, Button, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
// import { MD2Colors, TextInput } from 'react-native-paper';

// const add = (x: number, y: number) => {
//   return String(x + y);
// }

// const action = (x: number, y: number) => {
//   Alert.alert("Result", add(x, y), [
//     {},
//     {}
//   ]);
// }
// var name: String;
// export default function App() {

//   let x = 1024;
//   let y = 9876;
//   // const title = [<Text>Name:</Text>, <Text>Phone number:</Text>, <Text>Address:</Text>]
//   return (
//     <SafeAreaView>
//       <View style={styles.view4}>
//         <View>
//           <View style={styles.view1}>
//             <Text style={styles.text}>Name</Text>
//           </View>
//           <View style={styles.view2}>
//             <TextInput style={styles.textinput}></TextInput>
//           </View>
//         </View>
//         <View>
//           <View style={styles.view1}>
//             <Text style={styles.text}>Lastname</Text>
//           </View>
//           <View style={styles.view2}>
//             <TextInput style={styles.textinput}></TextInput>
//           </View>
//         </View>
//       </View>



//       <Button title='Submit' onPress={() => {
//         Alert.alert('Submit', "Name:" + name);
//       }} />

//     </SafeAreaView>
//     // <SafeAreaView>
//     //   <View style = {styles.view1}>
//     //   <Text style = {styles.text}>{x} + {y}</Text>
//     //  </View>
//     //   <Button title="Result" onPress={() => action(x, y)} />
//     //   <TouchableHighlight onPress={() => action}><Text>Button 2</Text></TouchableHighlight>
//     //   <TouchableOpacity onPress={() => action}><Text>Button 3</Text></TouchableOpacity>
//     // </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({

//   text: {
//     color: "black",
//     fontSize: 20,
//     marginTop: 10,
//     textAlign: 'right',
//   },
//   textinput: {
//     fontSize: 20,
//     borderWidth: 1,
//     height: 48,
//     backgroundColor: "white"
//   },
//   view1: {
//     backgroundColor: "pink",
//     height: 48,
//     width: 120,
//     position: "absolute",
//     left: 30,
//     top: 50
//   },
//   view2: {
//     backgroundColor: "yellow",
//     borderColor: "black",
//     height: 48,
//     width: 180,
//     position: "absolute",
//     left: 170,
//     top: 50
//   },
//   view3: {
//     backgroundColor: "blue",
//     width: 240,
//     height: 48
//   },
//   view4: {
//     flexDirection: "column",
//     margin: 60,
//     marginTop: 30,
//   }
// });

// App.tsx

import React from 'react';
import ForestHome from './components/ForestHome'; // Import the ForestHome component
const App = () => {
  return <ForestHome />;
};

export default App;
