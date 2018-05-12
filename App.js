'use strict';
import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';

import BarcodeScanner from 'react-native-barcode-scanners'

export default class App extends Component {

  constructor(props){
    super(props)
  }
  onBarCodeRead(res){
    Alert.alert('HINT', res.data)
  }
  onReadBarCodeByGalleryFailure(){
    Alert.alert('HINT', 'Not found barcode!')
  }
  componentDidMount () {}
  render() {
    return (
      <BarcodeScanner
        onReadBarCodeByGalleryFailure={()=>this.onReadBarCodeByGalleryFailure.call(this)}
        onBarCodeRead={(data)=>this.onBarCodeRead.call(this, data)}
      />
    )
  }
}