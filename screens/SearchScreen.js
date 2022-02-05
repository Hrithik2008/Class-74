import { ScrollView } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import db from '../config';

export default class Searchscreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        allTransactions:[]
      }
    }

    componentDidMount = async()=>{
      const query = await db.collection("transactions").get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions:[...this.state.allTransactions,doc.data()]
        })
      })
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView>
            {this.state.allTransactions.map((transaction)=>{
              return(<View>
                <Text>{"Book ID :- " + transaction.bookId}</Text>
                <Text>{"Student ID :- " + transaction.studentId}</Text>
                <Text>{"Date :- " + transaction.date.toDate()}</Text>
                <Text>{"Transaction Type :- " + transaction.transactionType}</Text>
              </View>
              )
            }
          )
        }
          </ScrollView>
        </View>
      );
    }
  }