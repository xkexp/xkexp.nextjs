import Head from 'next/head'
import { useState } from "react";


const OutterInput = ({ n, onInput }) => {
  return (
    <>
      <label>输入4</label>
      <input type='text' value={n} onInput={e => onInput(e.target.value)} />
      <br />
    </>
  );
}

export default function Home() {
  // 进制数结果数组
  const [numbers, setNumbers] = useState({
    [1]: '',
    [2]: '',
    [3]: '',
    [4]: '',
  });

  // 要处理哪些进制
  const [keys, setKeys] = useState([1, 2, 3, 4]);

  // 响应input输入
  const onInput = (value) => {
    // console.log('keys', keys);
    setNumbers(keys.reduce((m, v) => {
      // console.log('reduce', m, v);
      m[v] = value;
      return m;
    }, {}));
  };


  const InnerInput = ({ n, onInput }) => {
    return (
      <>
        <label>输入3</label>
        <input type='text' value={n} onInput={e => onInput(e.target.value)} />
        <span>(失焦)</span>
        <br />
      </>
    );
  }

  console.log('numbers', numbers);

  return (
    <div>
      <Head>
        <title>Exp-blur</title>
        <meta name="description" content="input 失焦测试" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <label>输入1</label>
      <input type='text' value={numbers[1]} onInput={e => onInput(e.target.value)} />
      <br />

      <label>输入2</label>
      <input type='text' value={numbers[2]} onInput={e => onInput(e.target.value)} />
      <br />

      <InnerInput n={numbers[3]} onInput={onInput} />

      <OutterInput n={numbers[4]} onInput={onInput} />

    </div>
  )
}
