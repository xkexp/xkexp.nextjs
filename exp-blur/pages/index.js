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
  // 同步值
  const [value, setValue] = useState('');

  // 响应input输入
  const onInput = (value) => {
    setValue(value);
  };

  // 失焦组件,每次输入完都会失去焦点
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

  return (
    <div>
      <Head>
        <title>Exp-blur</title>
        <meta name="description" content="input 失焦测试" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <label>输入1</label>
      <input type='text' value={value} onInput={e => onInput(e.target.value)} />
      <br />

      <label>输入2</label>
      <input type='text' value={value} onInput={e => onInput(e.target.value)} />
      <br />

      <InnerInput n={value} onInput={onInput} />

      <OutterInput n={value} onInput={onInput} />

    </div>
  )
}
