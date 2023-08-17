import { useEffect, useState } from 'react';
// import GainItem from './GainItem';

export default function GainList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/gainItems.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data ===', data);
        setItems(data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return <div className='list'>list</div>;
}
