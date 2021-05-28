import React from 'react';
import logo from './logo.svg';
import './App.css';
import { isNamedTupleMember } from 'typescript';
import { MondaiType } from './types/UserType';

function App() {

  const isFlag1: boolean = true;
  const isFlag2: boolean = false;
  const isFlag3: string = 'aaa';
  const num1: number = 10;
  const num2: number = -10;
  const num3: string = 'aaa';

  const str1: string = 'aaa';
  const str2: number = -10;
  const str3: boolean = false

  let temp: string[] = [`adf`, 'kdk', 'iku'];
  let temp2: Array<string> = [`adf`, 'kdk', 'iku'];

  let taple: [string, number] = ['satake', 999];

  let profile1: any = 12345;
  let profile2: any = 'test';
  let profile3: any = false;

  const test = (): string => {
    return 'Hello'
  };

  const test1 = (): null => {
    return null
  };

  const test2 = (): undefined => {
    return undefined
  };

  // const error = (number: string): never => {
  //   throw new Error();
  // };
  // console.log(error('hello'));

  type TestType = {
    id: number,
    name: string
  }
  let object1: TestType = { id: 1, name: 'satake' }
  let object2: { id: number, name: string } = { id: 1, name: 'satake' };

  interface ObjectInterface {
    id: number;
    name: string;
  }
  let object3: ObjectInterface = { id: 1, name: 'satake' };

  const kansu = (): number => 43;
  let numberAny: any = kansu();
  let numberUnknown: number = kansu();

  let sum1 = 10 + numberAny
  let sum2 = 10 + numberUnknown


  type Pitcher1 = {
    throwingSpeed: number;
  };

  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let sasaki: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65,
  };


  let name: string | number | boolean = 'sasaki'
  name = 100
  name = false

  let nitiyoubi: 'sun' = 'sun'
  let yes: true = true;
  let week: 'sun' | 'mun' | 'tue' | 'wen' | 'thu' | 'fry' | 'sut' = 'sun';

  interface MondaiInterface {
    id: number,
    name: string,
    url: string,
    isStart: boolean,
  }

  const mondai: MondaiType = {
    id: 1,
    name: 'mondai',
    url: 'http://mondai.com',
    isStart: false,
  };







  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
