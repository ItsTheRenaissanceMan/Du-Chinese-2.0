import { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Search, Bookmark, Moon, Sun, Settings as SettingsIcon, ArrowUpRight, ArrowRight, Headphones, Library, X, Check, Download, Upload, ChevronLeft, ChevronRight, Leaf, GraduationCap, Sparkles } from 'lucide-react';
import { stories } from './data/stories';
import { createDictionary, convert } from './lib/language';
import { loadUserData, saveUserData, scheduleReview, validateUserData } from './lib/storage';
import { studyKey } from './lib/studyIdentity';
import Reader from './components/Reader';
import DictionaryView from './components/DictionaryView';
import StudyView from './components/StudyView';
import { LEVEL_NAMES, type Dictionary, type DictionaryEntry, type Settings, type Story } from './types';

type View = 'library' | 'dictionary' | 'study' | 'reader';
const PAGE_SIZE = 18;
function GardenArt({ compact = false }: {compact?: boolean}) {
  return <svg className={compact ? 'garden-art compact' : 'garden-art'} viewBox="0 0 420 300" role="img" aria-label="A quiet garden with a peach tree, mountains, and an open book">
    <circle cx="295" cy="85" r="62" fill="currentColor" opacity=".10" />
    <path d="M18 251Q102 154 178 241Q260 163 410 258" fill="#b7c4ae" opacity=".5" />
    <path d="M256 250Q214 193 240 99M231 151Q271 136 293 111M236 184Q201 172 181 133M240 118Q224 87 204 67" fill="none" stroke="#63775b" strokeWidth="7" strokeLinecap="round" />
    {[[206,66],[196,81],[220,77],[182,130],[172,145],[197,145],[294,110],[281,96],[304,94],[246,93],[248,73],[228,103]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="12" fill={i%2 ? '#e9b3a4':'#d7927b'}/><circle cx={x+3} cy={y-2} r="3" fill="#f7e6d8" /></g>)}
    <path d="M45 240L110 209L168 233L224 209L278 240L224 273L167 251L110 276Z" fill="#fffdf5" stroke="#78876d" strokeWidth="2" />
    <path d="M168 233L167 251M62 240L109 220L149 237M70 249L110 230L139 242M185 237L222 221L258 240M192 246L224 233L248 245" stroke="#b2bd9e" strokeWidth="3" fill="none" />
    <ellipse cx="240" cy="279" rx="160" ry="8" fill="#657b58" opacity=".08" />
  </svg>;
}

function StoryCard({story, onOpen, complete, resume}: {story:Story; onOpen:()=>void; complete:boolean; resume:boolean}) {
  const themes: Record<string,string> = { Culture:'文化', History:'史', Fiction:'故事', Education:'知', Everyday:'生活' };
  const isPractice = story.series === 'Practice variations';
  return <button className={`story-card card-level-${story.level}`} onClick={onOpen} aria-label={`Read ${story.titleEn}`}>
    <div className="story-cover"><span className="cover-circle"/><span className="cover-hanzi" lang="zh">{themes[story.category] || story.title.slice(0,2)}</span><span className="cover-caption">{story.category.toUpperCase()}</span><span className="cover-mark">翰林</span></div>
    <div className="story-card-body"><div className="story-meta"><span className={`level-label level-${story.level}`}>{LEVEL_NAMES[story.level-1]}</span><span>{story.minutes} min</span></div>
      <h3>{story.titleEn}</h3><p className="story-zh" lang="zh">{story.title}</p><p className="story-summary">{story.summary}</p>
      <div className="story-card-foot"><span>{isPractice ? 'Practice variation' : 'Original story'}</span>{complete ? <span className="completed"><Check size={14}/> Read</span> : <span>{resume?'Continue':'Read story'} <ArrowUpRight size={14}/></span>}</div>
    </div>
  </button>;
}

