import React, { useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBdHa-wyQlI3fKe9XqykLmTmB_xrtUV4fs",
    authDomain: "chat-app-5bc3b.firebaseapp.com",
    projectId: "chat-app-5bc3b",
    storageBucket: "chat-app-5bc3b.appspot.com",
    messagingSenderId: "1086732838113",
    appId: "1:1086732838113:web:7fc771e8e39da3965303a0"
  })

  const auth = firebase.auth()
  const firestore = firebase.firestore()

function trialpage(props) {
    const [user] = useAuthState(auth)
    return (
        <div>
            <header>
                <h1>⚛️🔥💬</h1>
                <SignOut />
            </header>
            
            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );
}

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
 return (
     <>
       <button onClick={signInWithGoogle}>Sign in with Google</button>
     </>
 )
}

function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (<>
        <main>
    
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    
          <span ref={dummy}></span>
    
        </main>
    
        <form onSubmit={sendMessage}>
    
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
    
          <button>SEND🕊️</button>
    
        </form>
      </>)
    }

    function ChatMessage(props) {
        const { text, uid, photoURL } = props.message;
      
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
      
        return (<>
          <div>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
          </div>
        </>)
      }    

export default trialpage;