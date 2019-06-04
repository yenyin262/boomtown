import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import NavigationBar from '../../components/NavigationBar';

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ classes, tags }) => {
  return (
    <div>
      <div>
        <NavigationBar pageType={null} />
      </div>

      <div>
        <ShareItemPreview />
        <ShareItemForm tags={tags} />
      </div>
    </div>
  );
};

export default Share;
