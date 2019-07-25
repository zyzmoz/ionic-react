import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';

const Details: React.FunctionComponent = (props: any) => {
  let match: any = props.match;
  let data: any = JSON.parse(match.params.data);
  console.log(data);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>{data.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data && data.matches.map((m: any, i: number) => (
          <IonList key={i}>
            <IonItem>
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <p>{m.date}</p>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {m.stadium.name}, {m.city}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <h2>{m.group}</h2>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="5">
                      <b>{m.team1.name} ({m.score1})</b>
                    </IonCol>
                    <IonCol size="2">
                      vs
                    </IonCol>
                    <IonCol size="5">
                      <b>({m.score2}) {m.team2.name}</b>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {m.goals1.map((g1: any, i: number)=> (
                        <p key={i}>{g1.name} '{g1.minute}</p>
                      ))}
                    </IonCol>
                    <IonCol>&nbsp;</IonCol>
                    <IonCol>
                      {m.goals2.map((g2: any, i: number)=> (
                        <p key={i}>{g2.name} '{g2.minute}</p>
                      ))}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
          </IonList>
        ))}
      </IonContent>
    </>
  );
};

export default Details;
