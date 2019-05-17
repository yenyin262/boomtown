import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import CardItem from '../../components/CardItem/CardItem';

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ classes }) => {
  return (
    <div>
      <p>
        This is the share page located at <code>/share</code>.
        <ShareItemForm />
        {/* <CardItem= /> */}
      </p>
    </div>
  );
};

export default Share;
