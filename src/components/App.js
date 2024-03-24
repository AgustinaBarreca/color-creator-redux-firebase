import React, { useEffect } from 'react';
import ColorList from './ColorList';
import '../style.css';
import FormColorControlled from './FormColorControlled';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { loadColors, toggleLoading } from '../actions';

export default function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  useEffect(() => {
    const starCountRef = ref(database);
    dispatch(toggleLoading());
    onValue(starCountRef, (snapshot) => {
      setTimeout(() => {
        const data = snapshot.val();
        if (!data || !data.length) return;
        dispatch(loadColors(data));
        dispatch(toggleLoading());
      }, 5000);
    });
  }, []);
  return (
    <>
      {loading && <h1>Loading</h1>}
      <ColorList />
      <FormColorControlled />
    </>
  );
}
