import type { GrammarNote } from '../types';
import { icLevel1Part1Notes } from './icLevel1Part1';
import { icLevel1Part2Notes } from './icLevel1Part2';
import { icLevel1WorkbookNotes, workbookGrammarCoverage } from './icLevel1Workbook';

// Original teaching notes. These are practical reading explanations, not an HSK syllabus.
export const coreGrammarNotes: GrammarNote[] = [
  { id: 'de-attributive', pattern: '的', title: 'Connecting a description to a noun', level: 1,
    explanation: 'Put 的 after an owner or a description and before the noun it describes. The phrase before 的 tells you whose thing it is or what kind of thing it is. Very close relationships and familiar short adjective phrases sometimes omit 的.',
    examples: [{ zh: '这是我的书。', en: 'This is my book.' }, { zh: '穿红衣服的人是我的老师。', en: 'The person wearing red clothes is my teacher.' }] },
  { id: 'le-change', pattern: '了', title: 'Completion and a change of situation', level: 2,
    explanation: 'After a verb, 了 often presents an event as completed. At the end of a sentence, it often signals a new situation. It is not a general past-tense ending: past habits may have no 了, and a future change may use 了.',
    examples: [{ zh: '我买了两本书。', en: 'I bought two books.' }, { zh: '天冷了。', en: 'The weather has turned cold.' }] },
  { id: 'ma-question', pattern: '吗', title: 'Asking a yes-or-no question', level: 1,
    explanation: 'Add 吗 to a statement to ask whether it is true. Keep the original word order. Do not usually add 吗 when a question word such as 什么 or 谁 already asks the question.',
    examples: [{ zh: '你喜欢茶吗？', en: 'Do you like tea?' }] },
  { id: 'ne-followup', pattern: '呢', title: 'Asking “what about?”', level: 1,
    explanation: 'After a noun or pronoun, 呢 can ask a related follow-up question whose meaning comes from the conversation. It also softens some questions and can emphasize that an action is ongoing.',
    examples: [{ zh: '我喝茶，你呢？', en: 'I drink tea. What about you?' }, { zh: '你的书在哪儿呢？', en: 'Where is your book?' }] },
  { id: 'ba-suggestion', pattern: '吧', title: 'A gentle suggestion or guess', level: 2,
    explanation: 'Sentence-final 吧 can soften a suggestion, invitation, or command. It can also mark a tentative guess. Its meaning depends on the whole sentence and tone of voice.',
    examples: [{ zh: '我们走吧。', en: 'Let’s go.' }, { zh: '他是你的朋友吧？', en: 'He is your friend, right?' }] },
  { id: 'bu-negative', pattern: '不', title: 'Negating habits, wishes, and states', level: 1,
    explanation: 'Place 不 before a verb or adjective to negate a usual action, intention, or state. To say that an event did not happen or that you do not have something, 没 or 没有 is generally used instead. 不 changes pronunciation to bú before a fourth tone.',
    examples: [{ zh: '我不喝咖啡。', en: 'I do not drink coffee.' }] },
  { id: 'mei-negative', pattern: '没 / 没有', title: 'Saying an event did not happen', level: 1,
    explanation: '没 or 没有 before a verb says that the event has not happened or did not happen. 没有 also means “do not have.” A completion 了 is normally omitted when the event is negated this way.',
    examples: [{ zh: '我昨天没有去学校。', en: 'I did not go to school yesterday.' }, { zh: '我没有时间。', en: 'I do not have time.' }] },
  { id: 'hen-degree', pattern: '很', title: 'Linking a subject and an adjective', level: 1,
    explanation: '很 before an adjective often makes a neutral descriptive sentence sound natural. In that use, it need not mean strongly “very.” Stress or context can give it the stronger meaning.',
    examples: [{ zh: '这本书很有趣。', en: 'This book is interesting.' }] },
  { id: 'ye-also', pattern: '也', title: 'Adding a similar fact', level: 1,
    explanation: 'Put 也 before the verb or adjective, after the subject. It means “also” and connects the statement to a similar fact in the conversation. It cannot normally go at the end of the sentence like English “too.”',
    examples: [{ zh: '她学中文，我也学中文。', en: 'She studies Chinese, and I study Chinese too.' }] },
  { id: 'dou-all', pattern: '都', title: 'Including everyone or everything', level: 1,
    explanation: '都 usually comes before the verb and refers back to a plural group or a set introduced earlier. 都不 means none of the group does it; 不都 means not every member does it.',
    examples: [{ zh: '我们都喜欢这个故事。', en: 'We all like this story.' }] },
  { id: 'zai-location', pattern: '在', title: 'Location and ongoing action', level: 1,
    explanation: '在 + place gives a location; place phrases usually come before the main action. 在 before a verb can instead say that the action is in progress. Context tells these uses apart.',
    examples: [{ zh: '他在图书馆看书。', en: 'He reads at the library.' }, { zh: '他在看书。', en: 'He is reading.' }] },
  { id: 'zhengzai-progress', pattern: '正在', title: 'Emphasizing what is happening now', level: 2,
    explanation: 'Put 正在 before the verb to emphasize that an action is happening at the reference time. The reference time can be now or a time specified elsewhere in the sentence.',
    examples: [{ zh: '我正在做饭。', en: 'I am cooking right now.' }] },
  { id: 'he-and', pattern: '和', title: 'Joining nouns', level: 1,
    explanation: '和 joins nouns or noun phrases: “A and B.” It does not generally join two complete clauses the way English “and” does. It can also mean “with” before a person.',
    examples: [{ zh: '我和妹妹都喜欢音乐。', en: 'My younger sister and I both like music.' }] },
  { id: 'gen-with', pattern: '跟', title: 'Doing something with someone', level: 2,
    explanation: '跟 + person often means “with” and appears before the action. 跟 can also join nouns in conversation, or introduce the person with whom you compare something.',
    examples: [{ zh: '我跟朋友一起去。', en: 'I am going with a friend.' }] },
  { id: 'ge-classifier', pattern: '个', title: 'Counting with a measure word', level: 1,
    explanation: 'A number or demonstrative usually takes a measure word before a noun. 个 is a common general measure word, especially for people and many everyday things, but many nouns use a more specific one.',
    examples: [{ zh: '这里有三个学生。', en: 'There are three students here.' }] },
  { id: 'liang-two', pattern: '两', title: 'Two before a measure word', level: 1,
    explanation: 'Use 两 for “two” before most measure words and often before large counting units. Use 二 when reading digits, counting in order, or saying the second item with 第二.',
    examples: [{ zh: '我要两杯茶。', en: 'I would like two cups of tea.' }] },
  { id: 'di-order', pattern: '第', title: 'An ordinal number', level: 2,
    explanation: '第 before a number marks order: first, second, and so on. A measure word may follow the ordinal when referring to a particular counted item.',
    examples: [{ zh: '这是我读的第三本中文书。', en: 'This is the third Chinese book I have read.' }] },
  { id: 'mei-each', pattern: '每', title: 'Each and every', level: 2,
    explanation: '每 + measure word + noun means each member of a group. 都 often appears later to show that the same statement applies to all of them. Time words may follow 每 directly: 每天, 每年.',
    examples: [{ zh: '每个孩子都有一本书。', en: 'Every child has a book.' }] },
  { id: 'hui-ability', pattern: '会', title: 'Learned ability or a prediction', level: 1,
    explanation: '会 before a verb can mean that you know how to do something you learned. In another context it predicts what will happen. It does not by itself mark every future event.',
    examples: [{ zh: '她会说中文。', en: 'She can speak Chinese.' }, { zh: '明天会下雨。', en: 'It will rain tomorrow.' }] },
  { id: 'neng-ability', pattern: '能', title: 'Ability under the circumstances', level: 2,
    explanation: '能 often describes physical ability or whether circumstances make an action possible. Compare 会, which often describes a learned skill, and 可以, which often gives permission.',
    examples: [{ zh: '我今天能早点回家。', en: 'I can get home earlier today.' }] },
  { id: 'keyi-permission', pattern: '可以', title: 'Permission and possibility', level: 1,
    explanation: '可以 before a verb says that an action is permitted or possible. 不可以 usually forbids it, while 不能 can also refer to a practical inability.',
    examples: [{ zh: '这里可以拍照吗？', en: 'May I take photos here?' }] },
  { id: 'yao-want', pattern: '要', title: 'Wanting, needing, or being about to', level: 1,
    explanation: '要 before a verb can express intention, need, or an approaching event. With a noun it can mean “want.” The surrounding words determine whether it is a wish, an obligation, or a prediction.',
    examples: [{ zh: '我要去买菜。', en: 'I am going to buy groceries.' }, { zh: '要下雨了。', en: 'It is about to rain.' }] },
  { id: 'xiang-wish', pattern: '想', title: 'A wish or intention', level: 1,
    explanation: '想 before an action expresses a wish or intention, usually more softly than 要. 想 + person can mean “miss”; 想 + idea can mean “think about.”',
    examples: [{ zh: '我想学写汉字。', en: 'I want to learn to write Chinese characters.' }] },
  { id: 'bie-prohibition', pattern: '别', title: 'Telling someone not to do something', level: 2,
    explanation: '别 before a verb is a direct negative instruction. 别……了 can ask someone to stop an action that is already happening.',
    examples: [{ zh: '别着急，我们还有时间。', en: 'Do not worry; we still have time.' }] },
  { id: 'guo-experience', pattern: '过', title: 'Having had an experience', level: 2,
    explanation: 'Verb + 过 says that someone has experienced an action at least once before. It focuses on the experience, rather than a particular completed event. 没 + verb + 过 negates the experience.',
    examples: [{ zh: '我去过西安。', en: 'I have been to Xi’an.' }] },
  { id: 'zhe-state', pattern: '着', title: 'A continuing state', level: 3,
    explanation: 'Verb + 着 describes an ongoing state, such as a door remaining open or someone wearing a coat. It can provide the background for another action. This suffix is pronounced zhe, with a neutral tone.',
    examples: [{ zh: '门开着。', en: 'The door is open.' }, { zh: '他笑着说谢谢。', en: 'He smiled as he said thank you.' }] },
  { id: 'de-adverb', pattern: '地', title: 'Describing how an action is done', level: 3,
    explanation: 'A description followed by 地 comes before the verb and says how the action is carried out. In this grammatical use, 地 is pronounced de, not dì as in “land.”',
    examples: [{ zh: '她认真地听老师说话。', en: 'She listens carefully to the teacher.' }] },
  { id: 'de-complement', pattern: '得', title: 'Describing the result or manner after a verb', level: 2, tokenReadings: { 得: ['de'] },
    explanation: 'Verb + 得 + description evaluates how an action is done: 跑得快. If the verb has an object, the verb is often repeated before 得. This 得 is pronounced de; 得 pronounced děi can instead mean “must.”',
    examples: [{ zh: '他说中文说得很好。', en: 'He speaks Chinese very well.' }] },
  { id: 'bi-comparison', pattern: '比', title: 'Comparing two things', level: 2,
    explanation: 'A 比 B + adjective says that A is more of that quality than B. Usually omit 很 before the adjective. A numerical difference can follow: 比昨天冷三度.',
    examples: [{ zh: '今天比昨天冷。', en: 'Today is colder than yesterday.' }] },
  { id: 'geng-more', pattern: '更', title: 'Even more', level: 2,
    explanation: '更 before an adjective or mental-state verb raises the degree relative to a comparison already understood. It can accompany 比 or stand on its own when the comparison is clear.',
    examples: [{ zh: '练习以后，我更有信心了。', en: 'After practicing, I feel more confident.' }] },
  { id: 'zui-most', pattern: '最', title: 'The greatest degree', level: 2,
    explanation: '最 before an adjective or a verb such as 喜欢 expresses the greatest degree within a relevant group. The comparison group may be stated or understood from context.',
    examples: [{ zh: '这是我最喜欢的故事。', en: 'This is my favorite story.' }] },
  { id: 'bijiao-relative', pattern: '比较', title: 'Relatively or fairly', level: 3,
    explanation: '比较 before an adjective can mean “relatively” or “fairly,” often making an evaluation less absolute. As a verb, 比较 means to compare things.',
    examples: [{ zh: '这条路比较安静。', en: 'This street is relatively quiet.' }] },
  { id: 'yuelaiyue-change', pattern: '越来越', title: 'An increasing degree', level: 3,
    explanation: '越来越 + adjective or mental-state verb describes a quality that increases as time passes. Do not add 很 to the same adjective phrase.',
    examples: [{ zh: '天气越来越暖和。', en: 'The weather is getting warmer and warmer.' }] },
  { id: 'hai-still', pattern: '还', title: 'Still, also, or another amount', level: 2,
    explanation: '还 before the predicate can mean “still,” “also,” or “in addition.” The context decides which. 还没 often means “not yet,” while 还要 may add another request or requirement.',
    examples: [{ zh: '她还在工作。', en: 'She is still working.' }, { zh: '我还想买一本书。', en: 'I also want to buy another book.' }] },
  { id: 'you-again', pattern: '又', title: 'A repeated event', level: 2,
    explanation: '又 often introduces a repetition that has happened or is already established. 再 more often refers to another occurrence that has not happened yet. 又……又…… can also join two qualities.',
    examples: [{ zh: '他今天又迟到了。', en: 'He was late again today.' }] },
  { id: 'zai-again', pattern: '再', title: 'Doing something again later', level: 2,
    explanation: '再 before a verb often describes a next or future repetition. It can also mean “then” after a first step, or “a little more” before an adjective.',
    examples: [{ zh: '请再说一遍。', en: 'Please say it again.' }, { zh: '我们先吃饭，再出发。', en: 'We will eat first, then set off.' }] },
  { id: 'jiu-early', pattern: '就', title: 'Soon, already, or a direct consequence', level: 3,
    explanation: '就 can signal that something happens early, quickly, or with little difficulty. It also links a condition to its consequence. Because its meaning is context-sensitive, read the whole clause before translating it.',
    examples: [{ zh: '我八点就到了。', en: 'I arrived as early as eight.' }, { zh: '你来，我就很高兴。', en: 'If you come, I will be happy.' }] },
  { id: 'cai-late', pattern: '才', title: 'Only then or only a small amount', level: 3,
    explanation: '才 can say that an event happens later than expected or only after a condition is met. Before a number it can emphasize a small amount. Its interpretation depends on the speaker’s expectation.',
    examples: [{ zh: '他十点才到。', en: 'He did not arrive until ten.' }, { zh: '这本书才十块钱。', en: 'This book costs only ten yuan.' }] },
  { id: 'yinwei-reason', pattern: '因为', title: 'Giving a reason', level: 2,
    explanation: '因为 introduces a reason. The result can follow with 所以; Chinese can use both words in the same sentence. Either part can also stand alone if the relationship is obvious.',
    examples: [{ zh: '因为下雨，所以我们在家看书。', en: 'Because it is raining, we are reading at home.' }] },
  { id: 'suoyi-result', pattern: '所以', title: 'Introducing a result', level: 2,
    explanation: '所以 links a reason or situation to its result. It is usually followed by the subject and the result clause. The reason may be introduced with 因为 or stated in the previous sentence.',
    examples: [{ zh: '路很远，所以我们坐车去。', en: 'It is a long way, so we are going by car.' }] },
  { id: 'suiran-concession', pattern: '虽然', title: 'Although', level: 3,
    explanation: '虽然 introduces a fact that might lead to one expectation; 但是 or 可是 introduces a contrasting outcome. Chinese often uses both conjunctions together.',
    examples: [{ zh: '虽然很累，但是她没有放弃。', en: 'Although she was tired, she did not give up.' }] },
  { id: 'danshi-contrast', pattern: '但是 / 可是', title: 'Introducing a contrast', level: 2,
    explanation: '但是 and 可是 introduce a fact that contrasts with what came before. 可是 often sounds more conversational. They can follow a 虽然 clause or connect two independent statements.',
    examples: [{ zh: '我想去，但是今天没有时间。', en: 'I want to go, but I have no time today.' }] },
  { id: 'ruguo-condition', pattern: '如果 / 要是', title: 'A hypothetical condition', level: 3,
    explanation: '如果 or the more conversational 要是 introduces “if.” A following 就 often connects the condition to its result. The condition can be real or hypothetical.',
    examples: [{ zh: '如果明天天气好，我们就去爬山。', en: 'If the weather is good tomorrow, we will go hiking.' }] },
  { id: 'zhiyao-sufficient', pattern: '只要', title: 'A sufficient condition', level: 4,
    explanation: '只要……就…… says that meeting this condition is enough for the result: “as long as.” Compare 只有……才……, which presents a necessary condition.',
    examples: [{ zh: '只要每天练习，就会进步。', en: 'As long as you practice every day, you will improve.' }] },
  { id: 'zhiyou-necessary', pattern: '只有', title: 'A necessary condition', level: 4,
    explanation: '只有……才…… says that the result can happen only when a condition is met. 只有 before a quantity can also mean “have only.”',
    examples: [{ zh: '只有认真听，才能听懂。', en: 'Only by listening carefully can you understand.' }] },
  { id: 'jishi-evenif', pattern: '即使', title: 'Even if', level: 4,
    explanation: '即使 introduces a hypothetical or real condition that does not prevent the result. The result often contains 也. It differs from 虽然, which normally states an accepted fact.',
    examples: [{ zh: '即使下雨，我们也会出发。', en: 'Even if it rains, we will set off.' }] },
  { id: 'wulun-regardless', pattern: '无论 / 不管', title: 'Regardless of the alternatives', level: 4,
    explanation: '无论 or 不管 introduces alternatives or a question expression, followed by 都 or 也 in the main clause. The outcome remains the same for every possibility.',
    examples: [{ zh: '无论你在哪儿，我都会支持你。', en: 'Wherever you are, I will support you.' }] },
  { id: 'bujin-notonly', pattern: '不仅', title: 'Not only', level: 4,
    explanation: '不仅……而且…… adds a second fact that often goes further than the first. When the same subject has both qualities, the subject usually precedes 不仅.',
    examples: [{ zh: '这本书不仅有趣，而且很实用。', en: 'This book is not only interesting but also useful.' }] },
  { id: 'erqie-addition', pattern: '而且', title: 'Adding a stronger point', level: 3,
    explanation: '而且 adds a related fact, often one that strengthens the previous statement. It can follow 不仅 or join clauses without it.',
    examples: [{ zh: '这里很安静，而且交通方便。', en: 'It is quiet here, and the transport is convenient too.' }] },
  { id: 'huozhe-alternative', pattern: '或者', title: 'Alternatives in a statement', level: 2,
    explanation: '或者 presents alternatives in statements: A or B. In a direct choice question, 还是 is normally used instead.',
    examples: [{ zh: '你可以喝茶或者咖啡。', en: 'You can have tea or coffee.' }] },
  { id: 'haishi-choice', pattern: '还是', title: 'Asking someone to choose', level: 2,
    explanation: 'Use A 还是 B to ask a choice question, normally without 吗. In statements, 还是 can instead mean “still” or suggest that one option is preferable.',
    examples: [{ zh: '你想喝茶还是咖啡？', en: 'Would you like tea or coffee?' }] },
  { id: 'yibian-simultaneous', pattern: '一边', title: 'Two actions at the same time', level: 3,
    explanation: '一边……一边…… connects two actions done at the same time by the same subject. It is most natural for actions that can continue together.',
    examples: [{ zh: '她一边走路，一边听音乐。', en: 'She listens to music while walking.' }] },
  { id: 'ba-disposal', pattern: '把', title: 'What happens to a known object', level: 3,
    explanation: 'Subject + 把 + known object + verb phrase focuses on how the object is affected. The verb normally needs a result, direction, or another complement; a bare verb is usually insufficient.',
    examples: [{ zh: '请把书放在桌子上。', en: 'Please put the book on the table.' }] },
  { id: 'bei-passive', pattern: '被', title: 'The affected person or thing as subject', level: 3,
    explanation: 'Subject + 被 + agent + verb phrase describes what happens to the subject. The agent can be omitted when unimportant. 被 often introduces an unwanted event, but positive and neutral uses are also possible.',
    examples: [{ zh: '我的伞被风吹走了。', en: 'My umbrella was blown away by the wind.' }] },
  { id: 'rang-causative', pattern: '让', title: 'Letting or asking someone to act', level: 2,
    explanation: '让 + person + verb phrase can mean let, make, or ask someone to do something. The context and relationship determine whether the action is permission or causation.',
    examples: [{ zh: '老师让我们读这个故事。', en: 'The teacher asked us to read this story.' }] },
  { id: 'gei-recipient', pattern: '给', title: 'Introducing a recipient', level: 2,
    explanation: '给 + person before a verb often introduces the person who receives or benefits from the action. 给 is also a verb meaning “give.” Some verbs place the recipient phrase after the verb.',
    examples: [{ zh: '我给妈妈写了一封信。', en: 'I wrote a letter to my mother.' }] },
  { id: 'dui-target', pattern: '对', title: 'A target or attitude', level: 3,
    explanation: '对 + person or thing before the predicate introduces the target of an attitude or action. 对……来说 means “from someone’s perspective” or “for someone.” 对 can also be an adjective meaning “correct.”',
    examples: [{ zh: '她对历史很感兴趣。', en: 'She is very interested in history.' }] },
  { id: 'cong-start', pattern: '从', title: 'A starting point', level: 2,
    explanation: '从 introduces a starting place, time, or perspective. 从 A 到 B gives a range. The phrase usually comes before the main verb.',
    examples: [{ zh: '我们从车站走到公园。', en: 'We walked from the station to the park.' }] },
  { id: 'dao-endpoint', pattern: '到', title: 'An endpoint or achieved result', level: 2,
    explanation: '到 can be a verb meaning “arrive,” introduce an endpoint, or follow a verb to show that its goal was achieved: 找到, 听到. The role depends on its position.',
    examples: [{ zh: '我终于找到钥匙了。', en: 'I finally found the key.' }] },
  { id: 'li-distance', pattern: '离', title: 'Distance between two points', level: 2,
    explanation: 'A 离 B + distance description tells how far A is from B. 离 can describe distance in space or time. 很近 and 很远 are common predicates.',
    examples: [{ zh: '我家离学校很近。', en: 'My home is close to the school.' }] },
  { id: 'weile-purpose', pattern: '为了', title: 'The purpose of an action', level: 3,
    explanation: '为了 + purpose usually comes before the main action. It explains what the action is intended to achieve, rather than its past cause.',
    examples: [{ zh: '为了学好中文，我每天读书。', en: 'To learn Chinese well, I read every day.' }] },
  { id: 'guanyu-topic', pattern: '关于', title: 'Introducing a topic', level: 4,
    explanation: '关于 + topic means “about” or “concerning.” It can introduce a noun phrase with 的, or set the topic at the beginning of a sentence.',
    examples: [{ zh: '我读了一本关于丝绸之路的书。', en: 'I read a book about the Silk Road.' }] },
  { id: 'chule-exception', pattern: '除了', title: 'An exception or an addition', level: 3,
    explanation: '除了……都…… usually excludes an item: everyone except it. 除了……还 / 也…… adds another item: besides it. Read the later word to distinguish the two patterns.',
    examples: [{ zh: '除了中文，她还会说法语。', en: 'Besides Chinese, she can also speak French.' }] },
  { id: 'yinggai-advice', pattern: '应该', title: 'What should happen', level: 2,
    explanation: '应该 before a verb expresses advice, an obligation, or a reasonable expectation. The meaning can be “should do” or “ought to be,” depending on the context.',
    examples: [{ zh: '你应该早点休息。', en: 'You should rest earlier.' }] },
  { id: 'bixu-necessity', pattern: '必须', title: 'A strong requirement', level: 3,
    explanation: '必须 before a verb says an action is required. 不必 or 不用 means “need not”; 不必须 is generally not the natural negation. Compare 必需, which describes something indispensable.',
    examples: [{ zh: '进入这里必须戴安全帽。', en: 'You must wear a safety helmet to enter here.' }] },
  { id: 'keneng-possibility', pattern: '可能', title: 'A possibility', level: 2,
    explanation: '可能 before the predicate means “may” or “possibly.” It expresses uncertainty about an event, whereas 可以 often concerns permission or practical possibility.',
    examples: [{ zh: '他可能在图书馆。', en: 'He may be at the library.' }] },
  { id: 'yexu-perhaps', pattern: '也许', title: 'Perhaps', level: 3,
    explanation: '也许 introduces a tentative possibility. It can appear before the subject or before the predicate. It is not a promise that the event will happen.',
    examples: [{ zh: '也许我们明天会见面。', en: 'Perhaps we will meet tomorrow.' }] },
  { id: 'qing-request', pattern: '请', title: 'A polite request', level: 1,
    explanation: '请 before a verb politely asks someone to act. It is common in instructions and service encounters. 请 + person + verb can also mean invite or ask a person to do something.',
    examples: [{ zh: '请慢一点说。', en: 'Please speak a little more slowly.' }] },
];

