import { useState } from "react";

const questions = [
  {
    q: "1. 周末你通常怎么过？",
    options: ["一个人躺平放空", "和朋友小聚聊天", "待在家做自己的事", "和家人出去走走"],
    map: ["I","E","I","E"]
  },
  {
    q: "2. 到一个新环境时你一般会：",
    options: ["尽量保持安静", "先观察一段时间再发言", "很快和人聊起来", "慢慢熟悉周围的人"],
    map: ["I","I","E","E"]
  },
  {
    q: "3. 别人眼中的你更像：",
    options: ["存在感比较低", "朋友很多很好相处", "气氛担当，很外向", "比较安静低调"],
    map: ["I","E","E","I"]
  },
  {
    q: "4. 情绪上来时你通常会：",
    options: ["很少表现出来", "看对象再决定", "在社交媒体上倾诉", "直接说出来"],
    map: ["I","E","I","E"]
  },
  {
    q: "5. 社交一整天后你感觉：",
    options: ["需要很久恢复", "还有精神", "想一个人待着", "有点累但开心"],
    map: ["I","E","I","E"]
  },

  {
    q: "6. 你做决定更常这样做：",
    options: ["跟着突然冒出来的想法走", "经验+当下情况", "参考以前的经验", "尝试新的可能性"],
    map: ["N","S","S","N"]
  },
  {
    q: "7. 听歌时你更容易被打动的是：",
    options: ["曲调旋律", "情绪共鸣", "整体编排", "歌词内容"],
    map: ["S","N","S","N"]
  },
  {
    q: "8. 做选择时你更像：",
    options: ["想到就先做再说", "现实+感觉一起考虑", "先看现实能不能做", "觉得对就想试试"],
    map: ["N","S","S","N"]
  },
  {
    q: "9. 在平时与人交流时，你更喜欢哪种表达：",
    options: ["带例子更好理解", "说重点就好", "有画面感的表达", "带个人情绪的表达"],
    map: ["S","S","N","N"]
  },
  {
    q: "10. 你放空时会喜欢想：",
    options: ["对身边人事物的感受", "现实问题怎么解决", "长远的未来会怎样发展", "对未完成事情的安排"],
    map: ["N","S","N","S"]
  },

  {
    q: "11. 朋友难过时你通常会：",
    options: ["陪着TA就好", "帮TA分析问题", "共情TA的情绪", "安慰并给建议"],
    map: ["F","T","F","T"]
  },
  {
    q: "12. 做选择时，你更容易受以下哪方面影响：",
    options: ["当下的情绪", "有没有道理", "自己舒不舒服", "能否帮助他人"],
    map: ["F","T","F","T"]
  },
  {
    q: "13. 你欣赏的人通常是：",
    options: ["情绪细腻的人", "理性清醒的人", "温柔体贴的人", "有规划的人"],
    map: ["F","T","F","T"]
  },
  {
    q: "14. 发生争执时你通常会：",
    options: ["情绪容易上来", "讲清楚道理", "先冷静下来", "解释清楚误会"],
    map: ["F","T","F","T"]
  },
  {
    q: "15. 一段关系里你最在意：",
    options: ["情绪连接", "原则清楚", "相处舒服", "稳定可靠"],
    map: ["F","T","F","T"]
  },

  {
    q: "16. 出去旅行前你一般会：",
    options: ["边走边看", "安排好所有行程", "做个大致计划", "基本不做计划"],
    map: ["P","J","J","P"]
  },
  {
    q: "17. 做事情时你更像：",
    options: ["看状态走一步算一步", "按照计划稳稳推进", "到死线集中冲一波", "有计划但会调整节奏"],
    map: ["P","J","P","J"]
  },
  {
    q: "18. 你最受不了：",
    options: ["被别人控制", "混乱无序", "被限制自由", "计划被打乱"],
    map: ["P","J","P","J"]
  },
  {
    q: "19. 别人觉得你更像：",
    options: ["很有灵气", "很有掌控感", "自由随性", "稳定靠谱"],
    map: ["P","J","P","J"]
  },
  {
    q: "20. 时间很紧时你通常会：",
    options: ["容易慌但会补救", "提前规划避免压力", "压力来了才爆发", "加快节奏处理"],
    map: ["P","J","P","J"]
  },
];

const singers = [
  { name: "蔡健雅", type: "INTJ" },
  { name: "魏如萱", type: "INTP" },
  { name: "张惠妹", type: "ENTJ" },
  { name: "戴佩妮", type: "ENTP" },
  { name: "田馥甄", type: "INFJ" },
  { name: "陈绮贞", type: "INFP" },
  { name: "A-Lin", type: "ENFJ" },
  { name: "徐佳莹", type: "ENFP" },
  { name: "彭佳慧", type: "ISTJ" },
  { name: "梁静茹", type: "ISFJ" },
  { name: "蔡依林", type: "ESTJ" },
  { name: "Ella", type: "ESFJ" },
  { name: "孙燕姿", type: "ISTP" },
  { name: "王心凌", type: "ISFP" },
  { name: "杨丞琳", type: "ESFP" },
  { name: "萧亚轩", type: "ESTP" }
];

export default function App() {
  const [index, setIndex] = useState(0);

  const [scores, setScores] = useState({
    I: 0, E: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });

  const [result, setResult] = useState(null);

  const handle = (i) => {
    const type = questions[index].map[i];
    const newScores = { ...scores };

    // ✔ 维度计分
    newScores[type[0]] += 1;
    newScores[type[1]] += 1;

    setScores(newScores);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const mbti =
        (newScores.I >= newScores.E ? "I" : "E") +
        (newScores.S >= newScores.N ? "S" : "N") +
        (newScores.T >= newScores.F ? "T" : "F") +
        (newScores.J >= newScores.P ? "J" : "P");

      // 🎲 概率模型（高级核心）
      const ranked = singers.map(s => {
        let score = 0;

        if (s.type[0] === mbti[0]) score += 40;
        if (s.type[1] === mbti[1]) score += 40;
        if (s.type[2] === mbti[2]) score += 40;
        if (s.type[3] === mbti[3]) score += 40;

        // 🔥 随机扰动（关键）
        score += Math.random() * 20;

        return { ...s, score };
      });

      const sorted = ranked
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setResult(sorted);
    }
  };

  if (result) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h1>🎤 你的女歌手人格结果</h1>

        <h2>🥇 最像：</h2>
        <h1>{result[0]?.name}</h1>

        <h2>🥈 也很像：</h2>
        <p>{result[1]?.name}</p>

        <h2>🥉 还有点像：</h2>
        <p>{result[2]?.name}</p>

        <button onClick={() => location.reload()}>
          再测一次
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>{questions[index].q}</h2>

      {questions[index].options.map((o, i) => (
        <button
          key={i}
          onClick={() => handle(i)}
          style={{
            display: "block",
            width: "100%",
            marginTop: 10,
            padding: 12
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
