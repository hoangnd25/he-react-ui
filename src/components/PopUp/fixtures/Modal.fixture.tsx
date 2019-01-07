import React from 'react';
import PopUp from '../';

export default {
  component: PopUp,
  props: {
    showing: true,
    modal: true,
  },
  children: (
    <div>
      <p>This modal popup cannot be closed without a parent interfering.</p>
      <p>If only the showing property were set to false.</p>
    </div>
  ),
};
