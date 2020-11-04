import React, { useState, useEffect } from "react";
import { inject, observer } from 'mobx-react';
import * as Tool from 'tool';

export default inject('Toast')(observer(function Index(props) {
  const [a] = useState(1);

  useEffect(() => {
    console.log(a);
  }, []);

  return (
    <div>shouye</div>
  );
}));