/** Original course notes retain source citations; workbook practice reuses the matching concept. */
export const grammarNotes: GrammarNote[] = [
  ...coreGrammarNotes, ...icLevel1Part1Notes, ...icLevel1Part2Notes, ...icLevel1WorkbookNotes,
].map(note => {
  const sources = [...(note.sources ?? []), ...workbookGrammarCoverage.filter(row => row.noteIds.includes(note.id)).flatMap(row => row.sources)];
  const distinct = [...new Map(sources.map(source => [`${source.bookId}:${source.lesson}:${source.pdfPage}:${source.topic}`, source])).values()];
  return distinct.length ? { ...note, sources: distinct } : note;
});

const aliases: Record<string, string> = {
  的: 'de-attributive', 了: 'le-change', 吗: 'ma-question', 呢: 'ne-followup', 吧: 'ba-suggestion',
  不: 'bu-negative', 没: 'mei-negative', 没有: 'mei-negative', 很: 'hen-degree', 也: 'ye-also', 都: 'dou-all',
  在: 'zai-location', 正在: 'zhengzai-progress', 和: 'he-and', 跟: 'gen-with', 个: 'ge-classifier',
  两: 'liang-two', 第: 'di-order', 每: 'mei-each', 会: 'hui-ability', 能: 'neng-ability', 可以: 'keyi-permission',
  要: 'yao-want', 想: 'xiang-wish', 别: 'bie-prohibition', 过: 'guo-experience', 着: 'zhe-state',
  地: 'de-adverb', 得: 'de-complement', 比: 'bi-comparison', 更: 'geng-more', 最: 'zui-most', 比较: 'bijiao-relative',
  越来越: 'yuelaiyue-change', 还: 'hai-still', 又: 'you-again', 再: 'zai-again', 就: 'jiu-early', 才: 'cai-late',
  因为: 'yinwei-reason', 所以: 'suoyi-result', 虽然: 'suiran-concession', 但是: 'danshi-contrast', 可是: 'danshi-contrast',
  如果: 'ruguo-condition', 要是: 'ruguo-condition', 只要: 'zhiyao-sufficient', 只有: 'zhiyou-necessary',
  即使: 'jishi-evenif', 无论: 'wulun-regardless', 不管: 'wulun-regardless', 不仅: 'bujin-notonly', 而且: 'erqie-addition',
  或者: 'huozhe-alternative', 还是: 'haishi-choice', 一边: 'yibian-simultaneous', 把: 'ba-disposal', 被: 'bei-passive',
  让: 'rang-causative', 给: 'gei-recipient', 对: 'dui-target', 从: 'cong-start', 到: 'dao-endpoint', 离: 'li-distance',
  为了: 'weile-purpose', 关于: 'guanyu-topic', 除了: 'chule-exception', 应该: 'yinggai-advice', 必须: 'bixu-necessity',
  可能: 'keneng-possibility', 也许: 'yexu-perhaps', 请: 'qing-request',
};
const notesById = new Map(grammarNotes.map(note => [note.id, note]));
const notesByPattern = new Map(coreGrammarNotes.map(note => [note.pattern, note]));
const relatedNotes = new Map<string, GrammarNote[]>();
for (const note of grammarNotes) {
  if (!notesByPattern.has(note.pattern)) notesByPattern.set(note.pattern, note);
  for (const token of note.relatedTokens ?? []) {
    relatedNotes.set(token, [...(relatedNotes.get(token) ?? []), note]);
  }
}
const grammaticalReadings: Record<string, string[]> = {
  的: ['de'], 地: ['de'], 得: ['de', 'dei'], 了: ['le'], 着: ['zhe'], 会: ['hui'],
  还: ['hai'], 给: ['gei'], 和: ['he'], 都: ['dou'], 为了: ['weile'], 不: ['bu'],
};
function grammaticalReading(word: string, pronunciation?: string): boolean {
  if (word === '得' && pronunciation && /^(dé|dè|de[24])$/i.test(pronunciation.trim())) return false;
  if (pronunciation && grammaticalReadings[word]) {
    const syllables = pronunciation.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f0-5\s]/g, '');
    if (!grammaticalReadings[word].includes(syllables)) return false;
  }
  return true;
}
function readingMatches(note: GrammarNote, word: string, pronunciation?: string): boolean {
  const readings = note.tokenReadings?.[word];
  if (!readings || !pronunciation) return true;
  const normalize = (text: string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f0-5\s]/g, '');
  return readings.some(reading => normalize(reading) === normalize(pronunciation));
}
export function grammarById(id: string): GrammarNote | undefined { return notesById.get(id); }
export function grammarFor(word: string, pronunciation?: string): GrammarNote | undefined {
  if (!grammaticalReading(word, pronunciation)) return undefined;
  return [notesById.get(aliases[word]), notesByPattern.get(word), ...(relatedNotes.get(word) ?? [])].find(note => note && readingMatches(note, word, pronunciation));
}
/** List related constructions without claiming every usage applies to the current sentence. */
export function grammarsFor(word: string, pronunciation?: string): GrammarNote[] {
  if (!grammaticalReading(word, pronunciation)) return [];
  const primary = grammarFor(word, pronunciation);
  return [...new Map([...(primary ? [primary] : []), ...(relatedNotes.get(word) ?? [])].filter(note => readingMatches(note, word, pronunciation)).map(note => [note.id, note])).values()];
}
