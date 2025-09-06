import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RacketDetail = () => {
  const { series } = useParams();
  const navigate = useNavigate();

  // 以前に記憶したすべてのラケットシリーズのデータ
  const racketData = {
    'EZONE': {
      features: 'アイソメトリック形状により、スイートスポットを外しても安定した返球が可能で、ミスの軽減につながります。振動吸収性に優れ、腕や肘への負担を軽減します。',
      models: [
        { model: 'EZONE 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23.0〜26.5mm', balance: '320mm', pattern: 'タテ16×ヨコ19', grip: '1, 2, 3' },
        { model: 'EZONE 100 L', face: '100平方インチ', weight: '285g', length: '27インチ', thickness: '23.0〜26.5mm', balance: '325mm', pattern: 'タテ16×ヨコ19', grip: '0, 1, 2' },
        { model: 'EZONE 100 SL', face: '100平方インチ', weight: '270g', length: '27インチ', thickness: '23.0〜26.5mm', balance: '330mm', pattern: 'タテ16×ヨコ18', grip: '0, 1, 2' },
        { model: 'EZONE 100 ツアー', face: '100平方インチ', weight: '310g', length: '27インチ', thickness: '23.0〜26.5mm', balance: '315mm', pattern: 'タテ16×ヨコ19', grip: '2, 3' },
        { model: 'EZONE 98', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '19.5〜24.5mm', balance: '315mm', pattern: 'タテ16×ヨコ19', grip: '2, 3' },
        { model: 'EZONE 98 L', face: '98平方インチ', weight: '285g', length: '27インチ', thickness: '19.5〜24.5mm', balance: '330mm', pattern: 'タテ16×ヨコ19', grip: '1, 2' },
        { model: 'EZONE 105', face: '105平方インチ', weight: '275g', length: '27インチ', thickness: '23.5〜26.5mm', balance: '330mm', pattern: 'タテ16×ヨコ19', grip: '1, 2' },
        { model: 'EZONE 110', face: '110平方インチ', weight: '255g', length: '27.5インチ', thickness: '24.0〜29.0mm', balance: '335mm', pattern: 'タテ16×ヨコ18', grip: '1, 2' },
        { model: 'EZONE 115', face: '115平方インチ', weight: '250g', length: '27.5インチ', thickness: '25.0〜29.5mm', balance: '360mm', pattern: 'タテ16×ヨコ18', grip: '1, 2' },
      ],
    },
    'PERCEPT': {
      features: '非常に柔らかくホールド感のある打感と、ボールの飛び、コントロール性能のバランスが良いラケットです。操作性が高く、フィーリング系でありながらもパワーがあり、疲れにくいという特徴も持っています。',
      models: [
        { model: 'PERCEPT 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PERCEPT 100D', face: '100平方インチ', weight: '305g', length: '27インチ', thickness: '23mm', balance: '315mm', pattern: 'タテ18×ヨコ19' },
        { model: 'PERCEPT 100L', face: '100平方インチ', weight: '280g', length: '27インチ', thickness: '23mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PERCEPT 97', face: '97平方インチ', weight: '310g', length: '27インチ', thickness: '21mm', balance: '310mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PERCEPT 97D', face: '97平方インチ', weight: '320g', length: '27インチ', thickness: '21mm', balance: '310mm', pattern: 'タテ18×ヨコ20' },
        { model: 'PERCEPT 104', face: '104平方インチ', weight: '290g', length: '27インチ', thickness: '22mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'VCORE': {
      features: 'VCOREシリーズは、スピン性能とパワーを重視したラケットです。空気抵抗を減らしスウィングスピードを向上させ、ボールの回転数と高さをアップさせます。シリコーンオイルを浸透させたグロメットがストリングの動きを滑らかにし、高速スピンを実現します。',
      models: [
        { model: 'VCORE 95', face: '95平方インチ', weight: '310g', length: '27インチ', thickness: '22.0/22.0/21.0mm', balance: '310mm', pattern: 'タテ16×ヨコ20' },
        { model: 'VCORE 98', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '23.0/23.0/21.0mm', balance: '315mm', pattern: 'タテ16×ヨコ19' },
        { model: 'VCORE 98L', face: '98平方インチ', weight: '285g', length: '27インチ', thickness: '23.0/23.0/21.0mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'VCORE 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '25.3/25.3/22.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'VCORE 100L', face: '100平方インチ', weight: '280g', length: '27インチ', thickness: '25.3/25.3/22.0mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'VCORE 104', face: '104平方インチ', weight: '290g', length: '27インチ', thickness: '22mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Pure Drive': {
      features: 'Pure Driveは、シリーズの代名詞である「パワー」と「スピード」が特徴のラケットです。フレーム剛性が高く、少ない力でもボールをパワフルに弾き飛ばし、爆速のスピードボールを打ちやすいと評価されています。',
      models: [
        { model: 'Pure Drive', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23/26/23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Drive 98', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21/23/22mm', balance: '325mm', pattern: 'タテ16×ヨコ20' },
        { model: 'Pure Drive 107', face: '107平方インチ', weight: '285g', length: '27インチ', thickness: '23/26/23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Drive LITE', face: '100平方インチ', weight: '270g', length: '27インチ', thickness: '23/26/23mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Drive SUPER LITE', face: '100平方インチ', weight: '255g', length: '26.5インチ', thickness: '23/26/23mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Drive TOUR', face: '100平方インチ', weight: '315g', length: '27インチ', thickness: '23/26/23mm', balance: '315mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Pure Aero': {
      features: 'Pure Aeroシリーズは、強力なスピンとパワーを追求したラケットです。空気抵抗を抑えるエアロダイナミックフレームと、最新の振動吸収システムによって、快適な打球感と安定したパワーショットの両立を実現しています。',
      models: [
        { model: 'Pure Aero 98', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21.0-23.0-22.0mm', balance: '315mm', pattern: 'タテ16×ヨコ20' },
        { model: 'Pure Aero', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23.0-26.0-23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Aero Team', face: '100平方インチ', weight: '285g', length: '27インチ', thickness: '23.0-26.0-23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Aero Lite', face: '100平方インチ', weight: '270g', length: '27インチ', thickness: '23.0-26.0-23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Aero Rafa', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23.0-26.0-23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Aero Plus', face: '100平方インチ', weight: '300g', length: '27.5インチ', thickness: '23.0-26.0-23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Pure Strike': {
      features: '打球感が硬すぎず柔らかすぎない「マイルドな打感」と、高いコントロール性能が特徴のラケットです。スピン性能が向上し、ボールを少し掴んでから飛ばす感覚が強くなっています。',
      models: [
        { model: 'Pure Strike 100 16/20', face: '100平方インチ', weight: '305g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '310mm', pattern: 'タテ16×ヨコ20' },
        { model: 'Pure Strike 98 16/19', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Strike 98 18/20', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '320mm', pattern: 'タテ18×ヨコ20' },
        { model: 'Pure Strike 97', face: '97平方インチ', weight: '310g', length: '27インチ', thickness: '21.0〜22.0mm', balance: '310mm', pattern: 'タテ16×ヨコ20' },
        { model: 'Pure Strike 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Strike TEAM', face: '100平方インチ', weight: '285g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'Pure Strike LITE', face: '100平方インチ', weight: '265g', length: '27インチ', thickness: '21.0〜23.0mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'ULTRA': {
      features: 'Wilson Ultraシリーズは、「ウルトラ」という名にふさわしい爆発的なパワーが特徴です。高いボールスピードと安定したコントロール性能を両立し、振動吸収性も高く、手首や肘への負担を軽減します。',
      models: [
        { model: 'ULTRA 98', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '24.5/24.5/24.5mm', balance: '325mm', pattern: 'タテ16×ヨコ20' },
        { model: 'ULTRA 98 TOUR', face: '98平方インチ', weight: '315g', length: '27インチ', thickness: '24.5/24.5/24.5mm', balance: '315mm', pattern: 'タテ16×ヨコ20' },
        { model: 'ULTRA 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '24.5/24.5/24.5mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'ULTRA 100 L', face: '100平方インチ', weight: '280g', length: '27インチ', thickness: '24.5/24.5/24.5mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'ULTRA 100 V4', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '24.5/26.5/24.5mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'ULTRA 100 J', face: '100平方インチ', weight: '270g', length: '27インチ', thickness: '24.5/26.5/24.5mm', balance: '335mm', pattern: 'タテ16×ヨコ18' },
      ],
    },
    'BLADE': {
      features: 'Wilson Bladeシリーズは、その高い「しなり」と「柔らかい打感」が特徴の、コントロール系ラケットです。優れたフィーリングと安定性を実現し、高いコントロール性能で正確なショットを打ち込めます。',
      models: [
        { model: 'BLADE 98 (16x19)', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BLADE 98 (18x20)', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '21mm', balance: '320mm', pattern: 'タテ18×ヨコ20' },
        { model: 'BLADE 98S V9', face: '98平方インチ', weight: '295g', length: '27インチ', thickness: '21mm', balance: '325mm', pattern: 'タテ18×ヨコ16' },
        { model: 'BLADE 100', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '22mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BLADE 100L', face: '100平方インチ', weight: '285g', length: '27インチ', thickness: '22mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BLADE 104', face: '104平方インチ', weight: '290g', length: '27.5インチ', thickness: '22mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'BURN': {
      features: 'Wilson Burnシリーズは、その名の通り、強烈なスピンとパワーを求めるプレーヤーのために開発されたラケットです。フレーム剛性が高く、硬い打感が特徴で、強力なショットをアシストします。',
      models: [
        { model: 'BURN 100 V5.0', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23.5-25.0-23.5mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BURN 100S V5.0', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23.5-25.0-23.5mm', balance: '325mm', pattern: 'タテ18×ヨコ16' },
        { model: 'BURN 100L V5.0', face: '100平方インチ', weight: '280g', length: '27インチ', thickness: '23.5-25.0-23.5mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BURN 100ULS V5.0', face: '100平方インチ', weight: '260g', length: '27インチ', thickness: '23.5-25.0-23.5mm', balance: '330mm', pattern: 'タテ18×ヨコ16' },
      ],
    },
    'PRO STAFF': {
      features: 'Wilson Pro Staffシリーズは、その歴史と伝統に裏打ちされた「最高の打球感とコントロール性能」が特徴です。薄いフレームと適度な重量がもたらす高い安定性で、正確なショットを可能にします。',
      models: [
        { model: 'PRO STAFF 97 V14', face: '97平方インチ', weight: '315g', length: '27インチ', thickness: '21.5mm', balance: '310mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PRO STAFF 97L V14', face: '97平方インチ', weight: '290g', length: '27インチ', thickness: '21.5mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PRO STAFF X V14', face: '100平方インチ', weight: '315g', length: '27インチ', thickness: '23.5mm', balance: '310mm', pattern: 'タテ16×ヨコ19' },
        { model: 'PRO STAFF SIX. ONE 100', face: '100平方インチ', weight: '305g', length: '27インチ', thickness: '22mm', balance: '320mm', pattern: 'タテ18×ヨコ19' },
        { model: 'PRO STAFF SIX. ONE 95', face: '95平方インチ', weight: '310g', length: '27インチ', thickness: '22mm', balance: '315mm', pattern: 'タテ16×ヨコ18' },
      ],
    },
    'Speed': {
      features: 'HEAD Speedシリーズは、その名の通り、スピードと操作性を追求したラケットです。Auxetic 2.0テクノロジーにより、打球感が柔らかく、ボールを掴む感覚が強いと評価されています。',
      models: [
        { model: 'SPEED PRO', face: '100平方インチ', weight: '310g', length: '27インチ', thickness: '23mm', balance: '310mm', pattern: 'タテ18×ヨコ20' },
        { model: 'SPEED MP', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'SPEED MP L', face: '100平方インチ', weight: '285g', length: '27インチ', thickness: '23mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'SPEED TEAM', face: '100平方インチ', weight: '275g', length: '27インチ', thickness: '23mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'SPEED TEAM L', face: '100平方インチ', weight: '265g', length: '27インチ', thickness: '23mm', balance: '340mm', pattern: 'タテ16×ヨコ19' },
        { model: 'SPEED JR. 25', face: '100平方インチ', weight: '230g', length: '25インチ', thickness: '23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'SPEED JR. 26', face: '100平方インチ', weight: '250g', length: '26インチ', thickness: '23mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Radical': {
      features: 'HEAD Radicalシリーズは、高い「コントロール性能」と「優れた振り抜き」が特徴の、オールラウンドなラケットです。Auxetic 2.0テクノロジーにより、柔らかくクリアな打球感と安定した精度を向上させています。',
      models: [
        { model: 'RADICAL PRO', face: '98平方インチ', weight: '315g', length: '27インチ', thickness: '20/21.5/21mm', balance: '315mm', pattern: 'タテ16×ヨコ19' },
        { model: 'RADICAL MP', face: '98平方インチ', weight: '300g', length: '27インチ', thickness: '20/21.5/21mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'RADICAL TEAM', face: '102平方インチ', weight: '280g', length: '27インチ', thickness: '22/25/23mm', balance: '325mm', pattern: 'タテ16×ヨコ19' },
        { model: 'RADICAL TEAM L', face: '102平方インチ', weight: '260g', length: '27インチ', thickness: '22/25/23mm', balance: '340mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Extreme': {
      features: 'HEAD Extremeシリーズは、強烈なスピン性能とパワーを求めるプレーヤーのために開発されました。ストリングパターンの目が粗く、スピン性能を最大限に引き出す設計になっています。',
      models: [
        { model: 'EXTREME TOUR', face: '98平方インチ', weight: '305g', length: '27インチ', thickness: '22/23/21mm', balance: '315mm', pattern: 'タテ16×ヨコ19' },
        { model: 'EXTREME MP', face: '100平方インチ', weight: '300g', length: '27インチ', thickness: '23/26/21mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'EXTREME TEAM', face: '100平方インチ', weight: '275g', length: '27インチ', thickness: '23/26/21mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'EXTREME TEAM L', face: '105平方インチ', weight: '260g', length: '27.2インチ', thickness: '23/26/21mm', balance: '340mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    'Boom': {
      features: 'HEAD Boomシリーズは、高いパワーと快適性を追求したラケットです。独自のAuxetic 2.0テクノロジーにより、スイートスポットが広く、オフセンターでもパワフルなショットを打つことができます。',
      models: [
        { model: 'BOOM PRO', face: '98平方インチ', weight: '310g', length: '27インチ', thickness: '22mm', balance: '315mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BOOM MP', face: '100平方インチ', weight: '295g', length: '27インチ', thickness: '24mm', balance: '320mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BOOM TEAM', face: '102平方インチ', weight: '275g', length: '27インチ', thickness: '26mm', balance: '330mm', pattern: 'タテ16×ヨコ19' },
        { model: 'BOOM TEAM L', face: '107平方インチ', weight: '260g', length: '27.4インチ', thickness: '26mm', balance: '340mm', pattern: 'タテ16×ヨコ19' },
      ],
    },
    // Princeシリーズのデータは提供されていないため省略
  };

  // ラケット技術解説のデータ（全シリーズ共通）
  const techData = {
    weight: {
      title: 'フレームレート（重さ）の違い',
      description: '筋力に自信があり、スイングスピードが速い方は、重いラケットを選ぶとより力強いボールを打つことができます。\n一方、軽いラケットは振り抜きが良いため、スイングのしやすさを重視する方に向いています。',
      ranges: [
        { range: '〜270g', info: '軽量' },
        { range: '270〜285g', info: 'やや軽量、女性向き' },
        { range: '285〜305g', info: '標準、男性標準、女性やや重い' },
        { range: '300〜310g', info: 'やや重い' },
        { range: '310g〜', info: '重い' },
      ],
    },
    faceSize: {
      title: 'フェイスサイズ（面の大きさ）の違い',
      description: 'フェイスが大きいラケットは、スイートスポット（ボールを打つのに最適な場所）が広くなるため、ミスヒットしにくく、初心者でも扱いやすいのが特徴です。\n一方、フェイスが小さいラケットは、スイートスポットが狭いものの、ボールを打ったときの感覚（打感）が手に伝わりやすく、より精密なショットを打ちたい方や、コントロール性能を重視する方に向いています。',
      ranges: [
        { range: '95平方インチ未満', info: '狭い' },
        { range: '95〜105平方インチ', info: '標準' },
        { range: '105平方インチ以上', info: '大きい' },
      ],
    },
    frameThickness: {
        title: 'フレーム厚（厚さ）の違い',
        description: 'フレームが厚いラケットは、少ない力でもボールを楽に飛ばせるため、パワーアシストを求める人や、力に自信がない方に向いています。\n一方、フレームが薄いラケットは、ボールを打ったときのパワーを抑え、より正確なコントロールを可能にします。筋力に自信がある方や、スイングが速い方は、こちらのタイプを選ぶとより意図した場所にボールを打つことができます。',
        example: '例：22mm/プロスタッフ97',
    },
    gripSize: {
        title: 'グリップサイズの違い',
        description: 'グリップサイズは手の大きさや個人の感覚によって最適なものが異なりますが、一般的にはサイズ2が最も多くの人に合うとされています。',
        ranges: [
            { range: '0', info: '' },
            { range: '1', info: '' },
            { range: '2', info: '' },
            { range: '3', info: '' },
            { range: '4', info: '' },
        ]
    },
    stringPattern: {
        title: 'ストリングパターン（目の細かさ）の違い',
        description: 'ストリングパターン（ガットの張り方）が粗いほど、ボールがストリングに食い込みやすくなり、より楽にボールを飛ばせたり、強いスピンをかけやすくなります。\n一方、ストリングパターンが細かいほど、ボールのコントロール性能が上がり、より正確なショットが打ちやすくなります。また、打球感は硬めになります。',
        ranges: [
            { range: '標準', info: '縦16×横19' },
            { range: '細かい', info: '縦18×横20' },
        ]
    },
    balance: {
        title: 'バランスの違い',
        description: 'バランス（重心）は、ラケットのどの位置に重心があるかを示します。ラケットの総重量が軽いモデルは、パワーを補うために、重心がラケットの先端（ヘッド）寄りになるように設計されるのが一般的です。',
        ranges: [
            { range: 'トップヘビー', info: '先端寄り (330mm〜)' },
            { range: 'イーブンバランス', info: '標準 (310〜330mm)' },
            { range: 'トップライト', info: '手元寄り (300〜310mm)' },
        ]
    }
  };

  const seriesData = racketData[series] || { features: '情報が見つかりません。', models: [] };

  const getTechTable = (data) => (
    <div className="tech-info tech-info-center">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <table>
        <tbody>
          {data.ranges && data.ranges.map((item, index) => (
            <tr key={index}>
              <td>{item.range}</td>
              <td>{item.info}</td>
            </tr>
          ))}
          {data.example && <tr><td colSpan="2">{data.example}</td></tr>}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="detail-container">
      <h2>{series} シリーズ</h2>
      <p>{seriesData.features}</p>
      
      <h3>モデル一覧</h3>
      <table className="model-table">
        <thead>
          <tr>
            <th>モデル名</th>
            <th>フェイス面積</th>
            <th>重量</th>
            <th>長さ</th>
            <th>フレーム厚</th>
            <th>バランスポイント</th>
            <th>ストリングパターン</th>
          </tr>
        </thead>
        <tbody>
          {seriesData.models.map((model, index) => (
            <tr key={index}>
              <td>{model.model}</td>
              <td>{model.face}</td>
              <td>{model.weight}</td>
              <td>{model.length}</td>
              <td>{model.thickness}</td>
              <td>{model.balance}</td>
              <td>{model.pattern}</td>
              {model.grip && <td>{model.grip}</td>}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>ラケットの選び方</h3>
      {getTechTable(techData.weight)}
      {getTechTable(techData.faceSize)}
      {getTechTable(techData.frameThickness)}
      {getTechTable(techData.gripSize)}
      {getTechTable(techData.stringPattern)}
      {getTechTable(techData.balance)}
      
      <button onClick={() => navigate(-1)}>診断結果に戻る</button>
    </div>
  );
};

export default RacketDetail;