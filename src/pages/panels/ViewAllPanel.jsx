import firebaseApp from 'firebase/firebaseConfig';
import React from 'react'

const ViewAllPanel = (props) => {

    //path doc
    const docRef = firebaseApp.firestore().collection('users').doc(firebaseApp.auth().currentUser.uid)
    const clientRef = docRef.collection('employees').doc('a1')

    clientRef.get()
    .then(doc=>{

    })
    .catch(error=>{
        console.log(error)
    })
    return ( 
        <header><h2>View All Panel</h2></header>
     );
}
 
export default ViewAllPanel;