export default function App() {
  const [user, setUser] = useState(loadUserData);
  const [dictionary, setDictionary] = useState<Dictionary|null>(null);
  const [loadError, setLoadError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [view, setView] = useState<View>('library');
  const [selected, setSelected] = useState<Story|null>(null);
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<number>(0);
  const [category, setCategory] = useState('All topics');
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('recommended');
  const [showSettings, setShowSettings] = useState(false);
  const [notice, setNotice] = useState('');
  const importRef = useRef<HTMLInputElement>(null);
  const settings = user.settings;
  const updateSettings = (patch:Partial<Settings>) => setUser(prev=>({...prev,settings:{...prev.settings,...patch}}));
  useEffect(()=>{document.documentElement.dataset.theme = settings.dark ? 'dark':'light';},[settings.dark]);
  useEffect(()=>{try{saveUserData(user);}catch{setNotice('Your storage is full. Export a backup to keep your progress.');}},[user]);
  useEffect(()=>{ if(!notice)return; const timer=setTimeout(()=>setNotice(''),5500); return()=>clearTimeout(timer); },[notice]);
  useEffect(()=>{
    let active=true;
    setLoadError('');
    fetch(new URL('./data/cedict.json', document.baseURI)).then(response=>{if(!response.ok)throw new Error('Dictionary data could not be loaded.'); return response.json();}).then(data=>{
      if(!Array.isArray(data) || !data.length || !data[0].simplified)throw new Error('Dictionary data is missing or invalid.');
      const index=createDictionary(data); if(active)setDictionary(index);
    }).catch(error=>{if(active)setLoadError(error.message);});
    return()=>{active=false;};
  },[attempt]);
  useEffect(()=>{setPage(0);},[query,level,category,sort]);
  useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setShowSettings(false);};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[]);
  const categories=useMemo(()=>['All topics',...new Set(stories.map(story=>story.category))],[]);
  const filtered=useMemo(()=>{
    const needle=query.trim().toLocaleLowerCase();
    const result=stories.filter(story=>(!level||story.level===level)&&(category==='All topics'||story.category===category)&&(!needle||`${story.title} ${convert(story.title,true)} ${story.titleEn} ${story.summary}`.toLocaleLowerCase().includes(needle)));
    if(sort==='shortest')result.sort((a,b)=>a.minutes-b.minutes);
    if(sort==='unread')result.sort((a,b)=>Number(!!user.progress[a.id]?.complete)-Number(!!user.progress[b.id]?.complete));
    return result;
  },[query,level,category,sort,user.progress]);
  const openStory=(story:Story)=>{setSelected(story);setView('reader');window.scrollTo({top:0});};
  const saveWord=(entry:DictionaryEntry)=>{
    setUser(prev=>prev.words.some(word=>studyKey(word)===studyKey(entry))?prev:{...prev,words:[...prev.words,{...entry,addedAt:Date.now(),due:Date.now(),interval:0,reviews:0}]});
    setNotice(`Saved ${entry.simplified} to your vocabulary`);
  };
  const featured=stories.find(story=>story.id==='peach-garden') || stories[0];
  const editedCount=stories.filter(story=>story.series!=='Practice variations').length;
  const completed=Object.values(user.progress).filter(progress=>progress.complete).length;
  const continueStory=Object.entries(user.progress).filter(([,progress])=>!progress.complete).sort((a,b)=>b[1].updatedAt-a[1].updatedAt).map(([id])=>stories.find(story=>story.id===id)).find(Boolean);
  const backup=()=>{
    const blob=new Blob([JSON.stringify({version:1,...user},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`hanlin-progress-${new Date().toISOString().slice(0,10)}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),5000);
  };
  const restore=async(file:File)=>{
    try {
      if(file.size>20_000_000)throw new Error('Backup is too large.');
      const raw=JSON.parse(await file.text());
      if(raw.version!==1 || !Array.isArray(raw.words) || !raw.settings || !raw.progress)throw new Error('This is not a Hanlin progress backup.');
      const imported=validateUserData(raw);
      setUser(prev=>({...prev,words:[...new Map([...prev.words,...imported.words].map(word=>[studyKey(word),word])).values()],progress:{...prev.progress,...imported.progress},settings:imported.settings}));
      setNotice('Backup restored. Your vocabulary and reading progress have been merged.');
    }catch(error){setNotice(error instanceof Error?error.message:'Could not restore this backup.');}
  };
  return <div className="app-shell">
    <aside className="sidebar"><button className="brand" onClick={()=>setView('library')} aria-label="Hanlin home"><span className="brand-mark"><BookOpen size={24}/></span><span>Hanlin<small>翰林 · CHINESE READER</small></span></button>
      <div className="sidebar-label">YOUR LEARNING SPACE</div><nav aria-label="Main navigation">
        <button className={view==='library'||view==='reader'?'active':''} onClick={()=>setView('library')}><Library size={19}/> Story library</button>
        <button className={view==='dictionary'?'active':''} onClick={()=>setView('dictionary')}><Search size={19}/> Dictionary</button>
        <button className={view==='study'?'active':''} onClick={()=>setView('study')}><Bookmark size={19}/> My vocabulary <span className="nav-count">{user.words.length}</span></button>
      </nav>
      <div className="sidebar-note"><Leaf size={22}/><h4>Small steps, lasting progress.</h4><p>A few sentences today. A whole new world tomorrow.</p><div className="learning-stats"><span><strong>{completed}</strong> stories read</span><span><strong>{user.words.length}</strong> words saved</span></div></div>
      <div className="sidebar-bottom"><span className="offline-dot"/> Offline by design <button aria-label="Open settings" onClick={()=>setShowSettings(true)}><SettingsIcon size={18}/></button></div>
    </aside>
    <div className="workspace"><header className="topbar"><div className="breadcrumb"><span>YOUR CHINESE JOURNEY</span><span className="breadcrumb-separator">/</span><strong>{view==='reader'?'Reading room':view==='dictionary'?'Dictionary':view==='study'?'My vocabulary':'Story library'}</strong></div><div className="header-actions"><span className="local-badge">Personal & private</span><button className="icon-button" aria-label={settings.dark?'Switch to light mode':'Switch to dark mode'} onClick={()=>updateSettings({dark:!settings.dark})}>{settings.dark?<Sun size={19}/>:<Moon size={19}/>}</button><button className="icon-button" aria-label="Open settings" onClick={()=>setShowSettings(true)}><SettingsIcon size={19}/></button></div></header>
      {!dictionary ? <main className="loading-page"><BookOpen size={42}/><h1>{loadError?'The dictionary needs attention':'Opening your reading room…'}</h1><p>{loadError||'Preparing your offline dictionary and story library.'}</p>{loadError&&<><p>From the project folder, run <code>npm run prepare:data</code> and restart the app.</p><button className="primary-button" onClick={()=>setAttempt(attempt+1)}>Try again</button></>}</main> : view==='reader' && selected ?
        <Reader story={selected} dictionary={dictionary} settings={settings} onSettingsChange={updateSettings} onSaveWord={saveWord} savedWords={user.words} initialSentence={user.progress[selected.id]?.sentence} onBack={()=>setView('library')} onProgress={(id,sentence,complete)=>setUser(prev=>({...prev,progress:{...prev.progress,[id]:{sentence,complete:complete??prev.progress[id]?.complete??false,updatedAt:Date.now()}}}))}/> : view==='dictionary' ?
        <DictionaryView dictionary={dictionary} settings={settings} savedWords={user.words} onSaveWord={saveWord}/> : view==='study' ?
        <StudyView dictionary={dictionary} settings={settings} savedWords={user.words} onSaveWord={saveWord} onReview={(word,rating)=>setUser(prev=>({...prev,words:prev.words.map(entry=>studyKey(entry)===word?scheduleReview(entry,rating):entry)}))} onRemoveWord={word=>setUser(prev=>({...prev,words:prev.words.filter(entry=>studyKey(entry)!==word)}))}/> :
      <main className="library-page">
        <section className="library-intro"><div><p className="eyebrow"><span/> A LANGUAGE OPENS A WORLD</p><h1>Chinese, one story<br/><em>at a time.</em></h1><p className="intro-description">Find your next little adventure. Read at your pace,<br className="desktop-break"/> discover new words, and let curiosity lead the way.</p><div className="intro-details"><span><BookOpen size={16}/> {stories.length.toLocaleString()} readings</span><span><GraduationCap size={17}/> 6 reading levels</span><span><Headphones size={16}/> Listen & practice</span></div></div><GardenArt/></section>
        {continueStory&&<button className="continue-reading" onClick={()=>openStory(continueStory)}><BookOpen size={19}/><span>Pick up where you left off <strong>{continueStory.titleEn}</strong></span><ArrowRight size={18}/></button>}
        <section className="featured-story"><div className="featured-writing"><p className="eyebrow"><Sparkles size={14}/> IN THE READING ROOM</p><h2>{featured.titleEn}</h2><p>A promise beneath the peach blossoms. Meet three unlikely friends in our original retelling of a beloved Chinese legend.</p><div className="featured-meta"><span className={`level-label level-${featured.level}`}>{LEVEL_NAMES[featured.level-1]}</span><span>{featured.category}</span><span>{featured.minutes} min read</span></div><button className="primary-button" onClick={()=>openStory(featured)}>Read the story <ArrowUpRight size={17}/></button></div><div className="featured-art"><span className="vertical-poem" lang="zh">桃園結義</span><GardenArt compact/></div></section>
        <section className="catalog" aria-label="Story catalog"><div className="section-heading"><div><p className="eyebrow">A LITTLE SOMETHING FOR EVERY LEVEL</p><h2>Explore the library</h2></div><span className="catalog-note">{editedCount} edited stories + {stories.length-editedCount} practice variations</span></div>
          <div className="level-tabs" role="group" aria-label="Filter by reading level"><button className={!level?'selected':''} onClick={()=>setLevel(0)}>All levels</button>{LEVEL_NAMES.map((name,index)=><button key={name} className={level===index+1?'selected':''} onClick={()=>setLevel(index+1)}><span className={`level-dot level-${index+1}`}/>{name}</button>)}</div>
          <div className="catalog-toolbar"><label className="catalog-search"><Search size={18}/><input aria-label="Search stories" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search a title, topic, or Chinese word…"/>{query&&<button aria-label="Clear story search" onClick={()=>setQuery('')}><X size={15}/></button>}</label><label className="select-label"><span className="sr-only">Story topic</span><select aria-label="Story topic" value={category} onChange={event=>setCategory(event.target.value)}>{categories.map(topic=><option key={topic}>{topic}</option>)}</select></label><label className="select-label"><span className="sr-only">Sort stories</span><select aria-label="Sort stories" value={sort} onChange={event=>setSort(event.target.value)}><option value="recommended">Recommended</option><option value="shortest">Shortest first</option><option value="unread">Unread first</option></select></label></div>
          <div className="result-count">{filtered.length.toLocaleString()} readings{level?` for ${LEVEL_NAMES[level-1].toLowerCase()} readers`:''}<span>Word colors indicate approximate difficulty.</span></div>
          {filtered.length?<div className="story-grid">{filtered.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE).map(story=><StoryCard key={story.id} story={story} onOpen={()=>openStory(story)} complete={!!user.progress[story.id]?.complete} resume={!!user.progress[story.id]}/>)}</div>:<div className="empty-results"><Search size={32}/><h3>No stories found</h3><p>Try a shorter search or a different level.</p><button className="secondary-button" onClick={()=>{setQuery('');setLevel(0);setCategory('All topics');}}>Clear filters</button></div>}
          {filtered.length>PAGE_SIZE&&<div className="pagination"><button className="secondary-button" disabled={page===0} onClick={()=>{setPage(page-1);document.querySelector('.catalog')?.scrollIntoView({behavior:'smooth'});}}><ChevronLeft size={16}/> Previous</button><span>Page {page+1} of {Math.ceil(filtered.length/PAGE_SIZE)}</span><button className="secondary-button" disabled={(page+1)*PAGE_SIZE>=filtered.length} onClick={()=>{setPage(page+1);document.querySelector('.catalog')?.scrollIntoView({behavior:'smooth'});}}>Next <ChevronRight size={16}/></button></div>}
        </section><footer className="library-footer"><span>翰林 · A place to grow your Chinese.</span><button onClick={()=>setShowSettings(true)}>About Hanlin & language data <ArrowUpRight size={13}/></button></footer>
      </main>}
    </div>
    {notice&&<div role="status" className="toast"><Check size={16}/>{notice}<button aria-label="Dismiss notification" onClick={()=>setNotice('')}><X size={14}/></button></div>}
    {showSettings&&<div className="modal-backdrop" onClick={()=>setShowSettings(false)}><section className="settings-modal" role="dialog" aria-modal="true" aria-labelledby="settings-title" onClick={event=>event.stopPropagation()}><div className="modal-heading"><div><p className="eyebrow">MAKE YOURSELF AT HOME</p><h2 id="settings-title">Your reading preferences</h2></div><button autoFocus className="icon-button" aria-label="Close settings" onClick={()=>setShowSettings(false)}><X size={21}/></button></div><label className="preference-row">Dark mode<input type="checkbox" checked={settings.dark} onChange={event=>updateSettings({dark:event.target.checked})}/></label><label className="preference-row">Traditional Chinese<input type="checkbox" checked={settings.traditional} onChange={event=>updateSettings({traditional:event.target.checked})}/></label><label className="preference-row">Show pinyin<input type="checkbox" checked={settings.pinyin} onChange={event=>updateSettings({pinyin:event.target.checked})}/></label><label className="range-preference">Reading text size <strong>{settings.fontSize}px</strong><input aria-label="Reading text size" type="range" min="20" max="40" value={settings.fontSize} onChange={event=>updateSettings({fontSize:Number(event.target.value)})}/></label><label className="range-preference">Speech speed <strong>{settings.speechRate.toFixed(1)}×</strong><input aria-label="Speech speed" type="range" min="0.5" max="1.5" step="0.1" value={settings.speechRate} onChange={event=>updateSettings({speechRate:Number(event.target.value)})}/></label><div className="backup-actions"><button className="secondary-button" onClick={backup}><Download size={16}/> Export progress</button><button className="secondary-button" onClick={()=>importRef.current?.click()}><Upload size={16}/> Restore backup</button><input ref={importRef} type="file" accept=".json,application/json" hidden onChange={event=>{const file=event.target.files?.[0];if(file)void restore(file);event.target.value='';}}/></div><div className="about-copy"><h3>Language, with room to explore.</h3><p>Hanlin is an independent Chinese reader. Its {stories.length.toLocaleString()} readings include {editedCount} edited originals and {stories.length-editedCount} generated practice variations. Practice variations share narrative structures and topic families. Levels and word colors are study estimates, rather than an official HSK assessment.</p><p>Dictionary: CC-CEDICT, CC BY-SA 4.0. Character conversion: OpenCC. Mandarin recognition: sherpa-onnx, Apache 2.0. Stories and grammar explanations are original. Hanlin is not affiliated with Du Chinese.</p><p>Reading works offline. Pronunciation uses a local Mandarin recognition model. Listening uses an installed Mandarin voice or the desktop app’s bundled Mandarin voice. Your reading progress stays on this device; export a backup to keep it safe.</p></div></section></div>}
  </div>;
}
