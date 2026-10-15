import type { GrammarNote, GrammarSource } from '../types';

// Original teaching notes for workbook usage points that add to the textbook syllabus.
// No scanned pages, exercise text, or OCR transcript is included in this module.
export const icLevel1WorkbookNotes: GrammarNote[] = [
  {
    "id": "ic-l1p1-wb-l1-o-realization",
    "pattern": "哦 + acknowledgement / realization",
    "title": "Acknowledging information or a realization with 哦",
    "level": 1,
    "explanation": "哦 is a short spoken reaction that can acknowledge information or mark a new realization. It can stand by itself or come before a comma and a further statement. Its force depends on tone of voice and context, so English responses such as “oh” and “I see” are approximations rather than one fixed definition.",
    "examples": [
      {
        "zh": "哦，那辆车是蓝色的。",
        "en": "Oh, that car is blue."
      },
      {
        "zh": "哦，你的姐姐住在楼上。",
        "en": "Oh, your older sister lives upstairs."
      }
    ],
    "relatedTokens": [
      "哦"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 7,
        "topic": "Acknowledging information or a realization with 哦",
        "section": "Reading comprehension / C"
      }
    ]
  },
  {
    "id": "ic-l1p1-wb-l4-frequency-adverbs",
    "pattern": "常常 + action / 有(的)时候 + clause",
    "title": "Distinguishing frequent and occasional actions",
    "level": 1,
    "explanation": "常常 describes a frequent activity and normally follows the subject before the action phrase. 有时候 or 有的时候 means “sometimes” and can appear before or after the subject, but still before the predicate. These expressions describe frequency. To say that someone has free time, use 有空 or 有时间 instead.",
    "examples": [
      {
        "zh": "我常常到河边看书。",
        "en": "I often go to the riverside to read."
      },
      {
        "zh": "有的时候，我和邻居一起做饭。",
        "en": "Sometimes I cook with my neighbor."
      }
    ],
    "relatedTokens": [
      "常常",
      "有时候",
      "有的时候"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 47,
        "topic": "Distinguishing frequent and occasional actions",
        "section": "Writing and grammar / C"
      },
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 48,
        "topic": "Distinguishing frequent and occasional actions",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "id": "ic-l1p1-wb-l8-tell-message",
    "pattern": "告诉 + person + message clause",
    "title": "Telling someone the content of a message",
    "level": 2,
    "explanation": "告诉 followed by a person names the recipient of information. A full clause can then state the message, keeping its own normal subject, time, and predicate order. If the message contains a prohibition, 不 or 不能 belongs inside that reported clause. A comma after the recipient can make a longer message easier to read.",
    "examples": [
      {
        "zh": "我告诉妈妈，图书馆今天开门。",
        "en": "I tell Mom that the library is open today."
      },
      {
        "zh": "小青告诉我，她周三下午有空。",
        "en": "Xiao Qing tells me that she is free on Wednesday afternoon."
      }
    ],
    "relatedTokens": [
      "告诉"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 121,
        "topic": "Telling someone the content of a message",
        "section": "Writing and grammar / D"
      }
    ]
  }
];

export interface WorkbookGrammarCoverage {
  lesson: number;
  topic: string;
  noteIds: string[];
  sources: GrammarSource[];
}

export const workbookSourceMetadata = {
  "bookId": "l1p1-workbook",
  "title": "Integrated Chinese — Level 1 Part 1 Workbook (supplied excerpt)",
  "status": "verified",
  "pdfPages": 160,
  "reviewedPages": 160,
  "sha256": "43413450cc0dd3feb68fbfe6cf66aac0db29ca5a64553b09c8babb89ed62826b",
  "lessons": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "printedPageRange": "15–184; divider pages omitted in the supplied scan",
  "edition": "Not independently identified: the uploaded excerpt has no cover or copyright page.",
  "reviewMethod": "All 160 pages reviewed through Chinese and English OCR, with unclear grammar headings checked against page images.",
  "limitations": "Some small text and illustrated prompts are hard to read in the scan. Companion listening audio was not supplied.",
  "practiceTargetCount": 83,
  "mappedNoteCount": 93,
  "newNoteCount": 3,
  "contentPolicy": "Grammar facts and page references only; textbook pages, OCR, dialogues, and exercises are not bundled."
} as const;

