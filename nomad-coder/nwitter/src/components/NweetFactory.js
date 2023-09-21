import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storageService, dbService } from 'firebaseInstance';

const NweetFactory = ({ userObject }) => {
  const [nweet, setNweet] = useState('');
  const [attachment, setAttachment] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentURL = '';
    if (attachment) {
      const attachmentRef = ref(
        storageService,
        `${userObject.uid}/${uuidv4()}`
      );
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      attachmentURL = await getDownloadURL(response.ref);
    }
    const newNweet = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObject.uid,
      attachmentURL,
    };
    try {
      const docRef = addDoc(collection(dbService, 'nweets'), newNweet);
      setNweet('');
      setAttachment(null);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setNweet(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What's on your mind?"
        maxLength={300}
        value={nweet}
        onChange={onChange}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nweet" />
      {attachment && (
        <div>
          <img src={attachment} alt="" width={150} />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
