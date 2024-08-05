
document.getElementById('subscription-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  

  try {
      // Add email to Firestore
     await addDoc(collection(db, 'subscriptions'), {
          email: email
      });
      console.log('Email added successfully');

      document.getElementById('subscription-form').reset();
  } catch (error) {
      console.error('Error adding email: ', error.message);
      
  }
});