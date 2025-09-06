import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RacketDetail from './pages/RacketDetail';

function App() {
  const [screen, setScreen] = useState('start');
  const [answers, setAnswers] = useState({
    gender: '',
    experience: '',
    strength: '',
    playStyle: '',
    performance: '',
  });

  const handleStartClick = () => {
    setScreen('quiz');
  };

  const handleSelect = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const handleNext = () => {
    if (screen === 'quiz') {
      if (answers.gender && answers.experience) {
        if (answers.experience === '初心者') {
          setScreen('novice_question');
        } else if (answers.experience === '中級者') {
          setScreen('intermediate_question');
        } else if (answers.experience === '上級者') {
          setScreen('advanced_question');
        }
      } else {
        console.error('性別とテニス歴の両方を選択してください。');
      }
    } else if (screen === 'novice_question') {
      if (answers.strength) {
        setScreen('result');
      } else {
        console.error('腕力を選択してください。');
      }
    } else if (screen === 'intermediate_question') {
      if (answers.playStyle) {
        setScreen('result');
      } else {
        console.error('プレイスタイルを選択してください。');
      }
    } else if (screen === 'advanced_question') {
      if (answers.performance) {
        setScreen('result');
      } else {
        console.error('求める性能を選択してください。');
      }
    }
  };

  const handleReset = () => {
    setAnswers({
      gender: '',
      experience: '',
      strength: '',
      playStyle: '',
      performance: '',
    });
    setScreen('quiz');
  };

  const getRecommendation = () => {
    const { gender, experience, strength, playStyle, performance } = answers;
    let recommendations = [];

    if (experience === '初心者') {
      if (gender === '男性') {
        if (strength === '腕力に自信がない') {
          recommendations = [
            { brand: 'HEAD', series: 'Boom' }, { brand: 'YONEX', series: 'EZONE' }, { brand: 'Babolat', series: 'Pure Drive' }
          ];
        } else if (strength === '平均的な腕力') {
          recommendations = [
            { brand: 'Wilson', series: 'ULTRA' }, { brand: 'YONEX', series: 'EZONE' }, { brand: 'Babolat', series: 'Pure Drive' }
          ];
        } else if (strength === '腕力に自信がある') {
          recommendations = [
            { brand: 'Wilson', series: 'BLADE' }, { brand: 'Babolat', series: 'Pure Strike' }, { brand: 'HEAD', series: 'Speed' }
          ];
        }
      } else if (gender === '女性') {
        if (strength === '腕力に自信がない') {
          recommendations = [
            { brand: 'YONEX', series: 'EZONE' }, { brand: 'HEAD', series: 'Boom' }, { brand: 'Babolat', series: 'Pure Drive' }
          ];
        } else if (strength === '平均的な腕力') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Drive' }, { brand: 'Wilson', series: 'ULTRA' }, { brand: 'YONEX', series: 'EZONE' }
          ];
        } else if (strength === '腕力に自信がある') {
          recommendations = [
            { brand: 'Wilson', series: 'BURN' }, { brand: 'Babolat', series: 'Pure Aero' }, { brand: 'YONEX', series: 'VCORE' }
          ];
        }
      }
    } else if (experience === '中級者') {
      if (gender === '男性') {
        if (playStyle === 'オールラウンドプレイヤー') {
          recommendations = [
            { brand: 'Wilson', series: 'ULTRA' }, { brand: 'Babolat', series: 'Pure Drive' }, { brand: 'HEAD', series: 'Radical' }, { brand: 'YONEX', series: 'EZONE' }
          ];
        } else if (playStyle === 'アグレッシブベースライナー') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Aero' }, { brand: 'Wilson', series: 'BURN' }, { brand: 'HEAD', series: 'Extreme' }, { brand: 'YONEX', series: 'VCORE' }
          ];
        } else if (playStyle === 'サービス＆ボレーヤー') {
          recommendations = [
            { brand: 'Wilson', series: 'BLADE' }, { brand: 'Babolat', series: 'Pure Strike' }, { brand: 'HEAD', series: 'Speed' }, { brand: 'YONEX', series: 'PERCEPT' }
          ];
        } else if (playStyle === 'カウンターパンチャー') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Strike' }, { brand: 'Wilson', series: 'BLADE' }, { brand: 'HEAD', series: 'Radical' }, { brand: 'YONEX', series: 'PERCEPT' }
          ];
        }
      } else if (gender === '女性') {
        if (playStyle === 'オールラウンドプレイヤー') {
          recommendations = [
            { brand: 'Wilson', series: 'ULTRA' }, { brand: 'Babolat', series: 'Pure Drive' }, { brand: 'HEAD', series: 'Boom' }, { brand: 'YONEX', series: 'EZONE' }
          ];
        } else if (playStyle === 'アグレッシブベースライナー') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Aero' }, { brand: 'Wilson', series: 'BURN' }, { brand: 'HEAD', series: 'Extreme' }, { brand: 'YONEX', series: 'VCORE' }
          ];
        } else if (playStyle === 'サービス＆ボレーヤー') {
          recommendations = [
            { brand: 'Wilson', series: 'BLADE' }, { brand: 'Babolat', series: 'Pure Strike' }, { brand: 'HEAD', series: 'Speed' }, { brand: 'YONEX', series: 'PERCEPT' }
          ];
        } else if (playStyle === 'カウンターパンチャー') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Strike' }, { brand: 'Wilson', series: 'BLADE' }, { brand: 'HEAD', series: 'Radical' }, { brand: 'YONEX', series: 'PERCEPT' }
          ];
        }
      }
    } else if (experience === '上級者') {
      if (gender === '男性') {
        if (performance === '精密なコントロール') {
          recommendations = [
            { brand: 'Wilson', series: 'PRO STAFF' }, { brand: 'Wilson', series: 'BLADE' }, { brand: 'YONEX', series: 'PERCEPT' }, { brand: 'HEAD', series: 'Speed' }, { brand: 'HEAD', series: 'Radical' }
          ];
        } else if (performance === 'パワー・スピン') {
          recommendations = [
            { brand: 'Wilson', series: 'BURN' }, { brand: 'YONEX', series: 'VCORE' }, { brand: 'HEAD', series: 'Extreme' }
          ];
        } else if (performance === '快適性・打感') {
          recommendations = [
            { brand: 'YONEX', series: 'EZONE' },{ brand: 'Babolat', series: 'Pure Aero' },{ brand: 'HEAD', series: 'Boom' }, { brand: 'Wilson', series: 'ULTRA' }
          ];
        } else if (performance === 'オールラウンド') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Drive' }, { brand: 'Wilson', series: 'ULTRA' }, { brand: 'HEAD', series: 'Radical' }, { brand: 'YONEX', series: 'EZONE' }
          ];
        }
      } else if (gender === '女性') {
        if (performance === '操作性・コントロール' || performance === '精密なコントロール') {
          recommendations = [
            { brand: 'Wilson', series: 'BLADE' }, { brand: 'Babolat', series: 'Pure Strike' },{ brand: 'Babolat', series: 'Pure Aero' }, { brand: 'YONEX', series: 'PERCEPT' }, { brand: 'HEAD', series: 'Speed' }, { brand: 'HEAD', series: 'Radical' }
          ];
        } else if (performance === 'パワー・スピン') {
          recommendations = [
            { brand: 'Wilson', series: 'BURN' }, { brand: 'YONEX', series: 'VCORE' }, { brand: 'HEAD', series: 'Extreme' }
          ];
        } else if (performance === '快適性・打感') {
          recommendations = [
            { brand: 'YONEX', series: 'EZONE' }, { brand: 'HEAD', series: 'Boom' }, { brand: 'Wilson', series: 'ULTRA' }
          ];
        } else if (performance === 'オールラウンド') {
          recommendations = [
            { brand: 'Babolat', series: 'Pure Drive' }, { brand: 'Wilson', series: 'ULTRA' }, { brand: 'HEAD', series: 'Radical' }, { brand: 'YONEX', series: 'EZONE' }
          ];
        }
      }
    }
    return recommendations;
  };

  const renderQuiz = () => {
    switch (screen) {
      case 'quiz':
        return (
          <div className="question-container">
            <h2>1. 性別</h2>
            <div className="option-group">
              <button
                onClick={() => handleSelect('gender', '男性')}
                className={answers.gender === '男性' ? 'selected' : ''}
              >男性</button>
              <button
                onClick={() => handleSelect('gender', '女性')}
                className={answers.gender === '女性' ? 'selected' : ''}
              >女性</button>
            </div>
            <h2>2. あなたのテニス歴</h2>
            <div className="option-group">
              <button
                onClick={() => handleSelect('experience', '初心者')}
                className={answers.experience === '初心者' ? 'selected' : ''}
              >
                初心者
                <p className="description">テニスをこれから始める、または、始めたばっかりで自分に合うテニスラケットや自分のプレイスタイルがわからない方。</p>
              </button>
              <button
                onClick={() => handleSelect('experience', '中級者')}
                className={answers.experience === '中級者' ? 'selected' : ''}
              >
                中級者
                <p className="description">テニス経験がある程度あり、自分のプレイスタイルが何となくわかってきて、テニスラケットを真剣に探したい方。</p>
              </button>
              <button
                onClick={() => handleSelect('experience', '上級者')}
                className={answers.experience === '上級者' ? 'selected' : ''}
              >
                上級者
                <p className="description">テニス経験が豊富で、すでに自分好みのテニスラケットがあるが、新しく自分に合ったラケットを探している方。</p>
              </button>
            </div>
            <button className="next-button" onClick={handleNext}>次へ</button>
          </div>
        );
      case 'novice_question':
        return (
          <div className="question-container">
            <h2>自分の腕力</h2>
            <div className="option-group">
              <button
                onClick={() => handleSelect('strength', '腕力に自信がある')}
                className={answers.strength === '腕力に自信がある' ? 'selected' : ''}
              >腕力に自信がある</button>
              <button
                onClick={() => handleSelect('strength', '平均的な腕力')}
                className={answers.strength === '平均的な腕力' ? 'selected' : ''}
              >平均的な腕力</button>
              <button
                onClick={() => handleSelect('strength', '腕力に自信がない')}
                className={answers.strength === '腕力に自信がない' ? 'selected' : ''}
              >腕力に自信がない</button>
            </div>
            <button className="next-button" onClick={handleNext}>次へ</button>
          </div>
        );
      case 'intermediate_question':
        return (
          <div className="question-container">
            <h2>自分のプレイスタイル</h2>
            <div className="option-group">
              <button
                onClick={() => handleSelect('playStyle', 'オールラウンドプレイヤー')}
                className={answers.playStyle === 'オールラウンドプレイヤー' ? 'selected' : ''}
              >
                オールラウンドプレイヤー
                <p className="description">すべてのショットをバランス良く打ち分けたいプレイヤー。どんな状況にも対応できる汎用性の高いラケットが適しています。</p>
              </button>
              <button
                onClick={() => handleSelect('playStyle', 'アグレッシブベースライナー')}
                className={answers.playStyle === 'アグレッシブベースライナー' ? 'selected' : ''}
              >
                アグレッシブベースライナー
                <p className="description">コート後方から強力なストロークで攻めたいプレイヤー。特にスピン性能やパワーアシストがあるラケットがおすすめです。</p>
              </button>
              <button
                onClick={() => handleSelect('playStyle', 'サービス＆ボレーヤー')}
                className={answers.playStyle === 'サービス＆ボレーヤー' ? 'selected' : ''}
              >
                サービス＆ボレーヤー
                <p className="description">サーブで攻め、ネットに出てポイントを決めたいプレイヤー。正確なコントロールと、ボレーでの繊細な感覚が求められます。</p>
              </button>
              <button
                onClick={() => handleSelect('playStyle', 'カウンターパンチャー')}
                className={answers.playStyle === 'カウンターパンチャー' ? 'selected' : ''}
              >
                カウンターパンチャー
                <p className="description">相手のショットに素早く反応し、カウンターを狙うプレイヤー。操作性と打球の安定性が高いラケットが向いています。</p>
              </button>
            </div>
            <button className="next-button" onClick={handleNext}>次へ</button>
          </div>
        );
      case 'advanced_question':
        return (
          <div className="question-container">
            <h2>ラケットに求める性能</h2>
            <div className="option-group">
              <button
                onClick={() => handleSelect('performance', '精密なコントロール')}
                className={answers.performance === '精密なコントロール' ? 'selected' : ''}
              >精密なコントロール</button>
              <button
                onClick={() => handleSelect('performance', 'パワー・スピン')}
                className={answers.performance === 'パワー・スピン' ? 'selected' : ''}
              >パワー・スピン</button>
              <button
                onClick={() => handleSelect('performance', '快適性・打感')}
                className={answers.performance === '快適性・打感' ? 'selected' : ''}
              >快適性・打感</button>
              <button
                onClick={() => handleSelect('performance', 'オールラウンド')}
                className={answers.performance === 'オールラウンド' ? 'selected' : ''}
              >オールラウンド</button>
            </div>
            <button className="next-button" onClick={handleNext}>次へ</button>
          </div>
        );
      case 'result':
        const recommendedRackets = getRecommendation();
        const recommendationList = recommendedRackets.map((racket, index) => (
          <li key={index}>
            <Link to={`/rackets/${racket.series}`}>
              {racket.brand}: {racket.series}
            </Link>
          </li>
        ));
        
        const userAnswers = (
          <div className="user-answers">
            <h3>あなたの選択肢</h3>
            <p><strong>性別:</strong> {answers.gender}</p>
            <p><strong>テニス歴:</strong> {answers.experience}</p>
            {answers.experience === '初心者' && <p><strong>腕力:</strong> {answers.strength}</p>}
            {answers.experience === '中級者' && <p><strong>プレイスタイル:</strong> {answers.playStyle}</p>}
            {answers.experience === '上級者' && <p><strong>求める性能:</strong> {answers.performance}</p>}
          </div>
        );

        return (
          <div className="result-container">
            <h2>あなたにおすすめのラケットのシリーズは...</h2>
            <p>シリーズをクリックして自分に合ったラケットを選択しよう！</p>
            <ul className="recommendation-list">
              {recommendationList}
            </ul>
            {userAnswers}
            <button className="reset-button" onClick={handleReset}>もう一度診断する</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          screen === 'start' ? (
            <header className="App-header">
              <h1 className="title" onClick={handleStartClick}>
                What is <span className="green-text">Your Racket?</span>
              </h1>
              <p className="start-text">クリックまたはタップして開始</p>
            </header>
          ) : (
            <main className="App-main">
              {renderQuiz()}
            </main>
          )
        } />
        <Route path="/rackets/:series" element={<RacketDetail />} />
      </Routes>
    </div>
  );
}

export default App;