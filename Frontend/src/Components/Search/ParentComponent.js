// ParentComponent.js
import React, { useState } from 'react';
import Search from './Search';
import AnotherComponent from './userQuery';

function ParentComponent() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <AnotherComponent search={search} />
    </>
  );
}

export default ParentComponent;
