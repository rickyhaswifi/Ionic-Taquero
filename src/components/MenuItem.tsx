import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonCardTitle, IonInput } from '@ionic/react';

type MenuItem = {
  name: string,
  cost: number,
  cantidad:number
}

const MenuItem: React.FC<MenuItem> = ({name, cost, cantidad, children}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <IonButton onClick={() => setShowModal(true)}>Details</IonButton>
    <IonContent>
      <IonModal isOpen={showModal}>
        <IonCardTitle>{name}</IonCardTitle>
        <IonInput value={cantidad} />
        <hr/>
        <IonButton onClick={() => setShowModal(false)}>Done</IonButton>
      </IonModal>
    </IonContent>
    </>
  );
};

export default MenuItem;