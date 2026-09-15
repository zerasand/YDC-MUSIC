/* ============================================
   YDC MUSIC HOUSE — Interactive Engine
   ============================================ */

(function () {
  'use strict';

  // ── Track Data ──────────────────────────────
  var TRACKS = [
    {
      title: '01001101.01000100',
      tag: 'Original Instrumental',
      file: 'tracks/01001101.01000100.flac'
    },
    {
      title: 'Undertale',
      tag: 'Reinterpretation',
      file: 'tracks/undertale - undertale.flac'
    },
    {
      title: 'Set Fire to the Rain',
      tag: 'Reinterpretation',
      file: 'tracks/Adele - set fire to the rain (amapiano reinterpretation).flac'
    }
  ];

  var currentTrack = -1;
  var isPlaying = false;

  // ── DOM Refs ────────────────────────────────
  var audio = document.getElementById('audioElement');
  var playerBar = document.getElementById('playerBar');
  var playerTrackName = document.getElementById('playerTrackName');
  var playerTrackTag = document.getElementById('playerTrackTag');
  var playerPlayPause = document.getElementById('playerPlayPause');
  var playerPrev = document.getElementById('playerPrev');
  var playerNext = document.getElementById('playerNext');
  var playerCurrentTime = document.getElementById('playerCurrentTime');
  var playerDuration = document.getElementById('playerDuration');
  var progressTrack = document.getElementById('progressTrack');
  var progressFill = document.getElementById('progressFill');
  var progressHead = document.getElementById('progressHead');
  var playerWaveformCanvas = document.getElementById('playerWaveform');
  var volumeSlider = document.getElementById('volumeSlider');
  var volumeBtn = document.getElementById('volumeBtn');
  var volumeIcon = document.getElementById('volumeIcon');
  var volumeMuteIcon = document.getElementById('volumeMuteIcon');
  var workRows = document.querySelectorAll('.work-row');

  var previousVolume = 0.8;
  var isMuted = false;

  // ── Format Time ─────────────────────────────
  function formatTime(s) {
    if (isNaN(s) || !isFinite(s)) return '0:00';
    var m = Math.floor(s / 60);
    var sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  // ── Load Track ──────────────────────────────
  function loadTrack(index) {
    if (index < 0 || index >= TRACKS.length) return;
    currentTrack = index;
    var track = TRACKS[index];
    audio.src = track.file;
    audio.load();
    playerTrackName.textContent = track.title;
    playerTrackTag.textContent = track.tag;
    playerBar.style.display = '';
    updateActiveRow();
  }

  // ── Play / Pause ────────────────────────────
  function togglePlay() {
    if (currentTrack < 0) {
      loadTrack(0);
    }
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(function () {});
    }
  }

  function setPlayingState(playing) {
    isPlaying = playing;
    var iconPlay, iconPause;

    workRows.forEach(function (row, i) {
      iconPlay = row.querySelector('.icon-play');
      iconPause = row.querySelector('.icon-pause');
      if (i === currentTrack && playing) {
        iconPlay.style.display = 'none';
        iconPause.style.display = '';
        row.classList.add('is-playing');
      } else {
        iconPlay.style.display = '';
        iconPause.style.display = 'none';
        row.classList.remove('is-playing');
      }
    });

    iconPlay = playerPlayPause.querySelector('.icon-play');
    iconPause = playerPlayPause.querySelector('.icon-pause');
    if (playing) {
      iconPlay.style.display = 'none';
      iconPause.style.display = '';
      playerPlayPause.classList.add('is-active');
    } else {
      iconPlay.style.display = '';
      iconPause.style.display = 'none';
      playerPlayPause.classList.remove('is-active');
    }
  }

  function updateActiveRow() {
    workRows.forEach(function (row, i) {
      if (i === currentTrack) {
        row.classList.add('is-current');
      } else {
        row.classList.remove('is-current');
      }
    });
  }

  // ── Audio Events ────────────────────────────
  audio.addEventListener('play', function () { setPlayingState(true); });
  audio.addEventListener('pause', function () { setPlayingState(false); });
  audio.addEventListener('ended', function () {
    setPlayingState(false);
    if (currentTrack < TRACKS.length - 1) {
      loadTrack(currentTrack + 1);
      audio.play().catch(function () {});
    }
  });

  audio.addEventListener('timeupdate', function () {
    var cur = audio.currentTime;
    var dur = audio.duration;
    playerCurrentTime.textContent = formatTime(cur);
    if (dur && isFinite(dur)) {
      var pct = (cur / dur) * 100;
      progressFill.style.width = pct + '%';
      progressHead.style.left = pct + '%';
    }
  });

  audio.addEventListener('loadedmetadata', function () {
    playerDuration.textContent = formatTime(audio.duration);
    if (currentTrack >= 0 && workRows[currentTrack]) {
      var timeEl = workRows[currentTrack].querySelector('.work-time');
      if (timeEl) timeEl.textContent = formatTime(audio.duration);
    }
  });

  // ── Row Click → Play ────────────────────────
  workRows.forEach(function (row) {
    row.addEventListener('click', function () {
      var idx = parseInt(row.getAttribute('data-track'), 10);
      if (idx === currentTrack) {
        togglePlay();
      } else {
        loadTrack(idx);
        audio.play().catch(function () {});
      }
    });
  });

  // ── Player Controls ─────────────────────────
  playerPlayPause.addEventListener('click', function (e) {
    e.stopPropagation();
    togglePlay();
  });

  playerPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    if (currentTrack > 0) {
      loadTrack(currentTrack - 1);
      audio.play().catch(function () {});
    }
  });

  playerNext.addEventListener('click', function (e) {
    e.stopPropagation();
    if (currentTrack < TRACKS.length - 1) {
      loadTrack(currentTrack + 1);
      audio.play().catch(function () {});
    }
  });

  // ── Progress Bar Scrub ──────────────────────
  progressTrack.addEventListener('click', function (e) {
    var rect = progressTrack.getBoundingClientRect();
    var pct = (e.clientX - rect.left) / rect.width;
    if (audio.duration && isFinite(audio.duration)) {
      audio.currentTime = pct * audio.duration;
    }
  });

  // ── Volume Control ──────────────────────────
  function updateVolumeIcon(vol) {
    if (isMuted || vol === 0) {
      volumeIcon.style.display = 'none';
      volumeMuteIcon.style.display = '';
      volumeBtn.classList.add('is-muted');
    } else {
      volumeIcon.style.display = '';
      volumeMuteIcon.style.display = 'none';
      volumeBtn.classList.remove('is-muted');
    }
  }

  volumeSlider.addEventListener('input', function () {
    var vol = parseInt(volumeSlider.value, 10) / 100;
    audio.volume = vol;
    isMuted = vol === 0;
    previousVolume = vol > 0 ? vol : previousVolume;
    updateVolumeIcon(vol);
  });

  volumeBtn.addEventListener('click', function () {
    if (isMuted) {
      isMuted = false;
      audio.volume = previousVolume;
      volumeSlider.value = Math.round(previousVolume * 100);
    } else {
      previousVolume = audio.volume;
      isMuted = true;
      audio.volume = 0;
      volumeSlider.value = 0;
    }
    updateVolumeIcon(audio.volume);
  });

  // Set initial volume
  audio.volume = 0.8;

  // ── Waveform Visualization ──────────────────
  function drawProceduralWaveform(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    var bars = opts.bars || Math.floor(w / 4);
    var barW = opts.barWidth || 2;
    var gap = opts.gap || 2;
    var progress = opts.progress || 0;
    var colorActive = opts.colorActive || '#7B5CFA';
    var colorInactive = opts.colorInactive || 'rgba(123, 92, 250, 0.2)';
    var glowColor = opts.glowColor || 'rgba(0, 242, 254, 0.4)';

    var seed = opts.seed || 42;
    function rand() {
      seed = (seed * 16807 + 0) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < bars; i++) {
      var x = i * (barW + gap);
      var amp = 0.3 + rand() * 0.7;
      var barH = amp * h * 0.8;
      var y = (h - barH) / 2;
      var pct = i / bars;

      if (pct < progress) {
        ctx.fillStyle = colorActive;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 6;
      } else {
        ctx.fillStyle = colorInactive;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      ctx.fillRect(x, y, barW, barH);
    }
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
  }

  // Draw static waveforms for each row
  function drawRowWaveforms() {
    workRows.forEach(function (row, i) {
      var canvas = row.querySelector('.waveform-canvas');
      if (canvas) {
        drawProceduralWaveform(canvas, {
          seed: (i + 1) * 137,
          colorActive: '#7B5CFA',
          colorInactive: 'rgba(123, 92, 250, 0.15)'
        });
      }
    });
  }

  // Draw player bar waveform (animated)
  var animFrame;
  function animatePlayerWaveform() {
    if (!playerWaveformCanvas || playerBar.style.display === 'none') return;
    var progress = 0;
    if (audio.duration && isFinite(audio.duration)) {
      progress = audio.currentTime / audio.duration;
    }
    drawProceduralWaveform(playerWaveformCanvas, {
      bars: 120,
      barWidth: 3,
      gap: 2,
      progress: progress,
      seed: currentTrack >= 0 ? (currentTrack + 1) * 137 : 42,
      colorActive: '#00F2FE',
      colorInactive: 'rgba(0, 242, 254, 0.15)',
      glowColor: 'rgba(0, 242, 254, 0.5)'
    });
    animFrame = requestAnimationFrame(animatePlayerWaveform);
  }

  audio.addEventListener('play', function () {
    cancelAnimationFrame(animFrame);
    animatePlayerWaveform();
  });

  audio.addEventListener('pause', function () {
    cancelAnimationFrame(animFrame);
  });

  audio.addEventListener('ended', function () {
    cancelAnimationFrame(animFrame);
  });

  // ── Global Fixed Waveform Background ────────
  function drawGlobalWaveform() {
    var canvas = document.getElementById('globalWaveform');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var w, h;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Grey-background sections where waveform should hide
    var greySections = document.querySelectorAll('.artist, .services, .footer');

    function isOverGreySection() {
      var viewMid = window.scrollY + window.innerHeight / 2;
      for (var i = 0; i < greySections.length; i++) {
        var rect = greySections[i].getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var bottom = top + rect.height;
        if (viewMid >= top && viewMid <= bottom) return true;
      }
      return false;
    }

    var targetOpacity = 1;
    var currentOpacity = 1;

    function updateVisibility() {
      targetOpacity = isOverGreySection() ? 0 : 1;
    }
    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();

    var t = 0;
    function frame() {
      t += 0.002;

      // Smooth opacity transition
      currentOpacity += (targetOpacity - currentOpacity) * 0.08;

      ctx.clearRect(0, 0, w, h);

      if (currentOpacity < 0.01) {
        requestAnimationFrame(frame);
        return;
      }

      // Single violet wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(123, 92, 250, ' + (0.22 * currentOpacity) + ')';
      ctx.lineWidth = 2;
      for (var x = 0; x <= w; x += 2) {
        var y = h / 2
          + Math.sin(x * 0.002 + t) * 50
          + Math.sin(x * 0.004 + t * 1.5) * 25
          + Math.cos(x * 0.001 + t * 0.7) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Single cyan wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 242, 254, ' + (0.15 * currentOpacity) + ')';
      ctx.lineWidth = 1.5;
      for (var x2 = 0; x2 <= w; x2 += 2) {
        var y2 = h / 2
          + Math.sin(x2 * 0.003 + t * 1.2) * 40
          + Math.cos(x2 * 0.0015 + t * 0.9) * 35;
        if (x2 === 0) ctx.moveTo(x2, y2);
        else ctx.lineTo(x2, y2);
      }
      ctx.stroke();

      // Single amber wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 166, 35, ' + (0.1 * currentOpacity) + ')';
      ctx.lineWidth = 1.2;
      for (var x3 = 0; x3 <= w; x3 += 3) {
        var y3 = h / 2
          + Math.sin(x3 * 0.0015 + t * 0.6) * 60
          + Math.sin(x3 * 0.003 + t * 1.1) * 20;
        if (x3 === 0) ctx.moveTo(x3, y3);
        else ctx.lineTo(x3, y3);
      }
      ctx.stroke();

      requestAnimationFrame(frame);
    }
    frame();
  }

  // ── Scroll Reveal ───────────────────────────
  function initReveal() {
    var elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ── Mobile Nav Toggle ───────────────────────
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      });
    });
  }

  // ── Form Handling ───────────────────────────
  // Web3Forms handles submission natively via form action.
  // No custom JS handler needed.

  // ── Smooth scroll offset for fixed nav ──────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Init ────────────────────────────────────
  drawRowWaveforms();
  drawGlobalWaveform();
  initReveal();

  // Redraw waveforms on resize
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      drawRowWaveforms();
    }, 200);
  });

})();
