import type { GrammarNote } from '../types';

// Original explanations and examples derived from the user-provided Integrated Chinese
// Level 1 Part 2 curriculum. PDF page references are one-based; source files are private.
export const icLevel1Part2Notes: GrammarNote[] = [
  {
    "id": "ic-l1p2-l11-comparison-bi",
    "pattern": "A 比 B + adjective",
    "title": "Comparing two people or things",
    "explanation": "Put the person or thing being described first, then 比 and the comparison standard, then the adjective. This asserts a difference in degree: A 比 B 高 means A is taller. The adjective acts as the predicate, so do not add 是 before it. A bare comparison normally does not take 很; 很高 describes being tall rather than specifying how much taller.",
    "level": 2,
    "examples": [
      {
        "zh": "这条河比那条河宽。",
        "en": "This river is wider than that river."
      },
      {
        "zh": "手写的地图比手机上的地图旧。",
        "en": "The handwritten map is older than the map on the phone."
      }
    ],
    "relatedTokens": [
      "比"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 35,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-comparison-gap",
    "pattern": "A 比 B + adjective + 一点儿 / 得多 / 多了",
    "title": "Expressing the size of a difference",
    "explanation": "Attach the amount of difference after the adjective. 一点儿 marks a small difference; 得多 and 多了 mark a large one. These phrases describe the comparison gap, so they follow 冷, 大, 贵, and similar adjectives. Do not move 一点儿 before the adjective or substitute 很 for the large-gap expressions.",
    "level": 2,
    "examples": [
      {
        "zh": "这杯茶比那杯茶凉一点儿。",
        "en": "This cup of tea is a little cooler than that one."
      },
      {
        "zh": "周末的车票比平日的贵得多。",
        "en": "Weekend tickets are much more expensive than weekday tickets."
      }
    ],
    "relatedTokens": [
      "比",
      "一点儿",
      "得多",
      "多了",
      "得"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 35,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 36,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      }
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l11-comparison-even",
    "pattern": "A 比 B + 更 / 还 + adjective",
    "title": "Saying that a difference is even greater",
    "explanation": "更 or 还 can precede the adjective in a 比 comparison to mean even more. They often build on an already notable quality: the first route is long, and the second is even longer. Here 还 is a degree adverb, not the still meaning or the verb 还 huán meaning return.",
    "level": 2,
    "examples": [
      {
        "zh": "旧房间很安静，新房间比旧房间还安静。",
        "en": "The old room is quiet; the new room is even quieter."
      },
      {
        "zh": "今天的练习比昨天的更容易。",
        "en": "Today’s exercise is even easier than yesterday’s."
      }
    ],
    "relatedTokens": [
      "比",
      "更",
      "还"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 36,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      }
    ],
    "tokenReadings": {
      "还": [
        "hái"
      ]
    }
  },
  {
    "id": "ic-l1p2-l11-comparison-equality",
    "pattern": "A 跟 / 和 B + (不)一样 + adjective",
    "title": "Comparing equal and unequal qualities",
    "explanation": "跟 or 和 connects the two comparison partners, and 一样 before an adjective says they have the same degree of that quality. 不一样 denies equality without saying which one has more. Thus 不一样大 means different in size, while 比…大 identifies the larger one. 一样 can also stand on its own when the relevant quality is understood.",
    "level": 2,
    "examples": [
      {
        "zh": "这两张照片一样清楚。",
        "en": "These two photos are equally clear."
      },
      {
        "zh": "我的杯子跟你的杯子不一样大。",
        "en": "My cup and yours are different sizes."
      }
    ],
    "relatedTokens": [
      "跟",
      "和",
      "一样",
      "不一样"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 36,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 45,
        "topic": "Comparative Sentences with 比 (I)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-le-new-situation",
    "pattern": "predicate + 了",
    "title": "A new state or situation with final 了",
    "explanation": "Sentence-final 了 points to a situation that has become relevant or different from before. It can follow an adjective, a verb, or a longer predicate; it does not simply put the sentence in the past. In a negative predicate it can announce a change too: 不…了 means an activity will no longer happen, and 没有…了 means something is no longer available. Keep the distinction from verb-final 了 that views an action as completed.",
    "level": 2,
    "examples": [
      {
        "zh": "天亮了，我们可以出发。",
        "en": "It is light now; we can set off."
      },
      {
        "zh": "我不坐出租车了，改坐地铁。",
        "en": "I am no longer taking a taxi; I will take the subway instead."
      },
      {
        "zh": "瓶子里没有水了。",
        "en": "There is no water left in the bottle."
      }
    ],
    "relatedTokens": [
      "了",
      "不",
      "没有"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 37,
        "topic": "The Particle 了 (III): 了 as a Sentence-Final Particle",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-hui-prediction",
    "pattern": "会 / 不会 + predicate",
    "title": "Predicting what will happen",
    "explanation": "会 before a predicate can express an expected event or likely outcome. It is a prediction rather than a special future tense: context can express future time without 会. Negate the prediction with 不会, and ask about it with 会不会 or a sentence ending in 吗. This use differs from 会 meaning a learned skill, such as 会游泳.",
    "level": 2,
    "examples": [
      {
        "zh": "天气预报说夜里会刮风。",
        "en": "The forecast says it will be windy at night."
      },
      {
        "zh": "他已经出发了，应该不会迟到。",
        "en": "He has already set off, so he probably will not be late."
      }
    ],
    "relatedTokens": [
      "会",
      "不会"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 38,
        "topic": "The Modal Verb 会 (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-adjective-diandian",
    "pattern": "adjective + (一)点儿",
    "title": "Adjusting a quality a little",
    "explanation": "Place (一)点儿 after an adjective for a small adjustment or comparison: 清楚一点儿 means a little clearer and 慢点儿 asks for a slower pace. 一 may be omitted. This differs from 一点儿 before a noun meaning a little of something and from 有点儿 before an adjective describing a somewhat undesirable state. In a 得 manner complement, the adjective still comes before 一点儿.",
    "level": 2,
    "examples": [
      {
        "zh": "请把字写大一点儿。",
        "en": "Please write the characters a little larger."
      },
      {
        "zh": "这条小路安静点儿，我们走这里吧。",
        "en": "This lane is a little quieter; let’s take it."
      }
    ],
    "relatedTokens": [
      "一点儿",
      "点儿"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 39,
        "topic": "Adj + (一)点儿",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-you-zai-repeat",
    "pattern": "又 + event / 再 + intended repetition",
    "title": "Repeating an event with 又 or 再",
    "explanation": "又 commonly reports a recurrence that has happened or is happening, while 再 commonly describes an intended or anticipated repetition. Put either adverb before the verb. The contrast is about how the recurrence is presented, not an absolute past-versus-future rule: context can also use 又 for an expected repeated occurrence. Do not confuse this temporal 又 with the paired description 又…又….",
    "level": 2,
    "examples": [
      {
        "zh": "门铃又响了，是快递员。",
        "en": "The doorbell has rung again; it is the courier."
      },
      {
        "zh": "这本书很好，我打算再读一遍。",
        "en": "This book is very good; I plan to read it again."
      }
    ],
    "relatedTokens": [
      "又",
      "再"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 50,
        "topic": "The Adverb 又",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 53,
        "topic": "The Adverb 又",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-concede-repeat",
    "pattern": "adjective / verb + 是 + same adjective / verb，可是…",
    "title": "Acknowledging a point before a reservation",
    "explanation": "Repeat a previously mentioned adjective or verb on both sides of 是 to concede that point, then add 可是 or 但是 and a reservation. The repeated phrase refers back to something already under discussion. It is not ordinary identity 是, and it is less suitable for introducing a completely new quality than 虽然…但是…. The subject can be stated once before the repeated predicate.",
    "level": 2,
    "examples": [
      {
        "zh": "便宜是便宜，可是这个包太小了。",
        "en": "It is cheap, admittedly, but this bag is too small."
      },
      {
        "zh": "我去是去，但是只能待半个小时。",
        "en": "I will go, but I can only stay for half an hour."
      }
    ],
    "relatedTokens": [
      "是",
      "可是",
      "但是"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 51,
        "topic": "Adj/V + 是 + Adj/V + 可是/但是",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 52,
        "topic": "Adj/V + 是 + Adj/V + 可是/但是",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-budan-erqie",
    "pattern": "(不但)…，而且…",
    "title": "Adding a stronger second point",
    "explanation": "不但 introduces a first fact and 而且 adds another related fact, often strengthening the description. With the same subject, that subject can precede 不但. The first marker may be omitted when 而且 still clearly links the facts. Use 而且 to complete the paired construction; 再说 is a reason-adding connector and cannot automatically replace it.",
    "level": 2,
    "examples": [
      {
        "zh": "这个展览不但有绘画，而且有雕塑。",
        "en": "This exhibition has not only paintings but also sculptures."
      },
      {
        "zh": "她唱得好，而且自己写歌。",
        "en": "She sings well and also writes her own songs."
      }
    ],
    "relatedTokens": [
      "不但",
      "而且"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 31,
        "topic": "不但…而且…",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 42,
        "topic": "不但…而且…",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 184,
        "topic": "不但…而且…",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-haishi-recommendation",
    "pattern": "还是 + alternative + 吧",
    "title": "Recommending an alternative",
    "explanation": "In a statement, 还是 can recommend the option that now seems preferable, often after a plan becomes impractical. Put the proposed action after 还是; final 吧 softens the advice. This differs from 还是 linking alternatives in a question, where the listener chooses between them.",
    "level": 2,
    "examples": [
      {
        "zh": "风太大了，我们还是在室内吃吧。",
        "en": "It is too windy; we had better eat indoors."
      },
      {
        "zh": "时间不早了，你还是明天再打电话吧。",
        "en": "It is getting late; you had better call tomorrow."
      }
    ],
    "relatedTokens": [
      "还是",
      "吧"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 52,
        "topic": "Plan B",
        "section": "Language Practice"
      }
    ]
  },
  {
    "id": "ic-l1p2-l11-zenme-le",
    "pattern": "(subject) 怎么了？",
    "title": "Asking what has gone wrong",
    "explanation": "怎么了 asks what has happened when a situation seems unusual. Add a person or thing as subject to ask about its condition. Final 了 makes the question concern a newly noticed situation. 怎么 in a longer question can also mean why when the speaker is surprised, rather than requesting a method.",
    "level": 2,
    "examples": [
      {
        "zh": "你的手怎么了？怎么这么红？",
        "en": "What happened to your hand? Why is it so red?"
      },
      {
        "zh": "电灯怎么了？刚才还亮着呢。",
        "en": "What is wrong with the light? It was still on a moment ago."
      }
    ],
    "relatedTokens": [
      "怎么",
      "怎么了",
      "了"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 47,
        "topic": "怎么了",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 11,
        "pdfPage": 196,
        "topic": "怎么了",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-negative-single",
    "pattern": "一 + classifier + noun + 也 / 都 + 不 / 没 + verb",
    "title": "Emphasizing not even one",
    "explanation": "Place 一 plus a suitable classifier and noun before 也 or 都, then the negation and verb, to deny every member of a set: not even one. Choose 不 for a habit, intention, or state and 没 for an event that did not occur. A previously mentioned noun can be moved to the topic position and omitted after the classifier. This order gives emphatic total negation; an ordinary 没有… sentence need not have the same emphasis.",
    "level": 2,
    "examples": [
      {
        "zh": "我一个生词也没忘。",
        "en": "I did not forget a single new word."
      },
      {
        "zh": "这些帽子她一顶都不喜欢。",
        "en": "She does not like any of these hats."
      }
    ],
    "relatedTokens": [
      "一",
      "也",
      "都",
      "不",
      "没"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 66,
        "topic": "一…也/都…不/没…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 67,
        "topic": "一…也/都…不/没…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-negative-any-amount",
    "pattern": "一点儿 + noun + 也 / 都 + 不 / 没 + verb",
    "title": "Denying even a small amount",
    "explanation": "For an uncountable quantity, use 一点儿 rather than a count classifier in the emphatic negative pattern. 一点儿 and the object come before 也 or 都 and the negated verb. The pattern means none at all, not merely a small quantity. 别 or 不要 can replace the ordinary negation in a request that absolutely excludes an ingredient or action.",
    "level": 2,
    "examples": [
      {
        "zh": "我今天一点儿咖啡也没喝。",
        "en": "I have not drunk any coffee at all today."
      },
      {
        "zh": "请一点儿辣椒都别放。",
        "en": "Please do not add any chili at all."
      }
    ],
    "relatedTokens": [
      "一点儿",
      "也",
      "都",
      "没",
      "别",
      "不要"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 67,
        "topic": "一…也/都…不/没…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 85,
        "topic": "一…也/都…不/没…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-negative-degree",
    "pattern": "一点儿 + 也 / 都 + 不 + adjective",
    "title": "Saying not at all",
    "explanation": "Before a negative adjective, 一点儿也不 or 一点儿都不 denies even a small degree of the quality. Here 一点儿 does not follow the adjective as it does in a small comparison gap. Use the whole negative construction before the adjective; it is not the affirmative 有点儿 + adjective pattern.",
    "level": 2,
    "examples": [
      {
        "zh": "这个房间一点儿也不暗。",
        "en": "This room is not dark at all."
      },
      {
        "zh": "走这条路一点儿都不麻烦。",
        "en": "Taking this route is no trouble at all."
      }
    ],
    "relatedTokens": [
      "一点儿",
      "也",
      "都",
      "不"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 68,
        "topic": "一…也/都…不/没…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-duo-shao-actions",
    "pattern": "多 / 少 + verb",
    "title": "Doing more or less of an action",
    "explanation": "多 and 少 before a verb adjust the amount or frequency of an action: 多练习 means practice more, 少开车 means drive less. They can introduce advice or a request and may be followed by an object. Do not treat them as an English-style more or less placed after the entire verb phrase.",
    "level": 2,
    "examples": [
      {
        "zh": "学新字时要多看，少猜。",
        "en": "When learning new characters, look more and guess less."
      },
      {
        "zh": "请少加一点儿糖，多放一点儿水果。",
        "en": "Please add less sugar and more fruit."
      }
    ],
    "relatedTokens": [
      "多",
      "少"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 68,
        "topic": "Adverb 多/少 + V",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-duo-shao-discrepancy",
    "pattern": "多 / 少 + verb + 了 + quantity",
    "title": "Reporting an excess or shortfall",
    "explanation": "多 or 少 before a completed action can indicate a difference from the required amount. The quantity after the verb states how much extra was done or how much was missing, not the total amount. Supply the expected amount in the context so that the excess or shortfall is clear.",
    "level": 2,
    "examples": [
      {
        "zh": "只需要六张票，你多买了两张。",
        "en": "Only six tickets are needed; you bought two too many."
      },
      {
        "zh": "名单上有十个人，我少写了一个。",
        "en": "There are ten people on the list; I left one out."
      }
    ],
    "relatedTokens": [
      "多",
      "少",
      "了"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 68,
        "topic": "Adverb 多/少 + V",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 69,
        "topic": "Adverb 多/少 + V",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-gang-gangcai",
    "pattern": "subject + 刚 + verb / (刚才) + subject + predicate",
    "title": "Distinguishing 刚 from 刚才",
    "explanation": "刚 is an adverb meaning just or only recently, normally directly before the verb phrase. 刚才 is a time expression meaning a moment ago, so it can precede the subject, combine with 的 before a noun, or introduce a negative predicate. 刚 can describe a short elapsed duration relative to a situation, such as only having been away for two days; 刚才 refers to the recent moment of speaking. Do not use 刚 as a direct substitute for a time noun before negation. The lesson’s neutral 刚 answers do not need a final new-situation 了; this does not ban aspectual 了 inside all sentences containing 刚.",
    "level": 2,
    "examples": [
      {
        "zh": "我刚打开电脑，邮件还没看。",
        "en": "I have just turned on the computer and have not read the email yet."
      },
      {
        "zh": "刚才我没听见，你能再说一遍吗？",
        "en": "I did not hear you a moment ago; could you say it again?"
      },
      {
        "zh": "她刚搬来两天，还不认识邻居。",
        "en": "She moved here only two days ago and does not know the neighbors yet."
      }
    ],
    "relatedTokens": [
      "刚",
      "刚才"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 69,
        "topic": "刚 vs. 刚才",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 70,
        "topic": "刚 vs. 刚才",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 71,
        "topic": "刚 vs. 刚才",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-resultatives-basics",
    "pattern": "verb + result complement + (了)",
    "title": "Naming the result of an action",
    "explanation": "A resultative complement immediately follows an action verb and states the outcome: 完 marks finishing, 对 or 错 identifies correctness, and 清楚 identifies clarity. The combination acts as a verb unit and precedes its object. Attempting an action alone does not guarantee its result. For a result that did not happen, place 没 or 没有 before the whole unit and normally omit completed-action 了. Learn natural verb-complement combinations rather than attaching any adjective to any verb.",
    "level": 2,
    "examples": [
      {
        "zh": "我算错了总数，需要再算一次。",
        "en": "I calculated the total incorrectly and need to calculate it again."
      },
      {
        "zh": "声音太小，我没听清楚。",
        "en": "The volume was too low; I did not hear clearly."
      }
    ],
    "relatedTokens": [
      "完",
      "对",
      "错",
      "清楚",
      "没"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 71,
        "topic": "Resultative Complements (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 72,
        "topic": "Resultative Complements (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 74,
        "topic": "Resultative Complements (I)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-hao-readiness",
    "pattern": "verb + 好 + (了)",
    "title": "Completing preparation and being ready",
    "explanation": "After an action verb, 好 often means the task has been completed satisfactorily so that the result is ready for the next step. 准备好 means ready after preparation and 收拾好 means finished tidying or packing. It is a result complement, not simply the adjective good attached to the object. Use 没…好 to say the task is not yet ready.",
    "level": 2,
    "examples": [
      {
        "zh": "我收拾好行李了，随时可以走。",
        "en": "I have packed my luggage and can leave at any time."
      },
      {
        "zh": "门票已经订好了，明天直接去就行。",
        "en": "The tickets have been booked; tomorrow we can go straight there."
      }
    ],
    "relatedTokens": [
      "好",
      "做好",
      "准备好"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 72,
        "topic": "好 as a Resultative Complement",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 73,
        "topic": "好 as a Resultative Complement",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 75,
        "topic": "好 as a Resultative Complement",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 115,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-adjective-reduplication",
    "pattern": "AA + 的",
    "title": "Describing a quality vividly",
    "explanation": "Certain single-syllable adjectives can be repeated, often followed by 的, to present a vivid or pleasant impression: 软软的 means nicely soft. This form can soften a description or express appreciation; it is not a general method for making every adjective stronger. It normally avoids 很 and a direct negative form. With the northern 儿 ending, a repeated adjective can have a changed tone on the second syllable. Learn which adjectives naturally use the pattern.",
    "level": 2,
    "examples": [
      {
        "zh": "面包软软的，闻起来很香。",
        "en": "The bread is pleasantly soft and smells good."
      },
      {
        "zh": "窗外的天蓝蓝的，一朵云也没有。",
        "en": "The sky outside is beautifully blue, without a single cloud."
      }
    ],
    "relatedTokens": [
      "的"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 82,
        "topic": "Reduplication of Adjectives",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-lai-request",
    "pattern": "来 + quantity + noun",
    "title": "Ordering or asking for another item",
    "explanation": "In casual ordering, 来 can replace bring, serve, or give when the intended service is obvious. Follow it with a quantity and the item requested. 再来 requests another serving or another performance. This colloquial shorthand is common with food, drinks, small purchases, and an encore; it is not a substitute for every action verb.",
    "level": 2,
    "examples": [
      {
        "zh": "请来三杯热豆浆。",
        "en": "Three cups of hot soy milk, please."
      },
      {
        "zh": "这个节目太有意思了，再来一个吧！",
        "en": "That performance was so interesting; do another one!"
      }
    ],
    "relatedTokens": [
      "来",
      "再"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 83,
        "topic": "The Verb 来",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 84,
        "topic": "The Verb 来",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-container-classifiers",
    "pattern": "number + 碗 / 杯 / 盘 + contents",
    "title": "Using a container as a measure word",
    "explanation": "A container noun can count a serving of what it contains. The number precedes 碗, 杯, or 盘 and the contents follow, so 三杯茶 counts three cupfuls of tea. To count an empty container as an object, use its ordinary object classifier instead, such as 三个杯子. 两, rather than 二, is usual before these serving measure words.",
    "level": 2,
    "examples": [
      {
        "zh": "桌上有两碗粥。",
        "en": "There are two bowls of congee on the table."
      },
      {
        "zh": "我们点了一盘炒饭和三杯水。",
        "en": "We ordered a plate of fried rice and three glasses of water."
      }
    ],
    "relatedTokens": [
      "碗",
      "杯",
      "盘",
      "两"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 62,
        "topic": "Container nouns as measure words",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-diandian-noun",
    "pattern": "verb + (一)点儿 + noun",
    "title": "A small amount and a softer request",
    "explanation": "Before a noun, (一)点儿 means a little or some. In requests it can soften the tone even when the speaker is not carefully measuring the amount. 一 is often omitted in casual speech. This noun-modifying form differs from adjective + 一点儿, which means a little more of a quality.",
    "level": 2,
    "examples": [
      {
        "zh": "给我留点儿汤，好吗？",
        "en": "Could you save me a little soup?"
      },
      {
        "zh": "我想买一点儿水果带回家。",
        "en": "I would like to buy some fruit to take home."
      }
    ],
    "relatedTokens": [
      "一点儿",
      "点儿"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 62,
        "topic": "点儿 before nouns",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-gou-predicate",
    "pattern": "noun + 够 / 不够",
    "title": "Saying something is sufficient",
    "explanation": "够 can describe whether an amount meets a need: 时间够 means there is enough time. In this use it is a predicate and does not directly go before a noun like English enough. Place the available resource before 够 or use 有足够的 + noun when you need a noun phrase. A following action can show what the amount is sufficient for.",
    "level": 2,
    "examples": [
      {
        "zh": "这些椅子够了，不用再搬。",
        "en": "These chairs are enough; there is no need to move any more."
      },
      {
        "zh": "我的时间不够，今天写不完。",
        "en": "I do not have enough time to finish writing today."
      }
    ],
    "relatedTokens": [
      "够",
      "不够"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 62,
        "topic": "够 as a predicate",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l12-ji-le",
    "pattern": "adjective / feeling predicate + 极了",
    "title": "Expressing an extreme degree",
    "explanation": "极了 after an adjective or a suitable feeling predicate expresses an exceptionally high degree. The phrase already supplies strong emphasis, so it is not necessary to add 很. It evaluates intensity and does not compare two specific items. It is a fixed degree-complement expression; 了 is part of the normal pattern.",
    "level": 2,
    "examples": [
      {
        "zh": "这座花园美极了。",
        "en": "This garden is exceptionally beautiful."
      },
      {
        "zh": "找到那封信以后，她高兴极了。",
        "en": "After finding the letter, she was absolutely delighted."
      }
    ],
    "relatedTokens": [
      "极",
      "极了"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 78,
        "topic": "极了 as a degree expression",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 83,
        "topic": "极了 as a degree expression",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-location-compounds",
    "pattern": "direction + 边 / 面 / 头",
    "title": "Forming words for positions and sides",
    "explanation": "Directions such as 上, 下, 前, 后, 左, 右, 东, 南, 西, 北, 里, and 外 form location words with 边 or 面; many also take 头. Learn the natural combinations: 左边, 北面, 里头, and 旁边. 中间 names the middle or the space between. These words can identify a side or follow a landmark. The suffix usually has a neutral tone, except the full first-tone 边 in 旁边. Compass combinations put east or west first: 东北 and 西南.",
    "level": 2,
    "examples": [
      {
        "zh": "入口在大楼的东面。",
        "en": "The entrance is on the east side of the building."
      },
      {
        "zh": "孩子站在两棵树中间。",
        "en": "The child is standing between two trees."
      }
    ],
    "relatedTokens": [
      "上",
      "下",
      "前",
      "后",
      "左",
      "右",
      "东",
      "南",
      "西",
      "北",
      "里",
      "外",
      "边",
      "面",
      "头",
      "旁边",
      "中间"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 96,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 97,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 109,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 121,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-noun-localizer",
    "pattern": "noun + 上 / 里 / (的) + location word",
    "title": "Making a location from a landmark",
    "explanation": "A common noun often needs a localizer to become a place expression: 箱子里 means inside the box and 墙上 means on the wall. Compound localizers such as 前面 or 外边 may follow a landmark with optional 的. City and country names already denote places, so normally use 在南京 rather than adding 里. Short 上 and 里 following a noun commonly have a neutral tone.",
    "level": 2,
    "examples": [
      {
        "zh": "钥匙在盒子里。",
        "en": "The key is in the box."
      },
      {
        "zh": "咖啡店在车站的旁边。",
        "en": "The cafe is beside the station."
      },
      {
        "zh": "他在成都工作。",
        "en": "He works in Chengdu."
      }
    ],
    "relatedTokens": [
      "上",
      "里",
      "里面",
      "前面",
      "外边",
      "旁边",
      "的"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 98,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 102,
        "topic": "Direction and Location Words",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-comparison-meiyou",
    "pattern": "A 没(有) B (那么) + adjective / state verb",
    "title": "Saying not as much as",
    "explanation": "In a comparison, 没 or 没有 before the standard says A falls short of B in the named quality. Optional 那么 introduces the standard’s degree. The predicate can be an adjective or a suitable degree-bearing verb such as 喜欢. Here 没有 is a comparison marker rather than a statement that A does not possess B.",
    "level": 2,
    "examples": [
      {
        "zh": "这家旅馆没有那家安静。",
        "en": "This hotel is not as quiet as that one."
      },
      {
        "zh": "我没有姐姐那么喜欢甜食。",
        "en": "I do not like sweets as much as my older sister does."
      }
    ],
    "relatedTokens": [
      "没",
      "没有",
      "那么"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 98,
        "topic": "Comparative Sentences with 没(有)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 99,
        "topic": "Comparative Sentences with 没(有)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 103,
        "topic": "Comparative Sentences with 没(有)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-comparison-bubi",
    "pattern": "A 不比 B + adjective",
    "title": "Saying no more than rather than less than",
    "explanation": "不比 denies the claim that A has more of a quality than B. A may have the same degree or a lower degree; 不比 by itself does not decide. 没有…高 specifically says less tall, while 不比…高 says not taller. The difference matters when responding to a comparison claim rather than establishing which item is smaller or worse.",
    "level": 2,
    "examples": [
      {
        "zh": "今天不比昨天忙，事情差不多一样多。",
        "en": "Today is no busier than yesterday; there is about the same amount to do."
      },
      {
        "zh": "这条路不比那条路近，也许还远一点儿。",
        "en": "This route is no shorter than that one; it may even be a little longer."
      }
    ],
    "relatedTokens": [
      "不比",
      "比",
      "不",
      "没有"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 99,
        "topic": "Comparative Sentences with 没(有)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 100,
        "topic": "Comparative Sentences with 没(有)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-name-degree",
    "pattern": "那么 + adjective / degree-bearing verb",
    "title": "Referring to that degree",
    "explanation": "那么 can point to a noticeable or previously mentioned degree: 那么贵 means that expensive or so expensive. It also precedes verbs that admit degrees, such as 喜欢, 想, or 希望. In 没有…那么…, the speaker says something does not reach the stated standard. 那么 in this use describes degree; it does not link a conclusion as then.",
    "level": 2,
    "examples": [
      {
        "zh": "行李那么重，你一个人怎么搬？",
        "en": "The luggage is so heavy; how will you move it by yourself?"
      },
      {
        "zh": "新版本没有你说的那么难用。",
        "en": "The new version is not as hard to use as you said."
      }
    ],
    "relatedTokens": [
      "那么"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 100,
        "topic": "那么 Indicating Degree",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 101,
        "topic": "那么 Indicating Degree",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-destination-purpose",
    "pattern": "到 + place + 去 + action",
    "title": "Going somewhere for a purpose",
    "explanation": "到 introduces the destination, 去 marks going there, and the following action names the purpose of the trip. The location phrase comes before the purposeful action. A simpler 去 + place + action often conveys the same idea. 来 can replace 去 when the movement is toward the speaker or another relevant reference point.",
    "level": 2,
    "examples": [
      {
        "zh": "我到邮局去寄包裹。",
        "en": "I am going to the post office to mail a parcel."
      },
      {
        "zh": "他们到河边去拍照片了。",
        "en": "They went to the riverside to take photos."
      }
    ],
    "relatedTokens": [
      "到",
      "去"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 101,
        "topic": "到 + Place + 去 + Action",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 105,
        "topic": "到 + Place + 去 + Action",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 106,
        "topic": "到 + Place + 去 + Action",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-guo-experience",
    "pattern": "verb + 过 + object",
    "title": "Reporting previous experience",
    "explanation": "Unstressed 过 after a verb says the action has occurred at least once before. It commonly establishes experience rather than narrating one completed episode. Negate it with 没 or 没有 before the verb and retain 过; a question can end in 吗 or use 有没有. A duration or number of occurrences may follow when relevant. Exact time is often omitted, although context can specify it. Distinguish this particle from stressed 过 guò meaning pass or celebrate.",
    "level": 2,
    "examples": [
      {
        "zh": "我修过自行车，可以帮你看看。",
        "en": "I have repaired bicycles before and can take a look for you."
      },
      {
        "zh": "她没住过海边，但很想试试。",
        "en": "She has never lived by the sea but would like to try."
      }
    ],
    "relatedTokens": [
      "过",
      "没",
      "没有"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 112,
        "topic": "The Dynamic Particle 过",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 113,
        "topic": "The Dynamic Particle 过",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 118,
        "topic": "The Dynamic Particle 过",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 119,
        "topic": "The Dynamic Particle 过",
        "section": "Grammar"
      }
    ],
    "tokenReadings": {
      "过": [
        "guo"
      ]
    }
  },
  {
    "id": "ic-l1p2-l13-verb-reduplication",
    "pattern": "verb + same verb / verb-object → verb verb object",
    "title": "Trying briefly or making a gentle request",
    "explanation": "Repeat an action verb to present it as brief, light, or exploratory and to soften a request. A single-syllable verb commonly gives AA, as in 想想 or 问问. In a verb-object expression, repeat the verb rather than the object: 散散步. A modal verb such as 想 remains unrepeated, so 想问问 is natural. This lesson emphasizes requested or anticipated actions; reduplication does not mean repeating an action several times.",
    "level": 2,
    "examples": [
      {
        "zh": "你问问前台，看看有没有空房。",
        "en": "Ask at reception and see whether there is a room available."
      },
      {
        "zh": "我想在附近散散步。",
        "en": "I would like to take a short walk nearby."
      }
    ],
    "relatedTokens": [
      "看看",
      "问问",
      "想想"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 114,
        "topic": "Reduplication of Verbs",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-wan",
    "pattern": "verb + 完",
    "title": "Reaching the end of a task",
    "explanation": "完 after a verb means the relevant task or quantity has been finished: 读完 says the reading reached its end, not merely that some reading took place. The object follows the combined verb. 没…完 says the task did not reach completion; it may still have begun. This differs from 好, which emphasizes readiness or satisfactory preparation.",
    "level": 2,
    "examples": [
      {
        "zh": "我还没读完这篇报道。",
        "en": "I have not finished reading this report yet."
      },
      {
        "zh": "客人把最后一壶茶喝完了。",
        "en": "The guests finished the last pot of tea."
      }
    ],
    "relatedTokens": [
      "完",
      "读完",
      "喝完"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 115,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-dao",
    "pattern": "verb + 到",
    "title": "Successfully reaching or obtaining a result",
    "explanation": "到 after a suitable verb marks successful attainment: 找到 means manage to find, 买到 means manage to buy or obtain, and 收到 means receive. An attempted action and its successful result are different. Negation 没…到 reports that the result was not attained. This resultative 到 differs from destination 到 before a place.",
    "level": 2,
    "examples": [
      {
        "zh": "我找到了那本旧词典。",
        "en": "I found that old dictionary."
      },
      {
        "zh": "车票太抢手，我们没买到。",
        "en": "The tickets were in such demand that we could not get any."
      }
    ],
    "relatedTokens": [
      "到",
      "找到",
      "买到",
      "看到",
      "听到"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 115,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-jian",
    "pattern": "看 / 听 + 见",
    "title": "Perceiving something successfully",
    "explanation": "见 is a result complement in 看见 and 听见. 看 or 听 names the attempt or activity, while 看见 or 听见 states that the sight or sound was actually perceived. 看到 and 听到 can often convey the same result. 见 here is pronounced jiàn; it is not a separate command to meet someone.",
    "level": 2,
    "examples": [
      {
        "zh": "隔着玻璃，我看见了院子里的猫。",
        "en": "Through the glass I saw the cat in the yard."
      },
      {
        "zh": "她戴着耳机，没听见门铃。",
        "en": "She was wearing headphones and did not hear the doorbell."
      }
    ],
    "relatedTokens": [
      "见",
      "看见",
      "听见"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 115,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-cuo-dui",
    "pattern": "verb + 错 / 对",
    "title": "Getting an action or its target wrong or right",
    "explanation": "错 or 对 after an action verb evaluates its result. 写错 may mean writing something incorrectly, while 买错 may mean buying the wrong item rather than performing the buying process incorrectly. Learn the intended whole combination. 没…对 denies success or correctness; it does not necessarily mean the action never happened.",
    "level": 2,
    "examples": [
      {
        "zh": "我拿错了钥匙，这把打不开门。",
        "en": "I took the wrong key; this one cannot open the door."
      },
      {
        "zh": "这道题终于答对了。",
        "en": "I finally answered this question correctly."
      }
    ],
    "relatedTokens": [
      "错",
      "对",
      "写错",
      "说错",
      "走错"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 71,
        "topic": "Resultative Complements (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 12,
        "pdfPage": 72,
        "topic": "Resultative Complements (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 116,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-dong",
    "pattern": "看 / 听 + 懂",
    "title": "Understanding what is read or heard",
    "explanation": "懂 after a perception verb says the information was understood. 看懂 is comprehension through reading or watching and 听懂 is comprehension through listening. Seeing or hearing something is not sufficient: 看见 and 听见 concern perception, whereas 看懂 and 听懂 concern meaning. 没听懂 reports failure to understand; 听不懂, introduced with potential complements, describes inability.",
    "level": 2,
    "examples": [
      {
        "zh": "我看见了告示，但是没看懂。",
        "en": "I saw the notice but did not understand it."
      },
      {
        "zh": "他说得很清楚，我听懂了。",
        "en": "He explained clearly and I understood what he said."
      }
    ],
    "relatedTokens": [
      "懂",
      "看懂",
      "听懂"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 116,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-qingchu",
    "pattern": "看 / 听 + 清楚",
    "title": "Achieving clear perception",
    "explanation": "清楚 after 看 or 听 describes seeing or hearing clearly. It is the result of the action, so it directly follows the verb without 得. Compare 听得清楚 as a manner or potential expression according to context. Clear perception and understanding are separate outcomes: someone can hear the words clearly without understanding them.",
    "level": 2,
    "examples": [
      {
        "zh": "灯太暗，我没看清楚门牌号。",
        "en": "The light was too dim; I did not see the door number clearly."
      },
      {
        "zh": "把音量调大以后，我听清楚了。",
        "en": "After turning up the volume, I heard it clearly."
      }
    ],
    "relatedTokens": [
      "清楚",
      "看清楚",
      "听清楚"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 116,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-result-hui",
    "pattern": "学 + 会",
    "title": "Acquiring an ability through learning",
    "explanation": "会 as the result in 学会 says that learning has produced an ability. 学 describes the learning process; 学会 says the learner can now do it. The skill may follow the compound verb. This differs from modal 会 before an action, which states existing ability or predicts an event. 没学会 means the learning has not yet produced mastery.",
    "level": 2,
    "examples": [
      {
        "zh": "她学会了用筷子。",
        "en": "She learned how to use chopsticks."
      },
      {
        "zh": "我练了很久，终于学会了这首曲子。",
        "en": "After practicing for a long time, I finally learned to play this piece."
      }
    ],
    "relatedTokens": [
      "会",
      "学会"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 116,
        "topic": "Resultative Complements (II)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-yi-jiu-sequence",
    "pattern": "一 + trigger，就 + response",
    "title": "As soon as and whenever",
    "explanation": "一 before a first action or state and 就 before a second link an immediate trigger and response. The pattern can describe one particular sequence or a habitual reaction whenever the first condition occurs. Each clause may have its own subject, and the second subject normally precedes 就. 一 is a linking marker here, not a count of one occurrence.",
    "level": 2,
    "examples": [
      {
        "zh": "消息一到，她就给大家打电话。",
        "en": "As soon as the message arrives, she calls everyone."
      },
      {
        "zh": "我一喝浓茶就睡不着。",
        "en": "Whenever I drink strong tea, I cannot sleep."
      }
    ],
    "relatedTokens": [
      "一",
      "就"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 117,
        "topic": "一…就…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 118,
        "topic": "一…就…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 120,
        "topic": "一…就…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-distance-li",
    "pattern": "place / person + 离 + reference place + 近 / 远 / distance",
    "title": "Measuring distance from a reference",
    "explanation": "离 introduces the place or person used as a distance reference. Put the entity being located first, then 离 plus the reference, then 近, 远, or a distance expression. 在 answers where something is; 离 describes how far away it is. Do not translate English from with 从 in this distance construction.",
    "level": 2,
    "examples": [
      {
        "zh": "我家离医院很近。",
        "en": "My home is very close to the hospital."
      },
      {
        "zh": "村子离车站有五公里。",
        "en": "The village is five kilometers from the station."
      }
    ],
    "relatedTokens": [
      "离",
      "近",
      "远"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 93,
        "topic": "Geography Bee",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 95,
        "topic": "Geography Bee",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 104,
        "topic": "Geography Bee",
        "section": "Language Practice"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-from-towards",
    "pattern": "从 + starting point；往 + direction + motion verb",
    "title": "Giving a route and a direction",
    "explanation": "从 names the starting point and 往 names the direction of movement, both before the relevant motion verb. A destination can be introduced with 到. 往左 or 往北 specifies a direction rather than a finished arrival. A route question can use 从 A 到 B 怎么走. Compass compounds use 东 or 西 first, such as 东南 and 西北.",
    "level": 2,
    "examples": [
      {
        "zh": "从桥边往南走，就能看到市场。",
        "en": "Walk south from the bridge and you will see the market."
      },
      {
        "zh": "从这里到博物馆怎么走？",
        "en": "How do I get from here to the museum?"
      }
    ],
    "relatedTokens": [
      "从",
      "往",
      "到",
      "东南",
      "东北",
      "西南",
      "西北"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 109,
        "topic": "How Do I Get There?",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 122,
        "topic": "How Do I Get There?",
        "section": "Language Practice"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-shang-destination",
    "pattern": "上 + destination / 上哪儿去",
    "title": "Casual 上 for going somewhere",
    "explanation": "In casual speech 上 can mean go to rather than climb or attend: 上哪儿去 asks where someone is headed. It can occur with a destination or with 哪儿, and 去 may be added at the end. Use 去 in a more neutral expression. 哪儿, 哪里, and 什么地方 all ask about a place, with regional preferences in speech.",
    "level": 2,
    "examples": [
      {
        "zh": "你这么早上哪儿去？",
        "en": "Where are you headed so early?"
      },
      {
        "zh": "我上市场买点儿东西。",
        "en": "I am going to the market to buy a few things."
      }
    ],
    "relatedTokens": [
      "上",
      "哪儿",
      "哪里",
      "什么地方"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 93,
        "topic": "上哪儿去 and location question words",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 94,
        "topic": "上哪儿去 and location question words",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l13-mei-wenti-guanxi",
    "pattern": "没问题 / 没关系",
    "title": "Assurance versus reassurance",
    "explanation": "没问题 accepts a request or assures someone that a task can be handled. 没关系 reassures someone that a mistake or inconvenience does not matter much, often after an apology. Both begin with 没, but their conversational functions differ. Choose the expression according to whether you are promising a solution or easing someone’s concern.",
    "level": 2,
    "examples": [
      {
        "zh": "帮你复印两份？没问题。",
        "en": "Make two copies for you? No problem."
      },
      {
        "zh": "杯子打破了也没关系，没有人受伤就好。",
        "en": "It does not matter that the cup broke; what matters is that no one was hurt."
      }
    ],
    "relatedTokens": [
      "没问题",
      "没关系"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 13,
        "pdfPage": 108,
        "topic": "没问题 vs. 没关系",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-progressive-ne",
    "pattern": "(正)在 + verb + (呢) / verb + 呢",
    "title": "Showing an action in progress",
    "explanation": "呢 at the end of an action clause can show that it is currently in progress. 在 before the verb also marks progress, and the two may be used together. 正在 emphasizes being right in the middle of the action. The reference time may be now or a past moment established by context; this is aspect, not an English present-tense ending. Do not move progressive 在 to the end of the sentence.",
    "level": 2,
    "examples": [
      {
        "zh": "我在整理照片呢，等一下。",
        "en": "I am sorting photos; please wait a moment."
      },
      {
        "zh": "昨天我到家的时候，爸爸正在做饭。",
        "en": "When I got home yesterday, Dad was cooking."
      }
    ],
    "relatedTokens": [
      "呢",
      "在",
      "正在",
      "正"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 135,
        "topic": "呢 Indicating an Action in Progress",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 136,
        "topic": "呢 Indicating an Action in Progress",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 137,
        "topic": "呢 Indicating an Action in Progress",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-verb-attributive",
    "pattern": "verb phrase + 的 + noun",
    "title": "Putting an action description before a noun",
    "explanation": "A verb or verb phrase can describe a following noun when connected with 的. The whole modifier comes before the noun: 昨天寄来的包裹 is the parcel sent here yesterday. The noun can be understood as a participant or target of the action, depending on the verb and context. Time expressions and adverbs remain inside the modifier before the verb. English who, that, or which does not require a separate relative pronoun in Chinese.",
    "level": 2,
    "examples": [
      {
        "zh": "刚修好的自行车在门口。",
        "en": "The bicycle that was just repaired is by the door."
      },
      {
        "zh": "正在排队的人都想买票。",
        "en": "The people who are lining up all want to buy tickets."
      }
    ],
    "relatedTokens": [
      "的"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 136,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 137,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 139,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-clause-attributive",
    "pattern": "subject + predicate + 的 + noun",
    "title": "Using a whole clause to identify a noun",
    "explanation": "A clause with its own subject can modify a noun through 的. Put that subject and predicate before 的, and place the head noun after it: 我朋友推荐的书 means the book my friend recommended. The head noun is understood as the omitted participant inside the modifier, so do not add a redundant pronoun for it. Several descriptions can appear before one noun when the meaning stays clear.",
    "level": 2,
    "examples": [
      {
        "zh": "邻居种的花开了。",
        "en": "The flowers the neighbor planted have bloomed."
      },
      {
        "zh": "你昨天提到的那个问题很重要。",
        "en": "The issue you mentioned yesterday is important."
      }
    ],
    "relatedTokens": [
      "的"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 136,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 137,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 138,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 139,
        "topic": "Verbal Phrases and Subject-Predicate Phrases Used as Attributives",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-duration-repeat",
    "pattern": "verb + object + repeated verb + (了) + duration",
    "title": "Giving the length of an action",
    "explanation": "A duration follows the verb whose length it measures. When a verb has an ordinary object, repeat the verb after the object and then give the duration: 练字练了… separates what was practiced from how long it lasted. A verb without an object can take the duration directly. Completed-event 了 can precede the duration for a finished episode; omit it for a habitual schedule. Ask with 多长时间. A preverb time expression normally establishes when or how often, not this postverb duration.",
    "level": 2,
    "examples": [
      {
        "zh": "她每天练字练四十分钟。",
        "en": "She practices handwriting for forty minutes every day."
      },
      {
        "zh": "昨晚我们聊天聊了两个小时。",
        "en": "Last night we chatted for two hours."
      }
    ],
    "relatedTokens": [
      "了",
      "多长时间",
      "小时",
      "分钟"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 147,
        "topic": "Time Duration",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 148,
        "topic": "Time Duration",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 153,
        "topic": "Time Duration",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 154,
        "topic": "Time Duration",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-duration-before-object",
    "pattern": "verb + (了) + duration + (的) + object",
    "title": "Placing duration before an activity object",
    "explanation": "An alternative to repeating a verb puts the duration directly after the verb, followed by optional 的 and the object. This order is especially natural for activity objects such as music, television, a language, or a course. It states how long the action lasts, not how many objects there are. These affirmative duration patterns do not by themselves mean not doing the action for that period; a non-action duration uses a different order.",
    "level": 2,
    "examples": [
      {
        "zh": "我听了半个小时的广播。",
        "en": "I listened to the radio for half an hour."
      },
      {
        "zh": "他打算学两年的中文。",
        "en": "He plans to study Chinese for two years."
      }
    ],
    "relatedTokens": [
      "的",
      "了"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 147,
        "topic": "Time Duration",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 148,
        "topic": "Time Duration",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-shi-de-details",
    "pattern": "(是) + known event detail + verb + 的",
    "title": "Focusing on details of an established event",
    "explanation": "When the event is already known to have happened, 是…的 highlights a detail such as when, where, how, with whom, or who did it. 是 immediately precedes the focused detail and can be omitted in ordinary affirmative speech; 的 closes the event description. Use questions such as 是什么时候…的 or 是谁…的 to ask for the missing detail. This construction does not merely announce that an event occurred and is not a replacement for every past statement.",
    "level": 3,
    "examples": [
      {
        "zh": "这张照片是姐姐在山上拍的。",
        "en": "This photo was taken by my older sister on the mountain."
      },
      {
        "zh": "你们是坐火车来的，还是坐汽车来的？",
        "en": "Did you come by train or by car?"
      }
    ],
    "relatedTokens": [
      "是",
      "的"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 148,
        "topic": "Sentences with 是…的",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 149,
        "topic": "Sentences with 是…的",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 150,
        "topic": "Sentences with 是…的",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 152,
        "topic": "Sentences with 是…的",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 153,
        "topic": "Sentences with 是…的",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-hai-still",
    "pattern": "还 + predicate / 还没 + event",
    "title": "A situation that continues",
    "explanation": "还 before the predicate means still, indicating that the state continues beyond a relevant point. 还没 + verb means not yet and often implies that the event is expected later. 还不 can describe a continuing negative state or intention. This use differs from 还 adding another item and from 还 in a comparison meaning even.",
    "level": 2,
    "examples": [
      {
        "zh": "雨还在下，我们再等一会儿。",
        "en": "It is still raining; let’s wait a little longer."
      },
      {
        "zh": "报告还没写完，不能发出去。",
        "en": "The report is not finished yet and cannot be sent out."
      }
    ],
    "relatedTokens": [
      "还",
      "还没",
      "还不"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 151,
        "topic": "还 (still)",
        "section": "Grammar"
      }
    ],
    "tokenReadings": {
      "还": [
        "hái"
      ]
    }
  },
  {
    "id": "ic-l1p2-l14-you-you-qualities",
    "pattern": "又 + adjective + 又 + adjective",
    "title": "Combining two related qualities",
    "explanation": "The paired 又…又… presents two qualities as applying together. It commonly combines qualities with a similar evaluation, such as two advantages or two drawbacks. It does not report that an action happened again. Use 不但…而且… or an explicit contrast when your purpose is to contrast differently evaluated qualities rather than group them.",
    "level": 2,
    "examples": [
      {
        "zh": "这家小店又干净又安静。",
        "en": "This small shop is both clean and quiet."
      },
      {
        "zh": "旧电脑又慢又重。",
        "en": "The old computer is both slow and heavy."
      }
    ],
    "relatedTokens": [
      "又"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 151,
        "topic": "又…又…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-guo-celebrate",
    "pattern": "过 + festival / occasion / life",
    "title": "The verb 过 for celebrating or living",
    "explanation": "Stressed 过 guò can be a full verb meaning spend, observe, or live through, as in 过节 or 过日子. It precedes its object. This is different from the unstressed experience particle 过 guo, which follows another verb. A full-verb 过 can itself take aspect marking when the sentence requires it.",
    "level": 2,
    "examples": [
      {
        "zh": "我们在老家过春节。",
        "en": "We celebrate Spring Festival in our hometown."
      },
      {
        "zh": "退休以后，他过着安静的日子。",
        "en": "After retiring, he leads a quiet life."
      }
    ],
    "relatedTokens": [
      "过",
      "过节",
      "过年",
      "过日子"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 131,
        "topic": "The lexical verb 过",
        "section": "Language Notes"
      }
    ],
    "tokenReadings": {
      "过": [
        "guò"
      ]
    }
  },
  {
    "id": "ic-l1p2-l14-yiwei-assumption",
    "pattern": "以为 + believed proposition",
    "title": "Reporting an assumption that may be wrong",
    "explanation": "以为 introduces what someone believed or assumed, often contrasted with facts that show the belief was mistaken. The clause after it states the assumed content without needing a word equivalent to English that. Compare 知道 for established knowledge and 觉得 for a current judgment; 以为 often invites a correction.",
    "level": 2,
    "examples": [
      {
        "zh": "我以为商店还开着，到了才发现已经关门了。",
        "en": "I thought the shop was still open, but discovered it had closed when I arrived."
      },
      {
        "zh": "她以为钥匙在包里，其实放在桌上了。",
        "en": "She thought the key was in her bag, but it was actually on the table."
      }
    ],
    "relatedTokens": [
      "以为"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 143,
        "topic": "以为",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l14-fraction-duration",
    "pattern": "number + 个 + 半 + hour / half + 个 + hour",
    "title": "Counting hours and half hours",
    "explanation": "小时 and colloquial 钟头 count hours and usually take 个. For a whole number plus a half, place 半 after 个: 一个半小时 is one and a half hours. 半个小时 is half an hour. Units such as 分钟 and 天 do not normally need 个. Put these quantities after the verb when they measure the duration of an action.",
    "level": 2,
    "examples": [
      {
        "zh": "我等了一个半小时。",
        "en": "I waited for an hour and a half."
      },
      {
        "zh": "从这里走到河边要半个钟头。",
        "en": "Walking from here to the riverside takes half an hour."
      }
    ],
    "relatedTokens": [
      "半",
      "个",
      "小时",
      "钟头"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 143,
        "topic": "钟头 and duration measures",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 147,
        "topic": "钟头 and duration measures",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 154,
        "topic": "钟头 and duration measures",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-si-extreme",
    "pattern": "adjective + 死了",
    "title": "Expressing an overwhelming degree",
    "explanation": "死了 after a suitable adjective gives strong colloquial emphasis, often for an unpleasant physical feeling such as tiredness, heat, or fear. It is figurative in this degree use, not a claim that someone died. Some intense positive feelings also use it, especially 高兴死了, but it is not equally natural with every favorable adjective. For broadly positive descriptions, 极了 is a safer general alternative.",
    "level": 2,
    "examples": [
      {
        "zh": "走了这么远，我累死了。",
        "en": "After walking so far, I am exhausted."
      },
      {
        "zh": "第一次上台的时候，她紧张死了。",
        "en": "She was terribly nervous the first time she went on stage."
      }
    ],
    "relatedTokens": [
      "死",
      "死了"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 168,
        "topic": "死 Indicating an Extreme Degree",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-action-times-ci",
    "pattern": "verb + (了) + number + 次 + object",
    "title": "Counting occurrences of an action",
    "explanation": "次 counts how many times an action occurs and the number-plus-次 phrase follows the verb. For an ordinary object, place the count before that object. For a named person or place, the count can often precede or follow the object; for a personal pronoun, place the count after it. An aspect marker, if present, follows the verb before the counted occurrences.",
    "level": 2,
    "examples": [
      {
        "zh": "我今年去了两次南京。",
        "en": "I went to Nanjing twice this year."
      },
      {
        "zh": "昨天我给她打了三次电话。",
        "en": "Yesterday I called her three times."
      },
      {
        "zh": "我找了他两次，都没找到。",
        "en": "I looked for him twice but did not find him either time."
      }
    ],
    "relatedTokens": [
      "次",
      "两次"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 169,
        "topic": "Times of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 170,
        "topic": "Times of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 175,
        "topic": "Times of Actions",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-action-times-bian",
    "pattern": "verb + number + 遍 + object",
    "title": "Counting complete passes through an activity",
    "explanation": "遍 counts a complete run from the beginning to the end, whereas 次 simply counts occurrences. 一遍录音 means a full play-through of the recording, not just starting it once. Use 遍 with activities that have a meaningful whole course, such as reading a text, listening to a recording, or checking a document.",
    "level": 2,
    "examples": [
      {
        "zh": "我把说明书读了两遍。",
        "en": "I read through the instruction manual twice."
      },
      {
        "zh": "请从头到尾检查一遍名单。",
        "en": "Please check through the list once from beginning to end."
      }
    ],
    "relatedTokens": [
      "遍",
      "一遍"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 170,
        "topic": "Times of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 175,
        "topic": "Times of Actions",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-body-action-measures",
    "pattern": "verb + number + 口 / other action measure",
    "title": "Counting mouthfuls and action units",
    "explanation": "Some nouns linked to the body or manner of an action function as action measure words. 口 counts mouthfuls or sips, so 喝一口 says take one sip rather than drink one whole container. Put the counted action unit after the verb and, when an object is stated, normally before that object. The choice of measure word changes the size or shape of the action being counted.",
    "level": 2,
    "examples": [
      {
        "zh": "她喝了一口水就继续讲话。",
        "en": "She took a sip of water and continued speaking."
      },
      {
        "zh": "孩子只吃了两口面包。",
        "en": "The child ate only two bites of bread."
      }
    ],
    "relatedTokens": [
      "口"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 170,
        "topic": "Times of Actions",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-qilai-beginning",
    "pattern": "verb / state + 起来 / verb + 起 + object + 来",
    "title": "Beginning an action or state",
    "explanation": "起来 after a verb or state describes the transition into activity: something starts happening. This figurative use does not require upward physical motion. If an ordinary object is included, split the complement and put the object between 起 and 来, as in 唱起歌来. Completed or change-of-state marking can appear according to the event, but preserve the object position.",
    "level": 3,
    "examples": [
      {
        "zh": "听到这个消息，大家笑了起来。",
        "en": "Everyone started laughing when they heard the news."
      },
      {
        "zh": "雨一停，孩子们就踢起球来。",
        "en": "As soon as the rain stopped, the children began playing soccer."
      }
    ],
    "relatedTokens": [
      "起来",
      "起",
      "来"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 170,
        "topic": "起来 Indicating the Beginning of an Action",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 171,
        "topic": "起来 Indicating the Beginning of an Action",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-ba-disposal",
    "pattern": "subject + 把 + known object + verb + result / further element",
    "title": "Showing what happens to a specific object",
    "explanation": "把 places a known or identifiable object before the verb and emphasizes how the action affects it. The predicate normally says more than a bare action, for example a result complement, a recipient, a reduplicated action, or appropriate 了. Use it for an object the listener can identify rather than introducing an unspecified new object. Negation and modal verbs ordinarily come before 把. 把 is not an instruction to front every object in every sentence.",
    "level": 3,
    "examples": [
      {
        "zh": "请把这张表填好。",
        "en": "Please fill out this form completely."
      },
      {
        "zh": "她把那封信交给老师了。",
        "en": "She handed that letter to the teacher."
      },
      {
        "zh": "别把票弄丢了。",
        "en": "Do not lose the ticket."
      }
    ],
    "relatedTokens": [
      "把"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 171,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 172,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 173,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-ba-location-result",
    "pattern": "把 + object + verb + 在 / 到 + place",
    "title": "Placing or moving an object to a location",
    "explanation": "Use 把 for a definite object that is placed or moved, then give its resulting location after the verb. 在 marks the position reached with verbs such as 放, while 到 marks the destination with verbs such as 送 or 搬. This keeps the verb and its location result together: 把包放在椅子上. The location of the action before the verb and the location of the affected object after the verb have different roles.",
    "level": 3,
    "examples": [
      {
        "zh": "请把盒子放在柜子里面。",
        "en": "Please put the box inside the cabinet."
      },
      {
        "zh": "我们把桌子搬到窗边了。",
        "en": "We moved the table beside the window."
      }
    ],
    "relatedTokens": [
      "把",
      "在",
      "到"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 173,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 176,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 177,
        "topic": "把 Construction (I)",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-dui-target",
    "pattern": "对 + person / thing / activity + predicate",
    "title": "Identifying the target or affected party",
    "explanation": "对 before a person, thing, or activity identifies what a response, effect, or evaluation concerns. Its translation depends on the predicate: 对…有用 means useful for, 对…过敏 means allergic to, and 对…好 means kind to. Put the 对 phrase before the main predicate. This preposition differs from adjective 对 meaning correct and result complement 对 meaning correctly.",
    "level": 2,
    "examples": [
      {
        "zh": "这本图解词典对初学者很有用。",
        "en": "This illustrated dictionary is useful for beginners."
      },
      {
        "zh": "她对花粉过敏。",
        "en": "She is allergic to pollen."
      }
    ],
    "relatedTokens": [
      "对"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 182,
        "topic": "The Preposition 对",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 184,
        "topic": "The Preposition 对",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 185,
        "topic": "The Preposition 对",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-yuelaiyue-change",
    "pattern": "越来越 + adjective / degree-bearing predicate",
    "title": "A gradual change over time",
    "explanation": "越来越 presents a quality as changing progressively with time. Put the changing adjective or suitable predicate directly after it. The progression may be favorable or unfavorable and can also appear inside a 得 descriptive complement. Do not confuse it with 越 A 越 B, which relates changes in two different variables. 很 is normally unnecessary after 越来越.",
    "level": 2,
    "examples": [
      {
        "zh": "天色越来越暗了。",
        "en": "The sky is getting darker and darker."
      },
      {
        "zh": "她读故事读得越来越快。",
        "en": "She is reading stories faster and faster."
      }
    ],
    "relatedTokens": [
      "越来越",
      "越"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 182,
        "topic": "越来越…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 183,
        "topic": "越来越…",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 186,
        "topic": "越来越…",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-zaishuo-reason",
    "pattern": "reason，再说 + additional reason",
    "title": "Adding another reason for a decision",
    "explanation": "再说 as a connector introduces another reason supporting an action or decision. It often follows an initial reason and means besides or moreover. Unlike 而且, it specifically frames the next point as explanatory, so it cannot replace 而且 in every paired 不但…而且… statement. Distinguish the connector 再说 from literal 再 + 说 meaning say it again or talk about it later.",
    "level": 2,
    "examples": [
      {
        "zh": "我们今天不爬山，路太滑，再说天也快黑了。",
        "en": "We will not climb the mountain today: the path is too slippery, and besides it is getting dark."
      },
      {
        "zh": "我想先借书，买书太贵，再说家里也没有地方放。",
        "en": "I want to borrow books first: buying them is too expensive, and I also have nowhere to put them at home."
      }
    ],
    "relatedTokens": [
      "再说",
      "而且"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 183,
        "topic": "再说",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 184,
        "topic": "再说",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 186,
        "topic": "再说",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 187,
        "topic": "再说",
        "section": "Grammar"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-adjacent-approximation",
    "pattern": "adjacent numbers + measure word + noun",
    "title": "Giving an approximate small range",
    "explanation": "Two adjacent numbers can indicate an approximate range, such as 两三天 for about two or three days. A larger shared part may be stated once, as in 二十三四岁 for about twenty-three or twenty-four years old. Use 两 before a classifier in a two-or-three expression. Avoid 九十 as a spoken shorthand for nine or ten because it sounds like ninety; say 九个或十个 when ambiguity matters.",
    "level": 2,
    "examples": [
      {
        "zh": "我们还要等两三分钟。",
        "en": "We need to wait about two or three more minutes."
      },
      {
        "zh": "每张票大约二十三四块钱。",
        "en": "Each ticket costs about twenty-three or twenty-four yuan."
      }
    ],
    "relatedTokens": [
      "两",
      "三",
      "四"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 164,
        "topic": "Adjacent numbers for approximation",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-before-after-noun",
    "pattern": "event noun + 前 / 后",
    "title": "Short forms for before and after an occasion",
    "explanation": "前 and 后 can follow an event noun to locate something before or after that occasion, as in 饭前 and 饭后. These compact expressions function like time phrases and commonly appear before the main verb. With a complete clause, use a fuller structure such as 吃饭以前 or 吃完饭以后. The short forms do not name the physical front or back in this use.",
    "level": 2,
    "examples": [
      {
        "zh": "出发前请检查车票。",
        "en": "Please check your ticket before departure."
      },
      {
        "zh": "会议后我们一起喝茶。",
        "en": "We will have tea together after the meeting."
      }
    ],
    "relatedTokens": [
      "前",
      "后",
      "以前",
      "以后"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 164,
        "topic": "前 / 后 as shortened time expressions",
        "section": "Language Notes"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-yaoburan-consequence",
    "pattern": "advice / action，要不然 + consequence",
    "title": "Warning about what happens otherwise",
    "explanation": "要不然 introduces the undesirable consequence if the previous advice is not followed or the required action does not occur. It means otherwise and often follows a sentence with 得, 要, or a command. The second clause can use 会 for a predicted consequence. State the needed action before the warning so the implied condition is clear.",
    "level": 2,
    "examples": [
      {
        "zh": "把地址记下来，要不然容易走错路。",
        "en": "Write down the address; otherwise it is easy to go the wrong way."
      },
      {
        "zh": "我们得早点儿订票，要不然就没有座位了。",
        "en": "We need to book early; otherwise there will be no seats left."
      }
    ],
    "relatedTokens": [
      "要不然"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 185,
        "topic": "Role-Play with 要不然",
        "section": "Language Practice"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-zuihao-advice",
    "pattern": "最好 + (不) + verb phrase",
    "title": "Giving practical advice",
    "explanation": "最好 before an action recommends the preferable course and often translates as had better or it would be best to. For advice against an action, use 最好不要 or 最好别 followed by the action. This use is an adverbial recommendation, not the noun-modifying superlative the best. Context determines the strength of the advice.",
    "level": 2,
    "examples": [
      {
        "zh": "下雨了，你最好带上雨伞。",
        "en": "It is raining; you had better bring an umbrella."
      },
      {
        "zh": "明天要早起，今晚最好别熬夜。",
        "en": "You need to get up early tomorrow; it would be best not to stay up late tonight."
      }
    ],
    "relatedTokens": [
      "最好",
      "别",
      "不要"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 165,
        "topic": "最好 in advice",
        "section": "Vocabulary / Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 167,
        "topic": "最好 in advice",
        "section": "Vocabulary / Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 178,
        "topic": "最好 in advice",
        "section": "Vocabulary / Language Practice"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-zai-person-there",
    "pattern": "item + 在 + person + 这儿 / 那儿",
    "title": "Asking whether someone has your item with them",
    "explanation": "When an item already belongs to someone, ask whether it is at the other person’s place or in their keeping with 在你那儿. A reply can use 在我这儿. 这儿 and 那儿 make a person phrase function as a location. This asks about current custody rather than ownership, which a simple 你有我的… may obscure.",
    "level": 2,
    "examples": [
      {
        "zh": "我的充电器在你那儿吗？",
        "en": "Do you have my charger with you?"
      },
      {
        "zh": "你的帽子在我这儿，明天给你。",
        "en": "I have your hat here; I will give it to you tomorrow."
      }
    ],
    "relatedTokens": [
      "在",
      "这儿",
      "那儿"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 194,
        "topic": "在 indicating custody",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 195,
        "topic": "在 indicating custody",
        "section": "Functional Expressions"
      }
    ]
  },
  {
    "id": "ic-l1p2-l15-zhangde-appearance",
    "pattern": "长得 + appearance description",
    "title": "Describing how someone looks",
    "explanation": "长 pronounced zhǎng combines with 得 and an appearance description to say how someone looks. The phrase describes appearance rather than present physical growth. 长 pronounced cháng is the adjective long, and 长大 means grow up. Choose an adjective appropriate to the intended compliment and person; 真 often adds sincere emphasis.",
    "level": 2,
    "examples": [
      {
        "zh": "这个孩子长得很像爸爸。",
        "en": "This child looks a lot like their father."
      },
      {
        "zh": "她长得真好看，笑起来尤其漂亮。",
        "en": "She looks lovely, especially when she smiles."
      }
    ],
    "relatedTokens": [
      "长",
      "得",
      "长得"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 144,
        "topic": "Complimentary Expressions",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 195,
        "topic": "Complimentary Expressions",
        "section": "Functional Expressions"
      }
    ],
    "tokenReadings": {
      "得": [
        "de"
      ],
      "长": [
        "zhǎng"
      ]
    }
  },
  {
    "id": "ic-l1p2-l15-zaogao-exclamation",
    "pattern": "糟糕，problem statement",
    "title": "Announcing a suddenly noticed problem",
    "explanation": "糟糕 can stand as an exclamation before a clause that reveals a mistake or unexpected problem. It is a conversational reaction, roughly oh no or darn, rather than a verb that needs an object. A following clause often uses final 了 to show the problem has now become apparent.",
    "level": 2,
    "examples": [
      {
        "zh": "糟糕，我把伞留在车上了。",
        "en": "Oh no, I left my umbrella in the car."
      },
      {
        "zh": "糟糕，文件没有保存。",
        "en": "Oh no, the file was not saved."
      }
    ],
    "relatedTokens": [
      "糟糕"
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 196,
        "topic": "糟糕 as a reaction",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 15,
        "pdfPage": 197,
        "topic": "糟糕 as a reaction",
        "section": "Functional Expressions"
      }
    ]
  },
  {
    "id": "ic-l1p2-l16-descriptive-effects",
    "pattern": "V / adjective + 得 + description",
    "title": "Describe how an action affects someone",
    "explanation": "A complement after 得 can describe the state of the person doing the action, rather than simply rating the action. An adjective before 得 can also be the cause of a following action: being so excited that one laughs, for example. With a verb-object expression, place the object before a repeated verb, then add 得 and the description. An adjectival description commonly contains 很 or another degree adverb. These effect descriptions normally make positive assertions; simply inserting 没有 into a positive cause-and-effect expression does not create a natural negative equivalent. Distinguish a cause followed by 得 from a manner expression followed by 地.",
    "level": 3,
    "examples": [
      {
        "zh": "我们爬山爬得很累，回家就睡了。",
        "en": "We were worn out from hiking and went straight to sleep when we got home."
      },
      {
        "zh": "她激动得说不出话来。",
        "en": "She was so excited that she could not get a word out."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 201,
        "topic": "Descriptive Complements (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 202,
        "topic": "Descriptive Complements (II)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "得"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l16-potential",
    "pattern": "V + 得 / 不 + result or direction",
    "title": "Whether a result is achievable",
    "explanation": "Insert 得 or 不 between a verb and its result or directional complement to say whether circumstances allow that result to be achieved. 看得懂 means able to understand by reading; 看不懂 means unable to reach that understanding. With compound directional complements, 不 or 得 follows the main verb, as in 回不来 and 想不起来. The construction concerns achievable results, rather than permission. 不能 may describe a prohibition and is not an automatic substitute for a negative potential complement. A potential complement cannot serve as the predicate of an ordinary 把 disposal sentence; put the object before the verb as a topic instead when explaining an inability.",
    "level": 3,
    "examples": [
      {
        "zh": "灯太暗了，这个字我看不清楚。",
        "en": "The light is too dim; I cannot see this character clearly."
      },
      {
        "zh": "今天时间够，我做得完这份报告。",
        "en": "There is enough time today; I can finish this report."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 202,
        "topic": "Potential Complements",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 203,
        "topic": "Potential Complements",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 204,
        "topic": "Potential Complements",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "得",
      "不"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l16-potential-questions",
    "pattern": "V得C吗？ / V得C V不C？",
    "title": "Ask about an achievable result",
    "explanation": "Potential complements are especially common in negative statements, questions, and affirmative answers to those questions. Ask with 吗 after the positive potential form, or place the positive and negative potential forms together without 吗. Repeat the entire verb-complement combination when making the full positive-negative question. The object can follow the combined question or be put first as the topic. An affirmative answer can repeat V得C; a negative answer repeats V不C. This differs from V不V, which asks about an action in general rather than about a specific attainable result.",
    "level": 3,
    "examples": [
      {
        "zh": "这段录音你听得懂吗？我听得懂。",
        "en": "Can you understand this recording? Yes, I can."
      },
      {
        "zh": "这两箱书你搬得动搬不动？我搬不动。",
        "en": "Can you move these two boxes of books or not? I cannot."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 203,
        "topic": "Potential Complements",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 206,
        "topic": "Potential Complements",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "得",
      "不",
      "吗"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l16-afford",
    "pattern": "V + 得起 / 不起",
    "title": "Being able to afford something",
    "explanation": "In expressions such as 买得起 and 买不起, 起 is a potential complement referring to having enough resources to bear the cost. It does not describe upward motion. 买不起 means the cost is beyond one’s means, while 不买 merely says one will not buy. The object can follow the expression or come first as a topic. Similar established combinations, such as 付得起, depend on the verb’s normal usage; 起 is not a universal replacement for any kind of ability.",
    "level": 3,
    "examples": [
      {
        "zh": "这套房子太贵，我们买不起。",
        "en": "This apartment is too expensive; we cannot afford it."
      },
      {
        "zh": "如果分期付款，我就付得起学费了。",
        "en": "If I pay in installments, I can afford the tuition."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 203,
        "topic": "Potential Complements",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "得起",
      "不起",
      "买不起",
      "起"
    ]
  },
  {
    "id": "ic-l1p2-l16-just-only",
    "pattern": "就 + noun / pronoun / quantity",
    "title": "就 meaning only or just",
    "explanation": "Before a noun, pronoun, or quantity phrase, 就 can single out the only person or thing included. It often emphasizes that a number is small. In a larger clause it narrows the subject or object being discussed; it does not mean immediate action in this use. Context determines whether English uses “only” or “just.” Numeral-classifier phrases are common after 就, but a pronoun or person’s name can appear there as well.",
    "level": 3,
    "examples": [
      {
        "zh": "今天来排练的就三个人。",
        "en": "Only three people came to rehearsal today."
      },
      {
        "zh": "这些朋友里，就小陈不会骑车。",
        "en": "Of these friends, only Xiao Chen cannot ride a bicycle."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 204,
        "topic": "就 (jiù)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 205,
        "topic": "就 (jiù)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "就"
    ]
  },
  {
    "id": "ic-l1p2-l16-directional-come-go",
    "pattern": "V + place/object + 来 / 去",
    "title": "Motion toward or away from a reference point",
    "explanation": "来 presents motion toward the speaker or the location adopted as the reference point; 去 presents motion away from it. When a directional verb such as 上、下、进、出 or 回 takes a place object, put that place before 来 or 去: 下楼来. An ordinary object can also stand between an action verb and 来/去, particularly in instructions. After a completed action, an ordinary object may follow the complement, often after 了, as in 送来了一份文件. Place words cannot be moved after 来/去 in the same way.",
    "level": 3,
    "examples": [
      {
        "zh": "我在门口等你，请下楼来。",
        "en": "I am waiting at the entrance; please come downstairs."
      },
      {
        "zh": "请送几本杂志去，给那边的孩子看。",
        "en": "Please take some magazines over for the children there to read."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 214,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 215,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "来",
      "去"
    ]
  },
  {
    "id": "ic-l1p2-l16-directional-simple",
    "pattern": "V + 上 / 下 / 进 / 出 / 回 / 过 / 开 / 到 + object",
    "title": "Describe a path without choosing 来 or 去",
    "explanation": "A directional verb after the main action verb states the path or endpoint of movement. 走进 describes walking in, 拿出 describes taking out, and 走上 describes walking up onto or toward a higher place. Without 来 or 去, these expressions do not say where the speaker is. A place object follows the directional complement when it supplies the destination. Some complements also combine with ordinary objects, such as 拿出钥匙. Learn the verb-complement pairing together, because a direction is not automatically compatible with every action verb.",
    "level": 3,
    "examples": [
      {
        "zh": "孩子跑进花园，找到了那只猫。",
        "en": "The child ran into the garden and found the cat."
      },
      {
        "zh": "她从口袋里拿出一枚硬币。",
        "en": "She took a coin out of her pocket."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 215,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "上",
      "下",
      "进",
      "出",
      "回",
      "过",
      "开",
      "到"
    ]
  },
  {
    "id": "ic-l1p2-l16-directional-compound",
    "pattern": "V + direction + place/object + 来 / 去",
    "title": "Compound directional complements and object position",
    "explanation": "A path complement can combine with 来 or 去 to express both the direction traveled and its relationship to the speaker’s reference point. A destination place belongs between the path and 来/去: 走进厨房来. With an ordinary object, V + path + object + 来/去 is a useful basic order, especially for requests. After a completed action, the whole compound complement may precede an ordinary object, as in 带回来了一些照片. Choose 来 or 去 by the reference point in the situation, rather than by whether the journey is upward or downward.",
    "level": 3,
    "examples": [
      {
        "zh": "我在二楼等着，请把文件拿上楼来。",
        "en": "I am waiting on the second floor; please bring the documents upstairs to me."
      },
      {
        "zh": "他从旅行中带回来了一些茶叶。",
        "en": "He brought back some tea from his trip."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 216,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 217,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "上来",
      "上去",
      "下来",
      "下去",
      "进来",
      "进去",
      "回来",
      "回去",
      "出来",
      "出去"
    ]
  },
  {
    "id": "ic-l1p2-l16-qi-shang",
    "pattern": "V + 起(来) versus V + 上 + place",
    "title": "Rising with 起 versus reaching a higher place with 上",
    "explanation": "起 describes movement from a lower position to a higher one, without naming a destination place after it. It combines with 来 as 起来, but does not form 起去. 上 can take a place object that specifies the endpoint, such as 上台 or 上楼. Thus 站起来 describes rising to one’s feet, while 走上台 describes walking onto the stage. This physical use of 起来 is distinct from its uses for beginning an action or retrieving a memory.",
    "level": 3,
    "examples": [
      {
        "zh": "听到自己的名字，她马上站起来了。",
        "en": "Hearing her name, she immediately stood up."
      },
      {
        "zh": "音乐家走上舞台，向观众问好。",
        "en": "The musician walked onto the stage and greeted the audience."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 217,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "起",
      "起来",
      "上"
    ]
  },
  {
    "id": "ic-l1p2-l16-ba-directional",
    "pattern": "把 + object + V + direction (+ place) + 来 / 去",
    "title": "Put the moved object first with 把",
    "explanation": "When a known object is moved somewhere, 把 can place that object before the action. The predicate must explain what happens to it, so a simple or compound directional complement supplies the needed result or direction. With a compound form, a destination place may stand between the direction and 来/去. The object already follows 把 and should not be repeated after the verb. Affirmative 把 instructions are useful for telling someone how to move or carry things; potential inability belongs in a different sentence pattern.",
    "level": 3,
    "examples": [
      {
        "zh": "请把这袋米搬进去。",
        "en": "Please carry this bag of rice inside."
      },
      {
        "zh": "他把行李拿回房间去了。",
        "en": "He took the luggage back to the room."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 217,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 218,
        "topic": "Directional Complements (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 220,
        "topic": "Directional Complements (II)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "把",
      "来",
      "去"
    ]
  },
  {
    "id": "ic-l1p2-l16-impression",
    "pattern": "A对B的印象 / A给B的印象",
    "title": "Having an impression versus making an impression",
    "explanation": "A 对 B 的印象 refers to A’s impression of B: A is the observer and B is the person or thing being assessed. A 给 B 的印象 refers to the impression A makes on B: A is the person or thing being assessed and B is the observer. Keep those roles straight when adding 很好、很深 or another description. 的 links the phrase to the noun 印象; 对 and 给 are not interchangeable without changing whose impression is meant.",
    "level": 2,
    "examples": [
      {
        "zh": "我对新老师的印象很好。",
        "en": "I have a very good impression of the new teacher."
      },
      {
        "zh": "她给面试官的印象很专业。",
        "en": "She made a very professional impression on the interviewer."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 199,
        "topic": "Impression: 对 versus 给",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "对",
      "给",
      "印象"
    ]
  },
  {
    "id": "ic-l1p2-l16-lia",
    "pattern": "pronoun / person + 俩",
    "title": "俩 already includes the classifier 个",
    "explanation": "俩 is a conversational contraction of 两个 and commonly refers to two people together. Because the classifier is already included, do not add 个 after 俩. 我俩、你俩 and 他们俩 mean the two of us, you, or them. More formal wording can use 我们两个人. The word is read liǎ and should not be confused with ordinary 两 before a classifier.",
    "level": 2,
    "examples": [
      {
        "zh": "我们俩住在同一条街上。",
        "en": "The two of us live on the same street."
      },
      {
        "zh": "你们俩谁先介绍自己？",
        "en": "Which of you two will introduce yourself first?"
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 200,
        "topic": "俩 as 两个",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "俩",
      "两"
    ]
  },
  {
    "id": "ic-l1p2-l16-zao",
    "pattern": "早 + 就 + V (+ 了)",
    "title": "Something was already true long ago",
    "explanation": "早 literally means early, but with 就 it can place a wish, knowledge, or completed event well before the present or well before someone expected. It often conveys “long ago” or “already,” rather than a clock time. A final 了 is common when the speaker emphasizes that the state has already been established. Do not assume that every occurrence of 早 refers to the morning.",
    "level": 2,
    "examples": [
      {
        "zh": "这个消息我早就知道了。",
        "en": "I knew this news long ago."
      },
      {
        "zh": "她早就想学书法了。",
        "en": "She has wanted to learn calligraphy for a long time."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 200,
        "topic": "Extended meaning of 早",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "早",
      "就"
    ]
  },
  {
    "id": "ic-l1p2-l16-show-perform",
    "pattern": "演电影 / 放电影",
    "title": "Showing a film versus acting in it",
    "explanation": "演电影 can describe either showing a film or acting in one, depending on context. 放电影 unambiguously describes screening or playing a film. When discussing a school or cinema screening, either verb may occur, but 放 makes the intended activity clearer. An actor as the subject strongly favors the acting interpretation of 演. This is a usage distinction between the words, rather than a change in sentence structure.",
    "level": 2,
    "examples": [
      {
        "zh": "社区中心今晚放一部纪录片。",
        "en": "The community center is screening a documentary tonight."
      },
      {
        "zh": "她以前演过电影，现在主要演话剧。",
        "en": "She has acted in films before and now mainly performs in stage plays."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 199,
        "topic": "演电影 and 放电影",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "演",
      "放"
    ]
  },
  {
    "id": "ic-l1p2-l16-remember-recall",
    "pattern": "记得 versus 想起来 / 想不起来",
    "title": "Remembering a fact versus bringing it to mind",
    "explanation": "记得 describes the state of remembering information; 想起来 describes retrieving it from memory at a particular moment. 想不起来 says that the retrieval cannot be achieved, even if the speaker knows the information somewhere in memory. 想起来了 marks a successful recall or a newly available recollection. The directional-looking 起来 has a figurative memory meaning here and does not describe physical upward movement.",
    "level": 3,
    "examples": [
      {
        "zh": "我记得见过她，可是想不起来在哪儿见过。",
        "en": "I remember meeting her, but I cannot recall where."
      },
      {
        "zh": "等一下，我想起来了：钥匙在抽屉里。",
        "en": "Wait a moment, I remember now: the key is in the drawer."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 210,
        "topic": "记得 versus 想起来",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "记得",
      "想起来",
      "想不起来",
      "起来"
    ]
  },
  {
    "id": "ic-l1p2-l16-haohao",
    "pattern": "好好儿(地) + V",
    "title": "Do something properly or wholeheartedly",
    "explanation": "好好儿 is an adverbial meaning to do something properly, thoroughly, or with full enjoyment, depending on the following verb. It appears before that verb and may be followed by 地. In its usual northern pronunciation, the first 好 is third tone and the second is first tone; the ending may be rhotacized. 好好学习 asks someone to study seriously, while 好好儿玩儿 invites someone to enjoy themselves. It describes how the action is done, unlike 好得很, which rates something after the predicate.",
    "level": 2,
    "examples": [
      {
        "zh": "到了海边，我们要好好儿休息一下。",
        "en": "When we reach the seaside, we will have a proper rest."
      },
      {
        "zh": "请好好儿地检查这份申请。",
        "en": "Please check this application carefully."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 211,
        "topic": "好好儿 as an adverbial",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "好好儿",
      "好好",
      "地"
    ],
    "tokenReadings": {
      "地": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l16-soften-reduplication",
    "pattern": "V V / V一V / ABAB",
    "title": "Soften a request by reduplicating its verb",
    "explanation": "A brief, tentative action can be expressed by repeating a verb. This often makes a request sound less demanding: 看看、听听、用用 and 帮帮 suggest taking a look, listening a little, using briefly, or lending a hand. Monosyllabic verbs can also use V一V. Some disyllabic verbs reduplicate as ABAB, such as 讨论讨论. The pattern does not promise that the action will take no time; it frames it as manageable. Reduplication is not appropriate for every verb, and it is not the same as an adjectival AABB pattern.",
    "level": 2,
    "examples": [
      {
        "zh": "请帮帮我，我找不到入口。",
        "en": "Please give me a hand; I cannot find the entrance."
      },
      {
        "zh": "我们先讨论讨论，再做决定。",
        "en": "Let us discuss it a little first and then make a decision."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 219,
        "topic": "Verb reduplication in polite requests",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "看看",
      "听听",
      "帮帮",
      "一"
    ]
  },
  {
    "id": "ic-l1p2-l17-double-le-duration",
    "pattern": "V + 了 + duration + 了",
    "title": "An action or state has lasted up to now",
    "explanation": "Verb-final 了 plus a duration and sentence-final 了 places the action or state over a period extending to the current reference point. Without further context, it often suggests that it still continues. An object can appear before a repeated verb, as in 学中文学了半年了. The first 了 presents the elapsed action or state; the last connects that duration to the present situation. Without the final 了, a completed past duration is often the reading. A following clause can indicate that the speaker now intends to stop, so the double-了 form does not guarantee future continuation.",
    "level": 3,
    "examples": [
      {
        "zh": "她在这家公司工作了五年了。",
        "en": "She has been working at this company for five years now."
      },
      {
        "zh": "我练琴练了一个小时了，想休息一下。",
        "en": "I have been practicing the piano for an hour now and would like a break."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 232,
        "topic": "Verb + 了 (le) + Numeral + Measure Word + Noun + 了 (le)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 233,
        "topic": "Verb + 了 (le) + Numeral + Measure Word + Noun + 了 (le)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "了"
    ]
  },
  {
    "id": "ic-l1p2-l17-double-le-quantity",
    "pattern": "已经 + V + 了 + quantity / frequency + 了",
    "title": "An accumulated quantity has reached a current total",
    "explanation": "The two-了 construction also works with counts rather than time. A quantity after the verb tells how many items or repetitions have accumulated, while sentence-final 了 makes that total relevant to the present decision. 已经 often emphasizes “already.” The object can be topicalized at the beginning. Context may show that the current total is enough, surprising, or grounds for continuing; it need not mean that the action will carry on.",
    "level": 3,
    "examples": [
      {
        "zh": "这本书我已经读了三遍了，还是很喜欢。",
        "en": "I have already read this book three times and still like it."
      },
      {
        "zh": "我们已经订了六张票了，够大家用了。",
        "en": "We have already booked six tickets, enough for everyone."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 233,
        "topic": "Verb + 了 (le) + Numeral + Measure Word + Noun + 了 (le)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "已经",
      "了"
    ]
  },
  {
    "id": "ic-l1p2-l17-even",
    "pattern": "连 + extreme case + 都 / 也 + predicate",
    "title": "Use even to emphasize an extreme case",
    "explanation": "连 introduces an item at the surprising extreme of an implied range: an especially difficult skill, a very easy task, or the least expected person. 都 or 也 follows the emphasized phrase before the predicate. In a negative sentence, 连一个也不… stresses not even one; in a positive sentence, the same structure stresses an unexpectedly high achievement or broad inclusion. Decide what scale the context implies before choosing the emphasized item. The subject may come before 连 or, when the emphasized phrase is the subject, after it.",
    "level": 3,
    "examples": [
      {
        "zh": "这个问题太难，连老师都要查资料。",
        "en": "This question is so difficult that even the teacher has to consult reference materials."
      },
      {
        "zh": "他忙得连一口水也没喝。",
        "en": "He was so busy that he did not even drink a mouthful of water."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 233,
        "topic": "连…都/也 (lián...dōu/yě)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 234,
        "topic": "连…都/也 (lián...dōu/yě)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "连",
      "都",
      "也"
    ]
  },
  {
    "id": "ic-l1p2-l17-capacity",
    "pattern": "V + 得下 / 不下",
    "title": "Whether a space can hold something",
    "explanation": "After a suitable verb, 得下 says that there is enough space or capacity and 不下 says that there is not. 放 concerns placing objects, 坐 concerns seating people, 住 concerns accommodating residents, and 写 concerns fitting writing onto a surface. A place or container often serves as the subject or topic. This 下 is a capacity result complement, not necessarily downward motion. Ask about capacity with V得下几/多少…; choose the verb that describes how the occupants or contents use the space.",
    "level": 3,
    "examples": [
      {
        "zh": "这辆车坐不下六个大人。",
        "en": "This car cannot seat six adults."
      },
      {
        "zh": "这个书架放得下所有的字典吗？",
        "en": "Can this bookshelf hold all the dictionaries?"
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 234,
        "topic": "Potential complements with Verb + 不下 (bu xià)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 238,
        "topic": "Potential complements with Verb + 不下 (bu xià)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "得下",
      "不下",
      "下"
    ]
  },
  {
    "id": "ic-l1p2-l17-approx-counts",
    "pattern": "round number + 多 + classifier + noun",
    "title": "A little over a round number of whole items",
    "explanation": "For counts of indivisible items, place 多 after a round number and before the classifier. 二十多个人 means more than twenty but fewer than thirty people. 一百多本 usually indicates a number above one hundred but below two hundred. The relevant range depends on the last rounded place value. Do not use the fractional-unit pattern 个多 to count whole people or books. 多 indicates an amount above the stated baseline, rather than a general approximation that could also be below it.",
    "level": 3,
    "examples": [
      {
        "zh": "讲座来了三十多个学生。",
        "en": "More than thirty but fewer than forty students came to the lecture."
      },
      {
        "zh": "图书馆新买了一百多本小说。",
        "en": "The library bought over a hundred new novels."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 234,
        "topic": "多 (duō) Indicating an Approximate Number",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 235,
        "topic": "多 (duō) Indicating an Approximate Number",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "多"
    ]
  },
  {
    "id": "ic-l1p2-l17-approx-divisible",
    "pattern": "number + unit + 多 versus number + 多 + unit",
    "title": "The position of 多 changes the numeric range",
    "explanation": "With divisible units such as money or time, 多 can follow the unit to mean the stated number plus a fraction of one unit. 三个多星期 is more than three weeks but less than four; 十块多钱 is more than ten yuan but less than eleven. After a round number and before the unit, 多 instead leaves room for additional whole units: 十多块钱 is more than ten but less than twenty. For a non-round baseline in this beginner pattern, use the post-unit form for a fractional excess. Position is therefore part of the meaning.",
    "level": 3,
    "examples": [
      {
        "zh": "我们等了两个多小时。",
        "en": "We waited for more than two hours but less than three."
      },
      {
        "zh": "这杯茶五块多钱，不到六块。",
        "en": "This tea costs a little over five yuan, less than six."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 235,
        "topic": "多 (duō) Indicating an Approximate Number",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 236,
        "topic": "多 (duō) Indicating an Approximate Number",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "多"
    ]
  },
  {
    "id": "ic-l1p2-l17-universal-positive",
    "pattern": "谁 / 什么 / 哪… / 什么时候 + 都 + affirmative predicate",
    "title": "Question words meaning everyone, everything, or any",
    "explanation": "A question word followed later by 都 can make an inclusive statement rather than ask a question. 谁都 means everyone; 什么都 means everything; 哪种都 means every kind. With a permissive predicate such as 可以 or 行, a time or choice question word can mean any option is acceptable. The quantifier appears before the predicate but after the question-word phrase, which may be a subject or an object. Listen to the complete construction before interpreting the word as a request for information.",
    "level": 3,
    "examples": [
      {
        "zh": "这个游戏谁都可以参加。",
        "en": "Anyone can join this game."
      },
      {
        "zh": "星期六什么时候见面都行。",
        "en": "Any meeting time on Saturday is fine."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 245,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 246,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 247,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "谁",
      "什么",
      "哪",
      "什么时候",
      "都"
    ]
  },
  {
    "id": "ic-l1p2-l17-universal-negative",
    "pattern": "question word + 都 / 也 + 不 / 没 + predicate",
    "title": "Question words meaning no one, nothing, or nowhere",
    "explanation": "With 都 or 也 and a negative predicate, a question word can exclude every member of a set. 什么都不吃 means eat nothing, 谁也没来 means no one came, and 哪儿也找不到 means cannot find it anywhere. 不 commonly negates a habit, willingness, or ability; 没 negates an occurrence or experience, depending on the rest of the clause. The negative belongs after 都/也. This construction is a statement and normally does not use 吗. It differs from a repeated question word in two related clauses, which selects the same indefinite choice twice.",
    "level": 3,
    "examples": [
      {
        "zh": "冰箱里什么水果都没有。",
        "en": "There is no fruit at all in the refrigerator."
      },
      {
        "zh": "今天谁也没给我打电话。",
        "en": "No one called me today."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 245,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 246,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 247,
        "topic": "Question Pronouns with 都/也 (dōu/yě)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "谁",
      "什么",
      "哪儿",
      "都",
      "也",
      "不",
      "没"
    ]
  },
  {
    "id": "ic-l1p2-l17-interest",
    "pattern": "对…有兴趣 versus …有意思",
    "title": "Being interested versus being interesting",
    "explanation": "有兴趣 describes a person’s interest, often in the frame 对 + activity/thing + 有兴趣. 有意思 rates a person, thing, or activity as interesting. Keep the experiencer as the subject with 有兴趣 and the interesting thing as the subject with 有意思. 没有兴趣 says someone lacks interest; 没有意思 or 没意思 describes something as uninteresting. A thing can be 有意思 even when a particular person 对它没有兴趣.",
    "level": 2,
    "examples": [
      {
        "zh": "我对建筑很有兴趣。",
        "en": "I am very interested in architecture."
      },
      {
        "zh": "这本介绍老房子的书很有意思。",
        "en": "This book about old houses is very interesting."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 242,
        "topic": "有兴趣 versus 有意思",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "兴趣",
      "有兴趣",
      "有意思",
      "对"
    ]
  },
  {
    "id": "ic-l1p2-l17-room-counts",
    "pattern": "number + 房 / 室 + number + 厅",
    "title": "Describe an apartment by its rooms",
    "explanation": "Housing descriptions combine a bedroom count with a living-room count: 一房一厅 and 一室一厅 both mean one bedroom and one living room. 房 or 室 names the bedroom category here, rather than functioning as the general classifier 个. 两房一厅 means two bedrooms and one living room. The compact phrase commonly follows 是 or forms part of a description of an apartment; it does not itself specify the number of bathrooms or kitchens.",
    "level": 2,
    "examples": [
      {
        "zh": "这套公寓是两室一厅，适合我们一家住。",
        "en": "This apartment has two bedrooms and one living room and suits our family."
      },
      {
        "zh": "我想租一房一厅的公寓。",
        "en": "I would like to rent a one-bedroom apartment with a living room."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 241,
        "topic": "一房一厅 and 一室一厅",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "房",
      "室",
      "厅"
    ]
  },
  {
    "id": "ic-l1p2-l17-setting-scene",
    "pattern": "place + 有 + object / object + 在 + place",
    "title": "Describe what is in a room and where it is",
    "explanation": "To introduce something in a setting, put the place first and use 有 followed by the item, often with a numeral and classifier. To locate an already identified item, make that item the subject and use 在 followed by the place. Thus 桌上有一盏灯 introduces a lamp, while 灯在桌上 locates the known lamp. Localizers such as 里、上 and 旁边 turn an ordinary noun into a spatial expression. This distinction is useful when describing a floor plan or a picture.",
    "level": 2,
    "examples": [
      {
        "zh": "窗户旁边有一张小桌子。",
        "en": "There is a small table beside the window."
      },
      {
        "zh": "那张小桌子在沙发和书架之间。",
        "en": "That small table is between the sofa and the bookshelf."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 249,
        "topic": "Introducing and locating room contents",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 248,
        "topic": "Introducing and locating room contents",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "有",
      "在",
      "里",
      "上",
      "旁边"
    ]
  },
  {
    "id": "ic-l1p2-l17-prohibition",
    "pattern": "不准 / 不能 + V",
    "title": "Express a rule that forbids an action",
    "explanation": "不准 says an action is prohibited or not allowed. 不能 can also express a rule in the right context, although elsewhere it may describe inability. Put the prohibited action after the modal expression. A time clause with 的时候 can specify when the rule applies. This is different from a negative potential complement such as 放不下, which says physical conditions prevent a result rather than that a rule forbids it.",
    "level": 2,
    "examples": [
      {
        "zh": "图书馆里不准大声说话。",
        "en": "Loud talking is not allowed in the library."
      },
      {
        "zh": "考试的时候不能用手机。",
        "en": "You may not use a phone during an exam."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 242,
        "topic": "Rules and prohibitions",
        "section": "Dialogue"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 324,
        "topic": "Rules and prohibitions",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "不准",
      "准",
      "不能"
    ]
  },
  {
    "id": "ic-l1p2-l18-non-action-duration",
    "pattern": "duration + 没 + V (+ 了)",
    "title": "Say how long something has not happened",
    "explanation": "Put the duration before 没 and the verb to measure an interval during which an action has not taken place. Sentence-final 了 commonly relates that absence to the present: 两天没出门了. A narrative about a past period can omit the final 了. This order differs from affirmative duration, which follows the verb. 没 rather than 不 is used for the absence of an occurrence over the interval. 多长时间没…了 asks how long it has been since the action last happened.",
    "level": 3,
    "examples": [
      {
        "zh": "我三个星期没去游泳了。",
        "en": "I have not been swimming for three weeks."
      },
      {
        "zh": "出差的时候，他十天没见家人。",
        "en": "While away on business, he did not see his family for ten days."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 260,
        "topic": "Duration of Non-Action",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 261,
        "topic": "Duration of Non-Action",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 263,
        "topic": "Duration of Non-Action",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "没",
      "了"
    ]
  },
  {
    "id": "ic-l1p2-l18-easy-hard",
    "pattern": "好 / 难 + V",
    "title": "An action is easy or difficult",
    "explanation": "Some verb combinations with 好 or 难 form adjectives describing ease or difficulty. 好懂 means easy to understand, 难写 means difficult to write, and 好走 describes a path that is easy to walk along. The object or activity being assessed commonly becomes the subject. These are established combinations rather than a rule that freely accepts every verb. As adjectives they can take 很 or another degree adverb. Context distinguishes the ease meaning from combinations where 好 means pleasant.",
    "level": 2,
    "examples": [
      {
        "zh": "这篇说明很好懂，不用查很多词。",
        "en": "These instructions are easy to understand; there is little need to look up words."
      },
      {
        "zh": "下雨以后，这条山路很难走。",
        "en": "After the rain, this mountain path is hard to walk along."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 261,
        "topic": "好/难 (hǎo/nán) + V",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "好",
      "难",
      "好懂",
      "难懂",
      "难写",
      "好走",
      "难走"
    ]
  },
  {
    "id": "ic-l1p2-l18-pleasant-unpleasant",
    "pattern": "好 / 难 + sensory verb",
    "title": "Pleasant or unpleasant to experience",
    "explanation": "In common combinations with eating, hearing, or seeing, 好 and 难 describe a pleasant or unpleasant result rather than an easy or difficult action. 好吃 means tasty, not easy to eat; 难听 means unpleasant to hear, not necessarily difficult to understand. 好看 can describe visual attractiveness, and 好喝 describes a pleasant drink. Treat the combination as an adjective. Use a separate difficulty expression when the intended meaning is that performing the action is hard.",
    "level": 2,
    "examples": [
      {
        "zh": "这碗汤很好喝，味道很清淡。",
        "en": "This soup tastes good and has a light flavor."
      },
      {
        "zh": "他的话太难听了，大家都不高兴。",
        "en": "His words were very unpleasant to hear, and everyone was upset."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 261,
        "topic": "好/难 (hǎo/nán) + V",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "好吃",
      "难吃",
      "好听",
      "难听",
      "好看",
      "难看",
      "好喝",
      "难喝"
    ]
  },
  {
    "id": "ic-l1p2-l18-continue",
    "pattern": "V / adjective + 下去",
    "title": "Continue an action or condition",
    "explanation": "After an activity, 下去 can mean continuing it from the present point onward. It has a figurative meaning rather than literal downward movement: 学下去 means keep studying. It can also follow a descriptive predicate to suggest a condition continuing, as in 胖下去. 再…下去 often introduces the consequences of carrying on; 别…下去了 tells someone to stop. Distinguish this continuation use from a physical directional complement whose path is down and away from the reference point.",
    "level": 3,
    "examples": [
      {
        "zh": "这个故事很有意思，请讲下去。",
        "en": "This story is interesting; please continue telling it."
      },
      {
        "zh": "再熬夜下去，你会越来越累。",
        "en": "If you keep staying up late, you will get more and more tired."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 261,
        "topic": "下去 (xia qu) Indicating Continuation",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 262,
        "topic": "下去 (xia qu) Indicating Continuation",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "下去"
    ]
  },
  {
    "id": "ic-l1p2-l18-duration-object",
    "pattern": "V + object + V + duration / V + duration + (的) + object",
    "title": "Fit an object and a duration into one clause",
    "explanation": "When an activity has both an object and a duration, use either a repeated verb after the object or put the duration before the object. 读小说读一个小时 and 读一个小时的小说 both measure the time spent reading. 的 after the duration is often optional in this pattern. For a completed event, 了 follows the duration-bearing verb, as in 读小说读了一个小时. Do not confuse the duration with a clock-time phrase placed before the verb. Habitual actions marked 每天 do not require 了 merely because a duration is given.",
    "level": 3,
    "examples": [
      {
        "zh": "我每天读中文新闻读二十分钟。",
        "en": "I read Chinese news for twenty minutes every day."
      },
      {
        "zh": "昨天她听了半个小时的播客。",
        "en": "Yesterday she listened to a podcast for half an hour."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 270,
        "topic": "Duration of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 271,
        "topic": "Duration of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 274,
        "topic": "Duration of Actions",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "的",
      "了"
    ]
  },
  {
    "id": "ic-l1p2-l18-duration-separable",
    "pattern": "V O + V + duration / V + duration + (的) + O",
    "title": "Duration with separable verb-object words",
    "explanation": "Expressions such as 游泳、跳舞 and 聊天 have a verb-object structure. A duration can follow a repeated verb after the whole expression, or it can be inserted between the verbal and nominal parts. In the inserted pattern, 的 may appear before the object. The apparent single word therefore need not stay together when measuring the activity. Use the repeated-verb pattern if unsure which expressions allow separation; not every two-character verb is verb-object.",
    "level": 3,
    "examples": [
      {
        "zh": "我们昨天聊天聊了两个小时。",
        "en": "Yesterday we chatted for two hours."
      },
      {
        "zh": "孩子们跳了十分钟的舞，就休息了。",
        "en": "The children danced for ten minutes and then rested."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 271,
        "topic": "Duration of Actions",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 274,
        "topic": "Duration of Actions",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "游泳",
      "跳舞",
      "聊天",
      "的"
    ]
  },
  {
    "id": "ic-l1p2-l18-zhe-state",
    "pattern": "V + 着",
    "title": "Describe a continuing posture or state",
    "explanation": "着 follows a verb to present a continuing state or an action maintained as part of a description. Postures and states such as 站着、坐着、开着 and 拿着 are common. The particle is pronounced with a neutral tone in this use. It does not by itself say when the situation began or how long it has lasted. An open door described with 开着 is in the open state, rather than necessarily in the act of being opened. The meaning depends on the verb; not every completed result is naturally described with 着.",
    "level": 3,
    "examples": [
      {
        "zh": "门开着，里面有人。",
        "en": "The door is open, and someone is inside."
      },
      {
        "zh": "他手里拿着一张地图。",
        "en": "He is holding a map in his hand."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 271,
        "topic": "The Particle 着 (zhe)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 272,
        "topic": "The Particle 着 (zhe)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "着"
    ]
  },
  {
    "id": "ic-l1p2-l18-zhe-accompany",
    "pattern": "V1 + 着 (+ object) + V2",
    "title": "An accompanying action alongside the main action",
    "explanation": "Between two verbs, 着 makes the first activity or posture the background for the second, main activity. 抱着孩子走 describes walking while holding a child; 坐着聊天 describes chatting while seated. The first verb may keep its object before the second verb. This pattern links activities that coexist rather than describing a sequence. It is useful for the way a person moves, talks, or listens, but it does not require both activities to be equally central.",
    "level": 3,
    "examples": [
      {
        "zh": "她笑着回答了我的问题。",
        "en": "She answered my question with a smile."
      },
      {
        "zh": "我们坐着喝茶，聊了很久。",
        "en": "We sat drinking tea and chatted for a long time."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 271,
        "topic": "The Particle 着 (zhe)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 272,
        "topic": "The Particle 着 (zhe)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 276,
        "topic": "The Particle 着 (zhe)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "着"
    ]
  },
  {
    "id": "ic-l1p2-l18-zhe-zai",
    "pattern": "在 + V versus V + 着",
    "title": "Ongoing action versus a maintained description",
    "explanation": "在 normally appears before a verb and focuses on an activity in progress. 着 appears after a verb and commonly describes a maintained state or accompanying activity. They therefore occupy different positions and cannot simply replace one another. 他在穿衣服 focuses on getting dressed, while 他穿着外套 describes having a coat on. The distinction is about viewpoint, not English tense. Some clauses can contain both markers when the meanings support it, but matching the form to the intended focus is more useful than treating them as synonyms.",
    "level": 3,
    "examples": [
      {
        "zh": "她在开门，请等一下。",
        "en": "She is opening the door; please wait a moment."
      },
      {
        "zh": "门开着，你可以进去。",
        "en": "The door is open; you can go in."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 272,
        "topic": "The Particle 着 (zhe)",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "在",
      "着"
    ]
  },
  {
    "id": "ic-l1p2-l18-passive",
    "pattern": "receiver + 被 / 叫 / 让 + agent + V + result",
    "title": "Place the affected thing first in a passive sentence",
    "explanation": "A passive sentence puts the receiver of an action first, followed by 被、叫 or 让, the agent, and the action. A result complement, directional complement, 了, or another predicate extension usually tells what happened to the receiver. 叫 and 让 are common conversational passive markers when an agent follows them. These forms are often used for unwanted outcomes, damage, or loss, although Chinese passives are not limited to negative events. Since 叫 and 让 also have causative uses, identify whether the first noun receives the action in the particular context.",
    "level": 3,
    "examples": [
      {
        "zh": "我的眼镜被弟弟弄坏了。",
        "en": "My glasses were broken by my younger brother."
      },
      {
        "zh": "我留在桌上的蛋糕让小猫吃掉了。",
        "en": "The cake I left on the table was eaten by the kitten."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 272,
        "topic": "被/叫/让 (bèi/jiào/ràng) in Passive-Voice Sentences",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 273,
        "topic": "被/叫/让 (bèi/jiào/ràng) in Passive-Voice Sentences",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "被",
      "叫",
      "让"
    ]
  },
  {
    "id": "ic-l1p2-l18-passive-agent",
    "pattern": "receiver + 被 + V / 被、叫、让 + 人 + V",
    "title": "Passive sentences with an unnamed agent",
    "explanation": "With 被, the agent may be left out when it is unknown or unimportant. 叫 and 让 ordinarily need an agent in the passive pattern taught here; 人 can stand for an unidentified someone. The predicate still normally says what happened through a result or other extension. This focuses attention on the affected object rather than on who acted. Do not insert a guessed agent merely because the English translation has “by.”",
    "level": 3,
    "examples": [
      {
        "zh": "自行车被偷走了。",
        "en": "The bicycle was stolen."
      },
      {
        "zh": "我的座位叫人占了。",
        "en": "Someone has taken my seat."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 273,
        "topic": "被/叫/让 (bèi/jiào/ràng) in Passive-Voice Sentences",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "被",
      "叫",
      "让",
      "人"
    ]
  },
  {
    "id": "ic-l1p2-l18-you-addition",
    "pattern": "clause，(subject) 又 + additional condition",
    "title": "又 adds a further reason or problem",
    "explanation": "In addition to marking repetition, 又 can add another circumstance that strengthens an assessment. A second clause with 又 may mean “and on top of that,” especially when the circumstances worsen a problem. The second clause can be negative, such as 又不休息. This use does not mean that the negative action happened again. Read the first and second conditions together to identify the speaker’s accumulated reasons.",
    "level": 2,
    "examples": [
      {
        "zh": "这条路很远，又没有公共汽车。",
        "en": "This route is very far, and on top of that there is no bus."
      },
      {
        "zh": "他工作太多，又不肯休息，所以很累。",
        "en": "He has too much work and refuses to rest, so he is very tired."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 257,
        "topic": "又 as augmentation",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "又"
    ]
  },
  {
    "id": "ic-l1p2-l18-purpose",
    "pattern": "为了 + goal，subject + action",
    "title": "State the purpose of an action",
    "explanation": "为了 introduces the goal or benefit motivating an action. The purpose phrase often starts a complex sentence, followed by the subject and the action used to achieve it. The goal may be a noun phrase or a verb phrase, including one with a result complement such as 学好. A purpose is something the action aims to achieve, not a claim that the goal has already been achieved. Distinguish 为了 from 因为, which normally introduces a reason or cause.",
    "level": 3,
    "examples": [
      {
        "zh": "为了记住这些词，我每天写三句话。",
        "en": "To remember these words, I write three sentences every day."
      },
      {
        "zh": "为了让奶奶放心，他每天给她打电话。",
        "en": "To put his grandmother at ease, he calls her every day."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 267,
        "topic": "为了 in a purpose clause",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 275,
        "topic": "为了 in a purpose clause",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "为了"
    ]
  },
  {
    "id": "ic-l1p2-l18-shang-activities",
    "pattern": "上 + school / vehicle / facility",
    "title": "Common activity combinations with 上",
    "explanation": "上 takes several established meanings depending on its object. 上小学、上中学 and 上大学 mean attend the corresponding school level; 上车 and 上飞机 mean board a vehicle; 上厕所 means go to the toilet. These expressions do not all describe climbing upward. When identifying a school level, the phrase says where someone studies, not necessarily that they are entering a building at that moment. Learn each combination with its normal object.",
    "level": 2,
    "examples": [
      {
        "zh": "她明年要上大学。",
        "en": "She is going to attend university next year."
      },
      {
        "zh": "请先上车，车马上要走了。",
        "en": "Please get into the vehicle first; it is about to leave."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 267,
        "topic": "Established combinations with 上",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "上",
      "上学",
      "上大学",
      "上车",
      "上厕所"
    ]
  },
  {
    "id": "ic-l1p2-l18-bantian",
    "pattern": "V + 了 + 半天",
    "title": "半天 as an imprecise long time",
    "explanation": "半天 can literally mean half a day, but in conversational descriptions it often means quite a while. Context tells whether an exact portion of the day or an emphatic long duration is intended. After a verb it can describe the length of an activity, often followed by a disappointing or surprising outcome. Do not automatically convert it into twelve hours or a fixed number of working hours.",
    "level": 2,
    "examples": [
      {
        "zh": "我找了半天，才找到那封邮件。",
        "en": "I searched for quite a while before finding that email."
      },
      {
        "zh": "他解释了半天，我还是不明白。",
        "en": "He explained for a long time, but I still did not understand."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 18,
        "pdfPage": 268,
        "topic": "Literal and figurative 半天",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "半天"
    ]
  },
  {
    "id": "ic-l1p2-l19-extreme",
    "pattern": "adjective + 得 + 不得了",
    "title": "Express an extreme degree with 得不得了",
    "explanation": "不得了 after 得 intensifies an adjective, expressing the speaker’s judgment that the degree is extreme. It can praise something or describe an unpleasant condition; it does not inherently mean the result is bad. 热得不得了 and 漂亮得不得了 use the same structure. 得 links the predicate to its degree complement. The expression is more emphatic than an ordinary 很 and should not be interpreted here as separate 不、得 and 了 grammatical particles.",
    "level": 3,
    "examples": [
      {
        "zh": "孩子收到礼物，高兴得不得了。",
        "en": "The child was extremely happy to receive the gift."
      },
      {
        "zh": "假日的市场热闹得不得了。",
        "en": "The market is extraordinarily lively on holidays."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 291,
        "topic": "不得了 (bù déliǎo, extremely)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 293,
        "topic": "不得了 (bù déliǎo, extremely)",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 294,
        "topic": "不得了 (bù déliǎo, extremely)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "得",
      "不得了"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l19-wh-ever",
    "pattern": "question word + clause，(就) + matching question word",
    "title": "Whoever, whatever, or whichever meets a condition",
    "explanation": "Repeat a question word in two connected clauses to let an indefinite person, thing, time, place, or manner selected by the first clause determine the second. The repeated words refer to the same choice, even if they have different grammatical roles. 就 often introduces the second clause but may be omitted. 哪 plus a classifier can select an item, while 谁、什么、哪儿 and 怎么 cover other choices. This is not a pair of questions and differs from 谁都, which refers to everyone rather than to a choice determined by a condition.",
    "level": 3,
    "examples": [
      {
        "zh": "谁先完成，谁就先休息。",
        "en": "Whoever finishes first may rest first."
      },
      {
        "zh": "你选什么菜，我就做什么菜。",
        "en": "I will cook whichever dish you choose."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 301,
        "topic": "Question Pronouns as Indefinite References (Whoever, Whatever, etc.)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 302,
        "topic": "Question Pronouns as Indefinite References (Whoever, Whatever, etc.)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 306,
        "topic": "Question Pronouns as Indefinite References (Whoever, Whatever, etc.)",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 307,
        "topic": "Question Pronouns as Indefinite References (Whoever, Whatever, etc.)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "谁",
      "什么",
      "哪",
      "哪儿",
      "怎么",
      "就"
    ]
  },
  {
    "id": "ic-l1p2-l19-large-number-units",
    "pattern": "…亿…万…千…百…十…",
    "title": "Group large numbers in units of ten thousand",
    "explanation": "Chinese numbers use 万 for ten thousand and 亿 for one hundred million. Read a large number in groups of four digits, beginning from the right, rather than translating each English thousand or million grouping. One million is 一百万, and one billion is 十亿. Inside each group, ordinary 千、百 and 十 supply place values. 两 commonly appears before 千 or 万 when the leading quantity is two; 二 remains standard in tens and in ordinary digit-by-digit numbers. This is a positional number system, not a classifier phrase.",
    "level": 3,
    "examples": [
      {
        "zh": "这座城市有两百万人口。",
        "en": "This city has a population of two million."
      },
      {
        "zh": "这项工程花了三亿五千万元。",
        "en": "This project cost 350 million yuan."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 302,
        "topic": "Numbers over One Thousand",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 303,
        "topic": "Numbers over One Thousand",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "万",
      "亿",
      "千",
      "百",
      "十",
      "两"
    ]
  },
  {
    "id": "ic-l1p2-l19-zeros-short-numbers",
    "pattern": "…零… / 一千五（百）",
    "title": "Skipped number places and conversational abbreviations",
    "explanation": "Use 零 to signal a skipped internal place or group when a nonzero value follows; consecutive empty places do not require a separate 零 for each one. Trailing zeros are not read. Conversational prices can omit an expected final place-value word when context is clear: 一千五 normally means one thousand five hundred, not one thousand and five. To avoid ambiguity in formal or unfamiliar contexts, say the full number. 一千零五 explicitly expresses 1,005. Learn the missing-place and abbreviated-price patterns separately.",
    "level": 3,
    "examples": [
      {
        "zh": "这台电脑一千八百元，口语可以说一千八。",
        "en": "This computer is 1,800 yuan; conversationally, you can say “one thousand eight.”"
      },
      {
        "zh": "这个村子有三千零六十人。",
        "en": "This village has 3,060 people."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 303,
        "topic": "Numbers over One Thousand",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 298,
        "topic": "Numbers over One Thousand",
        "section": "Dialogue"
      }
    ],
    "relatedTokens": [
      "零",
      "千",
      "百"
    ]
  },
  {
    "id": "ic-l1p2-l19-comparison-amount",
    "pattern": "A + 比 + B + adjective + difference amount",
    "title": "State the size of a difference",
    "explanation": "After the comparative adjective, add the amount by which A differs from B. The adjective determines the direction: 贵二十元 is twenty yuan more expensive, while 便宜二十元 is twenty yuan cheaper. Choose an appropriate unit, such as 岁 for age or 公里 for distance. With 多 or 少, a numeral-classifier-noun phrase can state the difference in a count. Ordinary 很 is not added before the adjective in this basic 比 construction. The amount measures a difference, not A’s entire value.",
    "level": 3,
    "examples": [
      {
        "zh": "姐姐比我大四岁。",
        "en": "My older sister is four years older than I am."
      },
      {
        "zh": "这条路线比那条短两公里。",
        "en": "This route is two kilometers shorter than that one."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 304,
        "topic": "Comparative Sentences with 比 (bǐ) (II)",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 307,
        "topic": "Comparative Sentences with 比 (bǐ) (II)",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "比"
    ]
  },
  {
    "id": "ic-l1p2-l19-plans",
    "pattern": "打算 / 计划 + V phrase",
    "title": "Describe a plan and choose its register",
    "explanation": "打算 and 计划 both describe planning or an intention. 打算 is common in everyday conversation; 计划 is more formal and can also name a plan. As verbs, they can be followed directly by the intended activity. In a question, 打算做什么 asks what someone intends to do. An intention expressed this way is not the same as an accomplished event and normally does not need completed-action 了 after the planned verb.",
    "level": 2,
    "examples": [
      {
        "zh": "毕业以后，我打算先工作一年。",
        "en": "After graduating, I plan to work for a year first."
      },
      {
        "zh": "我们计划下个月举办一个展览。",
        "en": "We plan to hold an exhibition next month."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 287,
        "topic": "打算 and 计划",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 291,
        "topic": "打算 and 计划",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "打算",
      "计划"
    ]
  },
  {
    "id": "ic-l1p2-l19-some-others",
    "pattern": "有的(人)…，有的(人)…",
    "title": "Contrast subsets of a group",
    "explanation": "有的 introduces some members of an established group. Repeat it to describe what different subsets do or prefer. 人 can be included, or a noun already supplied by the topic can be understood. The pattern does not assert that the listed subsets exhaust every member of the group unless context makes that clear. It differs from 有的人 at the start of an existential description of people whose group has not yet been established, although the wording can overlap.",
    "level": 2,
    "examples": [
      {
        "zh": "这些孩子有的喜欢画画，有的喜欢唱歌。",
        "en": "Some of these children like drawing, and others like singing."
      },
      {
        "zh": "同事们有的人坐地铁，有的人骑车上班。",
        "en": "Some colleagues take the subway, and others cycle to work."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 292,
        "topic": "Contrasting groups with 有的",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 287,
        "topic": "Contrasting groups with 有的",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "有的",
      "有的人"
    ]
  },
  {
    "id": "ic-l1p2-l19-ban-documents",
    "pattern": "办 + document / 手续",
    "title": "Use 办 for arranging official documents",
    "explanation": "办 commonly means arranging, applying for, or processing official documents and administrative matters. 办护照、办签证 and 办学生证 concern obtaining or handling those documents, while 办手续 concerns completing the required procedures. The context determines whether the speaker is submitting an application or completing processing, so 办 does not alone guarantee approval. The object names the administrative item rather than something physically made by hand.",
    "level": 2,
    "examples": [
      {
        "zh": "我明天去办护照。",
        "en": "Tomorrow I am going to apply for a passport."
      },
      {
        "zh": "入住以前，我们要先办手续。",
        "en": "Before moving in, we must complete the paperwork."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 288,
        "topic": "办 with documents and procedures",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "办",
      "手续"
    ]
  },
  {
    "id": "ic-l1p2-l19-period-positions",
    "pattern": "月 / 年 + 初 / 中 / 底",
    "title": "Beginning, middle, and end of a month or year",
    "explanation": "初、中 and 底 can combine with 月 or 年 to name the beginning, middle, or end of that period. 六月初 means the early part of June; 月底 means toward the month’s end. These refer to approximate portions rather than precisely fixed date ranges. In the usage taught here, these compounds do not take 星期; use another expression such as 这个星期开始的时候 for the beginning of a week. A named month or year can make the reference clear.",
    "level": 2,
    "examples": [
      {
        "zh": "我们打算十月中去杭州。",
        "en": "We plan to go to Hangzhou in the middle of October."
      },
      {
        "zh": "这个项目年底才能完成。",
        "en": "This project will not be completed until the end of the year."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 297,
        "topic": "月 and 年 with 初、中、底",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "初",
      "中",
      "底",
      "月初",
      "月中",
      "月底",
      "年初",
      "年底"
    ]
  },
  {
    "id": "ic-l1p2-l19-discount",
    "pattern": "打 + discount number + 折",
    "title": "Chinese discounts state the fraction of the price paid",
    "explanation": "折 expresses the portion of the original price still paid, on a scale where ten would be full price. 打八折 means pay 80 percent of the original price, so the reduction is 20 percent. 七五折 means 75 percent of the price, read digit by digit; 对折 means half price. 打几折 asks what proportion is being charged. Calculate the sale price from the remaining percentage, rather than treating the 折 number as the percentage taken off.",
    "level": 3,
    "examples": [
      {
        "zh": "这件外套原价五百元，打八折后是四百元。",
        "en": "This coat originally costs 500 yuan; after a 20-percent discount it is 400."
      },
      {
        "zh": "今天书店打七五折，买书能省四分之一。",
        "en": "Today the bookstore charges 75 percent of the regular price, saving a quarter."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 298,
        "topic": "Stating a discount",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 305,
        "topic": "Stating a discount",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 306,
        "topic": "Stating a discount",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "打折",
      "折",
      "对折"
    ]
  },
  {
    "id": "ic-l1p2-l19-duile",
    "pattern": "对了，+ remembered point",
    "title": "Introduce something that just occurred to you",
    "explanation": "As a conversational opener, 对了 can signal a newly remembered detail or a return to something the speaker nearly forgot. English often uses “oh, by the way” or “oh, yes.” The phrase introduces the new point and is not necessarily agreeing with the previous statement. Keep it separate from a literal assertion that an answer is right. It can add a practical question or reminder just before a conversation ends.",
    "level": 2,
    "examples": [
      {
        "zh": "对了，你的伞还在我家。",
        "en": "Oh, by the way, your umbrella is still at my home."
      },
      {
        "zh": "谢谢你送我。对了，明天几点集合？",
        "en": "Thank you for giving me a ride. Oh, yes, what time do we meet tomorrow?"
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 298,
        "topic": "Remembering another point with 对了",
        "section": "Language Notes"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 307,
        "topic": "Remembering another point with 对了",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "对了"
    ]
  },
  {
    "id": "ic-l1p2-l19-zou-depart",
    "pattern": "time + 走",
    "title": "走 meaning leave or depart",
    "explanation": "走 can describe leaving or departing, in addition to walking. A question such as 你几点走 asks for the departure time and does not specify whether the person travels on foot, by train, or by plane. 来、去 and 回来 can locate the journey relative to the speaker, while 走 often focuses simply on departure. If walking itself is the topic, 走路 makes that meaning clearer.",
    "level": 2,
    "examples": [
      {
        "zh": "我们的火车早上七点走。",
        "en": "Our train leaves at seven in the morning."
      },
      {
        "zh": "你明天就走吗？我来送你。",
        "en": "Are you leaving tomorrow? I will come to see you off."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 298,
        "topic": "走 as depart",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "走"
    ]
  },
  {
    "id": "ic-l1p2-l19-serve-as",
    "pattern": "当 + role / function",
    "title": "Take on or use something in a role",
    "explanation": "当 followed by a role or occupation means serve as or become that kind of person. 在这次旅行中当导游 describes taking the guide’s role for the trip; 想当老师 describes a career aspiration. The same role meaning appears when an amount or item is used as something else, such as 付一个月房租当押金. 当 is pronounced dāng in these uses. It differs from 当…的时候, which can frame a time clause.",
    "level": 2,
    "examples": [
      {
        "zh": "我想当一名中文老师。",
        "en": "I would like to become a Chinese teacher."
      },
      {
        "zh": "这次活动我当主持人，你负责拍照。",
        "en": "I will be the host for this event, and you will take care of the photography."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 294,
        "topic": "当 for a role or function",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 17,
        "pdfPage": 242,
        "topic": "当 for a role or function",
        "section": "Dialogue"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 288,
        "topic": "当 for a role or function",
        "section": "Dialogue"
      }
    ],
    "relatedTokens": [
      "当"
    ],
    "tokenReadings": {
      "当": [
        "dāng"
      ]
    }
  },
  {
    "id": "ic-l1p2-l20-de-attributive",
    "pattern": "modifier + 的 + noun / understood noun",
    "title": "的 connects a modifier to what it describes",
    "explanation": "的 links a preceding modifier to a nominal expression. The modifier can be an adjective, a possessor, or a clause containing an action. The following noun may be omitted when it is understood, as in 我买的. A nominal expression can also represent an attribute or event: 广州的热 treats heat as something being discussed. The particle belongs to a noun-modifying structure and is not the same as the 得 after a predicate or the 地 before an action. All three are commonly pronounced de, but their written forms mark different grammatical jobs.",
    "level": 3,
    "examples": [
      {
        "zh": "这是朋友送给我的杯子。",
        "en": "This is the cup a friend gave me."
      },
      {
        "zh": "蓝色的太小，我想试试黑色的。",
        "en": "The blue one is too small; I would like to try the black one."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 320,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 321,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "的"
    ]
  },
  {
    "id": "ic-l1p2-l20-de-adverbial",
    "pattern": "manner expression + 地 + V",
    "title": "地 links how an action is done to the action",
    "explanation": "地 appears after a manner expression and before the verb it modifies. An adjective, adverb, or phrase may supply that expression: 安静地听、慢慢地走 or 很认真地回答. It describes the way the subject carries out the action. Some common manner expressions permit omission of 地, but when the particle is written its role is to connect an adverbial to a following predicate. It does not make the adjective the cause of the following event; that cause-and-effect connection often uses 得 instead.",
    "level": 3,
    "examples": [
      {
        "zh": "她认真地听完了说明。",
        "en": "She listened carefully to the instructions from beginning to end."
      },
      {
        "zh": "请慢慢地念，我想把每个音听清楚。",
        "en": "Please read slowly; I want to hear every sound clearly."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 321,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "地"
    ],
    "tokenReadings": {
      "地": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l20-de-complement",
    "pattern": "V / adjective + 得 + description / degree",
    "title": "得 introduces a description after the predicate",
    "explanation": "得 follows a verb or adjective and connects it to a complement describing manner, outcome, or degree. 跑得快 describes how someone runs; 急得哭了 presents crying as the effect of anxiety. If a verb has an object, the object commonly appears before a repeated verb carrying 得, as in 做饭做得好. 得 in a descriptive complement is distinct from 得 between a verb and result in a potential form such as 看得懂, even though the character is the same.",
    "level": 3,
    "examples": [
      {
        "zh": "他解释得很清楚，大家都懂了。",
        "en": "He explained very clearly, and everyone understood."
      },
      {
        "zh": "我着急得一夜没睡。",
        "en": "I was so anxious that I did not sleep all night."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 321,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 322,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "得"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l20-de-comparison",
    "pattern": "高兴地 + V versus 高兴得 + result",
    "title": "Compare noun modifier, manner, and result roles",
    "explanation": "Choose the particle by the relationship, not by its sound. 的 introduces a modifier of a noun; 地 presents a manner before an action; 得 supplies a description or result after a predicate. 开心地唱 says the singing was done happily, while 开心得唱起来 says happiness prompted singing to start. The first makes happiness the manner of the action, while the second makes it the cause. This contrast helps when the same adjective can appear on either side of the predicate.",
    "level": 3,
    "examples": [
      {
        "zh": "她开心地画了一张画。",
        "en": "She happily drew a picture."
      },
      {
        "zh": "她开心得跳了起来。",
        "en": "She was so happy that she jumped up."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 322,
        "topic": "的 (de), 得 (de), 地 (de) Compared",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "的",
      "地",
      "得"
    ],
    "tokenReadings": {
      "得": [
        "de"
      ],
      "地": [
        "de"
      ]
    }
  },
  {
    "id": "ic-l1p2-l20-when-after",
    "pattern": "V1 + 的时候，V2 / V1 + (了) + 以后，V2",
    "title": "Distinguish the time of an event from what happens afterward",
    "explanation": "的时候 places the main event at the time of the first event; 以后 places it after that event. 吃饭的时候聊天 means chatting while eating, whereas 吃饭以后聊天 means chatting after the meal. A completed first event can take 了 before 以后. English “when” sometimes loosely means “after”; choose 以后 if the Chinese statement intends a sequence rather than overlap. A time clause commonly precedes the main clause, and its subject may be understood from context.",
    "level": 3,
    "examples": [
      {
        "zh": "做饭的时候，我喜欢听音乐。",
        "en": "I like to listen to music while cooking."
      },
      {
        "zh": "做完饭以后，我把厨房打扫了一遍。",
        "en": "After finishing the cooking, I cleaned the kitchen."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 322,
        "topic": "…的时候 (...de shíhou) and …以后 (...yǐhòu) Compared",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 323,
        "topic": "…的时候 (...de shíhou) and …以后 (...yǐhòu) Compared",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 324,
        "topic": "…的时候 (...de shíhou) and …以后 (...yǐhòu) Compared",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 325,
        "topic": "…的时候 (...de shíhou) and …以后 (...yǐhòu) Compared",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "的时候",
      "时候",
      "以后"
    ]
  },
  {
    "id": "ic-l1p2-l20-hai-acceptable",
    "pattern": "还 + 好 / 可以 / 行 / 不错",
    "title": "A moderate, tactful positive assessment",
    "explanation": "Before a positive assessment, 还 can express that something is acceptable or fairly good without giving strong praise. 还好、还可以、还行 and 还不错 are common responses to requests for an opinion. Depending on tone, 还不错 can be reasonably enthusiastic, so it is not a fixed numerical rating. This evaluative use differs from 还 meaning still or also. It is useful for a tactful answer, but should not be substituted for a clear enthusiastic compliment when that is what the speaker intends.",
    "level": 3,
    "examples": [
      {
        "zh": "这家小旅馆还不错，房间很干净。",
        "en": "This small hotel is pretty good; the rooms are clean."
      },
      {
        "zh": "你觉得这把椅子舒服吗？还可以。",
        "en": "Do you find this chair comfortable? It is all right."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 331,
        "topic": "还 (hái) + Positive Adjective",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 334,
        "topic": "还 (hái) + Positive Adjective",
        "section": "Language Practice"
      }
    ],
    "relatedTokens": [
      "还",
      "还好",
      "还可以",
      "还行",
      "还不错"
    ],
    "tokenReadings": {
      "还": [
        "hái"
      ]
    }
  },
  {
    "id": "ic-l1p2-l20-kinship-parents-siblings",
    "pattern": "父母 / 哥姐弟妹 + spouse terms",
    "title": "Parents, siblings, and their spouses",
    "explanation": "Chinese sibling terms mark both gender and relative age: 哥哥 and 姐姐 are older than the speaker, while 弟弟 and 妹妹 are younger. 爸爸、妈妈 are everyday terms for parents; 父亲、母亲 are more formal. Siblings’ spouses have distinct terms: an older brother’s wife is 嫂子 or 嫂嫂, an older sister’s husband is 姐夫, a younger brother’s wife is 弟妹, and a younger sister’s husband is 妹夫. Determine the relationship from the speaker’s position in the family, rather than using a single translation for every in-law.",
    "level": 2,
    "examples": [
      {
        "zh": "我哥哥和嫂子住在南京。",
        "en": "My older brother and his wife live in Nanjing."
      },
      {
        "zh": "姐姐比我大五岁，姐夫比我大六岁。",
        "en": "My older sister is five years older than I am, and her husband is six years older."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 332,
        "topic": "Kinship Terms",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 333,
        "topic": "Kinship Terms",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "爸爸",
      "妈妈",
      "父亲",
      "母亲",
      "哥哥",
      "姐姐",
      "弟弟",
      "妹妹",
      "嫂子",
      "嫂嫂",
      "姐夫",
      "弟妹",
      "妹夫"
    ]
  },
  {
    "id": "ic-l1p2-l20-kinship-grandparents",
    "pattern": "爷爷奶奶 / 外公外婆 / 姥爷姥姥",
    "title": "Distinguish paternal and maternal grandparents",
    "explanation": "爷爷 and 奶奶 normally name the father’s parents. The mother’s parents are 外公 and 外婆 in common southern usage, or 姥爷 and 姥姥 in common northern usage. Formal terms are 祖父、祖母 for paternal grandparents and 外祖父、外祖母 for maternal grandparents. Actual household preferences vary, so the regional labels are tendencies rather than rules for every family. The relationship is defined from the speaker’s viewpoint.",
    "level": 2,
    "examples": [
      {
        "zh": "奶奶是爸爸的妈妈，外婆是妈妈的妈妈。",
        "en": "Paternal grandmother is Dad’s mother, and maternal grandmother is Mom’s mother."
      },
      {
        "zh": "暑假我先去看爷爷，再去看姥爷。",
        "en": "During summer break I will first visit my paternal grandfather and then my maternal grandfather."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 332,
        "topic": "Kinship Terms",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "爷爷",
      "奶奶",
      "外公",
      "外婆",
      "姥爷",
      "姥姥",
      "祖父",
      "祖母",
      "外祖父",
      "外祖母"
    ]
  },
  {
    "id": "ic-l1p2-l20-kinship-uncles-aunts",
    "pattern": "伯 / 叔 / 姑 / 舅 / 姨",
    "title": "Uncles and aunts depend on the exact relationship",
    "explanation": "A father’s older brother is 伯伯 or 伯父, and his younger brother is 叔叔 or 叔父. Their wives are 伯母 and 婶婶 respectively. A father’s sister is 姑姑 or 姑妈, and her husband is 姑父 or 姑丈. A mother’s brother is 舅舅, with 舅妈 for his wife; a mother’s sister is 姨、阿姨 or 姨妈, with 姨父 or 姨丈 for her husband. Northern alternatives include 大爷 for a father’s older brother and 大妈 or 大娘 for his wife. Local usage and forms of direct address can vary.",
    "level": 3,
    "examples": [
      {
        "zh": "爸爸的弟弟是我叔叔，妈妈的弟弟是我舅舅。",
        "en": "Dad’s younger brother is my paternal uncle; Mom’s younger brother is my maternal uncle."
      },
      {
        "zh": "姑姑和姑父请姨妈、姨父来吃饭。",
        "en": "My paternal aunt and her husband invited my maternal aunt and her husband to dinner."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 332,
        "topic": "Kinship Terms",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 333,
        "topic": "Kinship Terms",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "伯伯",
      "伯父",
      "伯母",
      "叔叔",
      "叔父",
      "婶婶",
      "姑姑",
      "姑妈",
      "姑父",
      "姑丈",
      "舅舅",
      "舅妈",
      "阿姨",
      "姨妈",
      "姨父",
      "姨丈",
      "大爷",
      "大妈",
      "大娘"
    ]
  },
  {
    "id": "ic-l1p2-l20-kinship-cousins",
    "pattern": "堂 / 表 + 哥 / 弟 / 姐 / 妹",
    "title": "Cousin terms mark lineage, gender, and age",
    "explanation": "Children of the father’s brothers take 堂 in the standard kinship system; other cousins take 表. Add 哥、弟、姐 or 妹 according to that cousin’s gender and whether they are older or younger than the speaker. Thus a father’s brother’s younger son is 堂弟, while a mother’s sister’s older daughter is 表姐. The age comparison is to the speaker, not to the cousin’s own siblings. Regional everyday usage may simplify these distinctions, but the standard terms preserve them.",
    "level": 3,
    "examples": [
      {
        "zh": "伯伯的女儿比我大，我叫她堂姐。",
        "en": "My father’s older brother’s daughter is older than I am, so I call her my older female paternal-line cousin."
      },
      {
        "zh": "舅舅的儿子比我小，是我的表弟。",
        "en": "My mother’s brother’s son is younger than I am; he is my younger male cousin."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 333,
        "topic": "Kinship Terms",
        "section": "Grammar"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 132,
        "topic": "表姐 and 堂姐",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "堂哥",
      "堂弟",
      "堂姐",
      "堂妹",
      "表哥",
      "表弟",
      "表姐",
      "表妹"
    ]
  },
  {
    "id": "ic-l1p2-l20-kinship-descendants",
    "pattern": "儿女 + spouse terms / 孙 + lineage marker",
    "title": "Children, their spouses, and grandchildren",
    "explanation": "儿子 and 女儿 mean son and daughter. A son’s wife is 儿媳妇, while a daughter’s husband is 女婿. A son’s children are 孙子 and 孙女; a daughter’s children are 外孙 and 外孙女. The terms therefore mark the route through the family, as well as the grandchild’s gender. In casual family speech affectionate names may replace these relationship terms, but the standard labels specify the relationship from the older relative’s viewpoint.",
    "level": 3,
    "examples": [
      {
        "zh": "我女儿的丈夫是我的女婿。",
        "en": "My daughter’s husband is my son-in-law."
      },
      {
        "zh": "她有一个孙女和两个外孙。",
        "en": "She has a granddaughter through her son and two grandsons through her daughter."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 333,
        "topic": "Kinship Terms",
        "section": "Grammar"
      }
    ],
    "relatedTokens": [
      "儿子",
      "女儿",
      "儿媳妇",
      "女婿",
      "孙子",
      "孙女",
      "外孙",
      "外孙女"
    ]
  },
  {
    "id": "ic-l1p2-l20-respectful-kinship",
    "pattern": "叔叔 / 阿姨 + greeting",
    "title": "Use kinship terms respectfully for unrelated adults",
    "explanation": "叔叔 and 阿姨 can address an unrelated adult roughly of one’s parents’ generation, especially in a child’s or young person’s speech. The terms express warmth and respect without claiming an actual family relationship. A friend’s parents may be greeted this way, but suitability depends on age and social setting. When addressing a professional or someone whose preference is known, their title or preferred name may be more suitable.",
    "level": 2,
    "examples": [
      {
        "zh": "阿姨，您好！我是小雨的同学。",
        "en": "Hello, auntie! I am Xiaoyu’s classmate."
      },
      {
        "zh": "叔叔，谢谢您来接我们。",
        "en": "Uncle, thank you for coming to pick us up."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 328,
        "topic": "Kinship terms as respectful address",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "叔叔",
      "阿姨"
    ]
  },
  {
    "id": "ic-l1p2-l20-mafan-request",
    "pattern": "麻烦 + person + V / 麻烦 + V",
    "title": "Acknowledge the trouble of asking for help",
    "explanation": "麻烦 at the beginning of a request politely acknowledges that the requested help takes effort. It can be followed by 您 or 你 and then the action, or directly by a help expression. The requested action can contain 把, as in 麻烦您把…拿来. This verb-like courtesy use differs from describing a situation as 麻烦, meaning troublesome. It does not replace the actual requested action; say clearly what assistance is needed.",
    "level": 2,
    "examples": [
      {
        "zh": "麻烦您帮我查一下房间号。",
        "en": "Would you please help me check the room number?"
      },
      {
        "zh": "麻烦你把窗户关上。",
        "en": "Please close the window for me."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 315,
        "topic": "麻烦 introducing a polite request",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "麻烦"
    ]
  },
  {
    "id": "ic-l1p2-l20-haoxiang",
    "pattern": "好像 + clause / predicate",
    "title": "A cautious impression based on appearances",
    "explanation": "好像 before a predicate presents an impression or tentative conclusion: seems, appears, or looks as though. It can precede a change marked by 了, such as 好像瘦了, or a state such as 好像很累. The speaker does not present the judgment as certain. In this pattern 好像 is not a demand for similarity to a named comparison object; that comparison is more explicit with 像…一样.",
    "level": 2,
    "examples": [
      {
        "zh": "这只猫好像饿了，一直看着碗。",
        "en": "This cat seems hungry; it keeps looking at the bowl."
      },
      {
        "zh": "你今天好像很累，要不要早点休息？",
        "en": "You seem tired today; would you like to rest early?"
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 334,
        "topic": "Tentative observations with 好像",
        "section": "Language Practice"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 329,
        "topic": "Tentative observations with 好像",
        "section": "Dialogue"
      }
    ],
    "relatedTokens": [
      "好像"
    ]
  },
  {
    "id": "ic-l1p2-l16-deal",
    "pattern": "一言为定",
    "title": "Confirm a shared decision or promise",
    "explanation": "一言为定 confirms that the parties have reached an agreement and expect it to be honored. It can stand alone after the arrangements have been settled, or follow a brief confirmation of the plan. It is stronger than merely acknowledging what another person said; both sides should understand what is being agreed. It is a fixed four-character expression, not a productive pattern requiring learners to add an object after 定.",
    "level": 2,
    "examples": [
      {
        "zh": "周六九点在门口见，一言为定。",
        "en": "Let us meet at the entrance at nine on Saturday; it is a deal."
      },
      {
        "zh": "你带水果，我带茶。一言为定！",
        "en": "You bring fruit, and I will bring tea. Agreed!"
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 342,
        "topic": "Confirming an agreement",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 343,
        "topic": "Confirming an agreement",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 16,
        "pdfPage": 200,
        "topic": "Confirming an agreement",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "一言为定"
    ]
  },
  {
    "id": "ic-l1p2-l19-approval-degrees",
    "pattern": "不错 / 很好 / 好得很 / 非常好 / 好极了",
    "title": "Different ways to strengthen approval",
    "explanation": "Positive assessments range from 不错, which literally negates being bad, through 很好 and 非常好 to emphatic complement patterns such as 好得很、好极了 and 好得不得了. 很 can serve as an ordinary link to an adjectival predicate and is not always strongly emphatic. 得很 follows the adjective, whereas 非常 precedes it. 极了 follows an adjective directly; 得不得了 includes 得. The expressions offer different degrees of enthusiasm, but their exact force depends on tone and context rather than a rigid scale.",
    "level": 2,
    "examples": [
      {
        "zh": "这次展览办得不错。",
        "en": "This exhibition was organized quite well."
      },
      {
        "zh": "你的建议好极了，我们就这样做。",
        "en": "Your suggestion is excellent; let us do it that way."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 343,
        "topic": "Varying degrees of approval",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 19,
        "pdfPage": 344,
        "topic": "Varying degrees of approval",
        "section": "Functional Expressions"
      }
    ],
    "relatedTokens": [
      "不错",
      "很",
      "非常",
      "得很",
      "极了",
      "不得了"
    ]
  },
  {
    "id": "ic-l1p2-l20-casual-greetings",
    "pattern": "observed activity + 呀 / question",
    "title": "Greet someone by commenting on their activity",
    "explanation": "An everyday greeting can take the form of a casual question about an obvious activity, such as asking whether someone is heading home. It often acknowledges the person warmly rather than requesting a detailed explanation. A short answer matching the situation is natural. 呀 can soften the question’s tone. This practice depends on familiarity and context; the standard 你好 or an appropriate title remains useful where an activity comment would seem intrusive.",
    "level": 2,
    "examples": [
      {
        "zh": "小周，买菜去呀？对，去市场。",
        "en": "Xiao Zhou, going to buy groceries? Yes, to the market."
      },
      {
        "zh": "你回来了？刚到。",
        "en": "You are back? I have just arrived."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 344,
        "topic": "Greetings through casual questions",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 345,
        "topic": "Greetings through casual questions",
        "section": "Functional Expressions"
      },
      {
        "bookId": "l1p2-textbook",
        "lesson": 14,
        "pdfPage": 142,
        "topic": "你们来了 as a greeting",
        "section": "Language Notes"
      }
    ],
    "relatedTokens": [
      "呀",
      "回来"
    ]
  },
  {
    "id": "ic-l1p2-l20-courtesy-farewells",
    "pattern": "慢走 / 慢吃 / 慢用 / 回头见",
    "title": "Courteous departures and leaving the table",
    "explanation": "慢走 is a courteous farewell to someone leaving, roughly “take care,” rather than usually a literal order to walk slowly. 慢吃 and 慢用 can politely acknowledge people who are still eating when the speaker finishes or leaves first; 慢用 is more formal. 回头见 means see you later and does not specify an exact appointment. These fixed expressions handle particular social moments and should be interpreted by the occasion.",
    "level": 2,
    "examples": [
      {
        "zh": "您慢走，下次再来。",
        "en": "Take care on your way, and please come again."
      },
      {
        "zh": "我吃好了，你们慢用。",
        "en": "I have finished eating; please enjoy the rest of your meal."
      }
    ],
    "sources": [
      {
        "bookId": "l1p2-textbook",
        "lesson": 20,
        "pdfPage": 345,
        "topic": "Farewells and dining courtesies",
        "section": "Functional Expressions"
      }
    ],
    "relatedTokens": [
      "慢走",
      "慢吃",
      "慢用",
      "回头见"
    ]
  }
];
