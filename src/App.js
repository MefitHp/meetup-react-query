import React, { useState } from 'react';
import Characters from './components/Characters';
import { ReactQueryDevtools } from 'react-query-devtools'
import Episodes from './components/Episodes';


function App() {
  const [section, setSection] = useState('characters');

  return (
    <div className="container p-3">
      <h1 className="title has-text-centered">React Query Small Workshop</h1>
      <div className="is-flex pb-2" style={{ justifyContent: 'center', alignItems: 'center', gap: 20, borderBottom: '1px solid rgba(0,0,0,0.33)' }}>
        <button className="button is-primary" onClick={() => setSection('characters')}>Characters</button>
        <button className="button is-primary" onClick={() => setSection('episodes')}>Episodes</button>
      </div>
      {section === 'characters' ? <Characters /> : <Episodes />}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
