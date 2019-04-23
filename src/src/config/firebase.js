import firebase from 'firebase'

const VRCamFirebase = firebase.initializeApp({
  databaseURL: 'https://vr-cam-161603.firebaseio.com',
  serviceAccount: require('./serviceAccountKey.json')
})

export const panoramasRef = VRCamFirebase.database().ref('/panoramas').orderByChild('Building').equalTo("c951a5af-603f-4003-9d1c-707657febe95")