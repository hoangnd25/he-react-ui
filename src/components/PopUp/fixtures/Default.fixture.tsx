import React from 'react';
import PopUp from '../';
import { Button } from '../..';

export default {
  component: PopUp,
  props: {
    showing: true,
  },
  children: (
    <div>
      <h3>Wow!</h3>
      <p>What a story, Mark!</p>
      <p>I cannot wait to hear more about all of it later.</p>
      <Button>Useless button</Button>
    </div>
  ),
};