export const workbookGrammarCoverage: WorkbookGrammarCoverage[] = [
  {
    "lesson": 1,
    "topic": "Names and in-place question words",
    "noteIds": [
      "ic-l1p1-l1-surname",
      "ic-l1p1-l1-honorable-surname",
      "ic-l1p1-l1-name",
      "ic-l1p1-l1-basic-order"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 3,
        "topic": "Names and in-place question words",
        "section": "Writing and grammar / A–C"
      }
    ]
  },
  {
    "lesson": 1,
    "topic": "Putting a family name before a respectful title",
    "noteIds": [
      "ic-l1p1-l1-name-title-order"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 6,
        "topic": "Putting a family name before a respectful title",
        "section": "Reading / B"
      }
    ]
  },
  {
    "lesson": 1,
    "topic": "Conversational particles and response tone",
    "noteIds": [
      "ic-l1p1-wb-l1-o-realization",
      "ic-l1p1-l5-ya-softening"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 7,
        "topic": "Conversational particles and response tone",
        "section": "Reading / C"
      }
    ]
  },
  {
    "lesson": 1,
    "topic": "Yes-no and follow-up questions",
    "noteIds": [
      "ic-l1p1-l1-ma-question",
      "ic-l1p1-l1-ne-followup"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 8,
        "topic": "Yes-no and follow-up questions",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 1,
    "topic": "Identity, nationality, and ordinary negation",
    "noteIds": [
      "ic-l1p1-l1-shi-identification",
      "ic-l1p1-l1-bu-negation",
      "ic-l1p1-l1-place-person"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 9,
        "topic": "Identity, nationality, and ordinary negation",
        "section": "Writing and grammar / A–B"
      }
    ]
  },
  {
    "lesson": 1,
    "topic": "Adding an affirmative or negative parallel fact",
    "noteIds": [
      "ic-l1p1-l1-ye-position",
      "ic-l1p1-l1-bu-negation"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 1,
        "pdfPage": 10,
        "topic": "Adding an affirmative or negative parallel fact",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Near and distant demonstratives",
    "noteIds": [
      "ic-l1p1-l2-demonstrative-classifier"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 16,
        "topic": "Near and distant demonstratives",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Asking about people, possession, and a small count",
    "noteIds": [
      "ic-l1p1-l2-question-pronouns",
      "ic-l1p1-l2-de-possession",
      "ic-l1p1-l2-how-many-ji"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 17,
        "topic": "Asking about people, possession, and a small count",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Two before a classifier",
    "noteIds": [
      "ic-l1p1-l2-two-er-liang"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 17,
        "topic": "Two before a classifier",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Having and not having",
    "noteIds": [
      "ic-l1p1-l2-possession-you"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 23,
        "topic": "Having and not having",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Joining people into a collective subject",
    "noteIds": [
      "ic-l1p1-l2-he-noun-link",
      "ic-l1p1-l2-dou-all"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 23,
        "topic": "Joining people into a collective subject",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Applying a shared negative predicate to everyone",
    "noteIds": [
      "ic-l1p1-l2-dou-negative-scope"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 24,
        "topic": "Applying a shared negative predicate to everyone",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Choosing the appropriate in-place question word",
    "noteIds": [
      "ic-l1p1-l2-question-pronouns",
      "ic-l1p1-l2-how-many-ji",
      "ic-l1p1-l2-de-possession"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 24,
        "topic": "Choosing the appropriate in-place question word",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 2,
    "topic": "Counting people and selecting a classifier",
    "noteIds": [
      "ic-l1p1-l2-classifier-count",
      "ic-l1p1-l2-how-many-ji"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 2,
        "pdfPage": 24,
        "topic": "Counting people and selecting a classifier",
        "section": "Writing and grammar / C–D"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Ordering a calendar date from largest unit to smallest",
    "noteIds": [
      "ic-l1p1-l3-calendar-dates"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 29,
        "topic": "Ordering a calendar date from largest unit to smallest",
        "section": "Reading / C"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Numbers and individual telephone digits",
    "noteIds": [
      "ic-l1p1-l3-numbers"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 31,
        "topic": "Numbers and individual telephone digits",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Choosing between alternatives in a question",
    "noteIds": [
      "ic-l1p1-l3-alternative-question"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 31,
        "topic": "Choosing between alternatives in a question",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "An invitation with a person and a further action",
    "noteIds": [
      "ic-l1p1-l3-pivotal-qing"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 32,
        "topic": "An invitation with a person and a further action",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Contrasting two clauses",
    "noteIds": [
      "ic-l1p1-l9-concession"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 32,
        "topic": "Contrasting two clauses",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Placing time before the action",
    "noteIds": [
      "ic-l1p1-l4-adverbial-order",
      "ic-l1p1-l8-time-when-position"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 32,
        "topic": "Placing time before the action",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Asking and stating age",
    "noteIds": [
      "ic-l1p1-l3-age-predicate"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 33,
        "topic": "Asking and stating age",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Dates, days, and clock time",
    "noteIds": [
      "ic-l1p1-l3-calendar-dates",
      "ic-l1p1-l3-days-week",
      "ic-l1p1-l3-hours-minutes",
      "ic-l1p1-l3-half-quarter-time",
      "ic-l1p1-l3-time-unit-order"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 38,
        "topic": "Dates, days, and clock time",
        "section": "Writing and grammar / A–B"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Affirmative-negative questions",
    "noteIds": [
      "ic-l1p1-l3-a-not-a",
      "ic-l1p1-l3-you-meiyou-question"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 38,
        "topic": "Affirmative-negative questions",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Explaining a reason",
    "noteIds": [
      "ic-l1p1-l4-because-therefore"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 39,
        "topic": "Explaining a reason",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 3,
    "topic": "Adding another item or activity",
    "noteIds": [
      "ic-l1p1-l3-hai-addition"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 3,
        "pdfPage": 39,
        "topic": "Adding another item or activity",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Subject, time, action, and object order",
    "noteIds": [
      "ic-l1p1-l4-adverbial-order",
      "ic-l1p1-l8-time-when-position"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 47,
        "topic": "Subject, time, action, and object order",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Habitual and occasional actions",
    "noteIds": [
      "ic-l1p1-wb-l4-frequency-adverbs"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 47,
        "topic": "Habitual and occasional actions",
        "section": "Writing and grammar / C"
      },
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 48,
        "topic": "Habitual and occasional actions",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Checking a statement with a brief final question",
    "noteIds": [
      "ic-l1p1-l3-a-not-a"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 48,
        "topic": "Checking a statement with a brief final question",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Expressing a personal opinion",
    "noteIds": [
      "ic-l1p1-l4-opinion-negation"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 54,
        "topic": "Expressing a personal opinion",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Wanting and not wanting an action",
    "noteIds": [
      "ic-l1p1-l4-xiang-desire"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 54,
        "topic": "Wanting and not wanting an action",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Linking cause and consequence",
    "noteIds": [
      "ic-l1p1-l4-because-therefore"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 54,
        "topic": "Linking cause and consequence",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 4,
    "topic": "Restricting an activity to one choice",
    "noteIds": [
      "ic-l1p1-l4-zhi-only"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 4,
        "pdfPage": 55,
        "topic": "Restricting an activity to one choice",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Numbers with beverage and object classifiers",
    "noteIds": [
      "ic-l1p1-l2-classifier-count",
      "ic-l1p1-l9-classifier-review"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 60,
        "topic": "Numbers with beverage and object classifiers",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Placing the location before an action",
    "noteIds": [
      "ic-l1p1-l5-zai-action-location"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 61,
        "topic": "Placing the location before an action",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Adjectives used as predicates",
    "noteIds": [
      "ic-l1p1-l5-adjective-predicate",
      "ic-l1p1-l5-adjective-questions-contrast"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 61,
        "topic": "Adjectives used as predicates",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Softened offers and requests",
    "noteIds": [
      "ic-l1p1-l5-yidian-small-amount",
      "ic-l1p1-l5-ba-suggestion"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 62,
        "topic": "Softened offers and requests",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "A small amount and a mild request",
    "noteIds": [
      "ic-l1p1-l5-yixia-softener",
      "ic-l1p1-l5-yidian-small-amount",
      "ic-l1p1-l5-ba-suggestion"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 63,
        "topic": "A small amount and a mild request",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Reporting a completed activity or its absence",
    "noteIds": [
      "ic-l1p1-l5-le-completed-event",
      "ic-l1p1-l5-le-event-questions",
      "ic-l1p1-l5-le-negative"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 67,
        "topic": "Reporting a completed activity or its absence",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "An event with a quantified object",
    "noteIds": [
      "ic-l1p1-l5-le-completed-event"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 68,
        "topic": "An event with a quantified object",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Later than the expected time",
    "noteIds": [
      "ic-l1p1-l5-cai-late"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 68,
        "topic": "Later than the expected time",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Negating an event without completion 了",
    "noteIds": [
      "ic-l1p1-l5-le-negative"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 69,
        "topic": "Negating an event without completion 了",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 5,
    "topic": "Recognizing verb-object compounds",
    "noteIds": [
      "ic-l1p1-l4-detachable-compounds"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 5,
        "pdfPage": 71,
        "topic": "Recognizing verb-object compounds",
        "section": "Review 1–5 / III"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "A condition and the action that follows",
    "noteIds": [
      "ic-l1p1-l6-if-yaoshi"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 79,
        "topic": "A condition and the action that follows",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "A prohibition followed by an obligation",
    "noteIds": [
      "ic-l1p1-l6-bie-instruction",
      "ic-l1p1-l6-dei-obligation"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 86,
        "topic": "A prohibition followed by an obligation",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "A recipient introduced before an action",
    "noteIds": [
      "ic-l1p1-l6-gei-preposition"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 87,
        "topic": "A recipient introduced before an action",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "Doing an activity with another person",
    "noteIds": [
      "ic-l1p1-l6-gen-companion"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 87,
        "topic": "Doing an activity with another person",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "After a specified time or completed action",
    "noteIds": [
      "ic-l1p1-l6-time-before-after"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 87,
        "topic": "After a specified time or completed action",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 6,
    "topic": "After an action, subject to a condition",
    "noteIds": [
      "ic-l1p1-l6-time-before-after",
      "ic-l1p1-l6-if-yaoshi"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 6,
        "pdfPage": 88,
        "topic": "After an action, subject to a condition",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Describing how an activity is performed",
    "noteIds": [
      "ic-l1p1-l7-de-descriptive",
      "ic-l1p1-l7-de-object-repeat"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 94,
        "topic": "Describing how an activity is performed",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Giving an object to a recipient",
    "noteIds": [
      "ic-l1p1-l7-double-object"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 94,
        "topic": "Giving an object to a recipient",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "A small undesirable degree",
    "noteIds": [
      "ic-l1p1-l7-youdian-evaluation"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 95,
        "topic": "A small undesirable degree",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Doing an action immediately",
    "noteIds": [
      "ic-l1p1-l7-jiu-early"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 95,
        "topic": "Doing an action immediately",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Praise versus an excessive degree",
    "noteIds": [
      "ic-l1p1-l7-zhen-exclamation",
      "ic-l1p1-l7-tai-exclamation"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 101,
        "topic": "Praise versus an excessive degree",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Questions about manner or performance",
    "noteIds": [
      "ic-l1p1-l7-de-descriptive",
      "ic-l1p1-l7-de-object-repeat"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 102,
        "topic": "Questions about manner or performance",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Earlier or later than expected",
    "noteIds": [
      "ic-l1p1-l7-jiu-cai-contrast"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 102,
        "topic": "Earlier or later than expected",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 7,
    "topic": "Early and late events described with time adverbs",
    "noteIds": [
      "ic-l1p1-l7-jiu-cai-contrast"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 7,
        "pdfPage": 103,
        "topic": "Early and late events described with time adverbs",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "At the time an activity occurs",
    "noteIds": [
      "ic-l1p1-l8-when-clause"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 108,
        "topic": "At the time an activity occurs",
        "section": "Reading / B"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Teaching another person an action",
    "noteIds": [
      "ic-l1p1-l7-double-object",
      "ic-l1p1-l7-zenme-manner"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 110,
        "topic": "Teaching another person an action",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Two activities in progress together",
    "noteIds": [
      "ic-l1p1-l8-yibian-simultaneous"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 111,
        "topic": "Two activities in progress together",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "An activity happening at the reference time",
    "noteIds": [
      "ic-l1p1-l8-progressive"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 112,
        "topic": "An activity happening at the reference time",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Choosing classifiers for familiar objects",
    "noteIds": [
      "ic-l1p1-l9-classifier-review",
      "ic-l1p1-l9-classifier-written-items"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 119,
        "topic": "Choosing classifiers for familiar objects",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "A tool, method, or language used to perform an action",
    "noteIds": [
      "ic-l1p1-l8-use-tool-method"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 119,
        "topic": "A tool, method, or language used to perform an action",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Learned skill and ability",
    "noteIds": [
      "ic-l1p1-l8-hui-learned-skill"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 120,
        "topic": "Learned skill and ability",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Reporting what someone said to do at a particular time",
    "noteIds": [
      "ic-l1p1-wb-l8-tell-message",
      "ic-l1p1-l8-when-clause"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 121,
        "topic": "Reporting what someone said to do at a particular time",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "An additional fact beyond the first item",
    "noteIds": [
      "ic-l1p1-l8-chule-additional-activities"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 122,
        "topic": "An additional fact beyond the first item",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 8,
    "topic": "Before and after an event",
    "noteIds": [
      "ic-l1p1-l6-time-before-after"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 8,
        "pdfPage": 123,
        "topic": "Before and after an event",
        "section": "Writing and grammar / F"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Saying a price in units of money",
    "noteIds": [
      "ic-l1p1-l9-money-units",
      "ic-l1p1-l9-money-abbreviations"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 128,
        "topic": "Saying a price in units of money",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Referring to a described object without repeating the noun",
    "noteIds": [
      "ic-l1p1-l9-de-description-nominal"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 129,
        "topic": "Referring to a described object without repeating the noun",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Trying an activity briefly",
    "noteIds": [
      "ic-l1p1-l5-yixia-softener"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 130,
        "topic": "Trying an activity briefly",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Object-specific classifiers",
    "noteIds": [
      "ic-l1p1-l9-classifier-review",
      "ic-l1p1-l9-classifier-clothes-pairs",
      "ic-l1p1-l9-classifier-written-items"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 135,
        "topic": "Object-specific classifiers",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "A moderately strong positive assessment",
    "noteIds": [
      "ic-l1p1-l9-ting-degree"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 136,
        "topic": "A moderately strong positive assessment",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Equal degree of a quality",
    "noteIds": [
      "ic-l1p1-l9-equal-degree"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 136,
        "topic": "Equal degree of a quality",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "An unexpected contrast after a concession",
    "noteIds": [
      "ic-l1p1-l9-concession"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 138,
        "topic": "An unexpected contrast after a concession",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 9,
    "topic": "Saying an action is unnecessary",
    "noteIds": [
      "ic-l1p1-l6-no-necessity"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 9,
        "pdfPage": 138,
        "topic": "Saying an action is unnecessary",
        "section": "Writing and grammar / E"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Moving known information into the topic position",
    "noteIds": [
      "ic-l1p1-l10-topic-comment"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 144,
        "topic": "Moving known information into the topic position",
        "section": "Writing and grammar / A"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Alternatives in a question or a statement",
    "noteIds": [
      "ic-l1p1-l10-or-statement-question"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 144,
        "topic": "Alternatives in a question or a statement",
        "section": "Writing and grammar / B"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "First action followed by a later action",
    "noteIds": [
      "ic-l1p1-l10-first-then"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 145,
        "topic": "First action followed by a later action",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Recommending the more suitable alternative",
    "noteIds": [
      "ic-l1p1-l10-had-better"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 146,
        "topic": "Recommending the more suitable alternative",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Something causing someone to feel a certain way",
    "noteIds": [
      "ic-l1p1-l10-rang-person-action"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 153,
        "topic": "Something causing someone to feel a certain way",
        "section": "Writing and grammar / A–B"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "The same statement for each member or each occasion",
    "noteIds": [
      "ic-l1p1-l10-every-dou"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 153,
        "topic": "The same statement for each member or each occasion",
        "section": "Writing and grammar / C"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "An especially strong degree",
    "noteIds": [
      "ic-l1p1-l10-tebie-degree"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 154,
        "topic": "An especially strong degree",
        "section": "Writing and grammar / D"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Separating the verb and object parts of a compound",
    "noteIds": [
      "ic-l1p1-l4-detachable-compounds"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 158,
        "topic": "Separating the verb and object parts of a compound",
        "section": "Review 6–10 / III"
      }
    ]
  },
  {
    "lesson": 10,
    "topic": "Learned ability compared with situational possibility",
    "noteIds": [
      "ic-l1p1-l8-hui-learned-skill",
      "ic-l1p1-l8-neng-circumstances"
    ],
    "sources": [
      {
        "bookId": "l1p1-workbook",
        "lesson": 10,
        "pdfPage": 160,
        "topic": "Learned ability compared with situational possibility",
        "section": "Review 6–10 / IV"
      }
    ]
  }
];
