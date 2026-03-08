import React, { useEffect, useRef, useState } from 'react';

const ALL_VIDEOS = [
  { id: 1,  title: 'AI horror storytelling cut', url: 'https://www.youtube.com/embed/w-OH4jS7Fr4?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'Storytelling' },
  { id: 17, title: 'Horror story short',         url: 'https://www.youtube.com/embed/1309fUMoSuQ?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'Storytelling' },
  { id: 3, title: 'AI urban legend story',       url: 'https://streamable.com/e/4alsq6',                         category: 'Storytelling' },
  { id: 4, title: 'AI F1 race in Monaco',        url: 'https://streamable.com/e/z3f4rt',                         category: 'AI Visuals'   },
  { id: 5, title: 'AI UGC-style ad',             url: 'https://streamable.com/e/jcm2v3',                         category: 'AI Visuals'   },
  { id: 6, title: 'AI driver creative short',    url: 'https://www.youtube.com/embed/QHyS9BfJ9nY?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'AI Visuals'   },
  { id: 7, title: 'MrBeast challenge → short',   url: 'https://www.youtube.com/embed/iQiezs84dQc?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'Long → Short' },
  { id: 8, title: 'Challenge clip → short',      url: 'https://www.youtube.com/embed/4mbfyMiJJBg?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'Long → Short' },
  { id: 9, title: 'Challenge short (alt)',        url: 'https://www.youtube.com/embed/8M8IGcJgXIw?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0', category: 'Long → Short' },
  { id: 10, title: 'Twitch gaming short 1',      url: 'https://streamable.com/e/clb41s',                         category: 'Gaming'       },
  { id: 11, title: 'Twitch gaming short 2',      url: 'https://streamable.com/e/zry4ha',                         category: 'Gaming'       },
  { id: 12, title: 'Twitch gaming short 3',      url: 'https://streamable.com/e/an0jvj',                         category: 'Gaming'       },
  { id: 13, title: 'Clothing brand reel 1',      url: 'https://streamable.com/e/goh9v2',                         category: 'Marketing'    },
  { id: 14, title: 'Clothing brand reel 2',      url: 'https://streamable.com/e/99l9wq',                         category: 'Marketing'    },
  { id: 15, title: 'Clothing brand reel 3',      url: 'https://streamable.com/e/eq259y',                         category: 'Marketing'    },
  { id: 18, title: 'Gym reel 1',                url: 'https://streamable.com/e/10cghh',                         category: 'Fitness'      },
  { id: 19, title: 'Gym reel 2',                url: 'https://streamable.com/e/x24v3k',                         category: 'Fitness'      },
];

const FILTERS = ['All', 'Storytelling', 'AI Visuals', 'Long → Short', 'Gaming', 'Marketing', 'Fitness'];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const [isShuffling, setIsShuffling] = useState(false);
  const shuffleTimeoutRef = useRef(null);

  const visible = active === 'All'
    ? ALL_VIDEOS
    : ALL_VIDEOS.filter(v => v.category === active);

  useEffect(() => {
    if (!isShuffling) {
      return undefined;
    }
    if (shuffleTimeoutRef.current) {
      clearTimeout(shuffleTimeoutRef.current);
    }
    shuffleTimeoutRef.current = setTimeout(() => {
      setIsShuffling(false);
    }, 650);
    return () => clearTimeout(shuffleTimeoutRef.current);
  }, [isShuffling]);

  const handleFilterClick = next => {
    if (next === active) {
      return;
    }
    setActive(next);
    setIsShuffling(true);
  };

  return (
    <section id="portfolio" className="samples-section section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow samples-eyebrow">Our Work</span>
          <h2 className="heading-lg samples-heading">Sample shorts <span className="samples-highlight">by format</span></h2>
          <p className="section-subtitle samples-subtitle">
            Story-led AI cuts, long-to-short edits, and visual-first clips. Filter by type and watch.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="samples-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`samples-filter-btn${active === f ? ' active' : ''}`}
              onClick={() => handleFilterClick(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className={`samples-grid${isShuffling ? ' is-shuffling' : ''}`}>
          {visible.map((video, index) => (
            <div
              key={video.id}
              className="sample-card"
              style={{ '--shuffle-index': index }}
            >
              <div className={`sample-embed${video.isInstagram ? ' sample-embed-ig' : ''}`}>
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="sample-meta">
                <span className="sample-category">{video.category}</span>
                <p className="sample-title">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
