import React, { useState } from 'react';
import './style.css';

function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="testPage">
      <a className="testPage__back" href="#/">← 返回我的订单</a>
      <section className="testPage__card" aria-labelledby="test-page-title">
        <h1 id="test-page-title">测试页面</h1>
        <p>欢迎来到测试页面，点击下方按钮体验交互效果。</p>
        <p className="testPage__count" role="status">当前计数：{count}</p>
        <div className="testPage__actions">
          <button type="button" onClick={() => setCount(value => value + 1)}>
            点击 +1
          </button>
          <button type="button" className="testPage__reset" onClick={() => setCount(0)} disabled={count === 0}>
            重置
          </button>
        </div>
      </section>
    </main>
  );
}

export default TestPage;
