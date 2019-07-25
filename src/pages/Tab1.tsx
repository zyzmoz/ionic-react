import {
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonAvatar,
  IonLoading
  } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';
import axios from 'axios';

interface ITeam {
  name: string,
  code: string
}

interface IMatches {
  num: number,
  date: string,
  time: string,
  team1: ITeam,
  team2: ITeam
}

interface IRounds {
  name: string,
  matches: Array<IMatches>
}

const Tab1: React.FunctionComponent = (props) => {
  const [data, setData] = useState<IRounds[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      
      const res = await axios(
        'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json',
      );
      setData(res.data.rounds);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const showDetail = (data: any) => {
    let prop: any = props;
    prop.history.push({
      pathname: '/tab1/details/' + JSON.stringify(data)
    });
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>World Cup 2018</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => {setShowLoading(false)}}
          message={'Loading...'}
    
        />

        <IonList>
          {data && data.map((round, i) => (
            <IonItem key={i} onClick={() => { showDetail(round)}}>
              <IonAvatar slot="start">
                <img src="assets/imgs/ball.png" alt="ball"/>
              </IonAvatar>
              <IonLabel>
                <h2>{round.name}</h2>
                {round.matches.map((match, i) =>(
                  <p key={i}>
                    <span>{match.date} {match.time}: {match.team1.name} vs {match.team2.name}</span>
                  </p>
                ))}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
       
      </IonContent>
    </>
  );
};

export default Tab1;
