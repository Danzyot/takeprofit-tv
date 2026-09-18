# The hero film — production brief

The opening sequence: a first-person run that leaps into the TPTV television,
through a vortex, and lands on the website.

**This is not one Runway generation.** It is five shots. Runway holds roughly
one action per clip; asking a single prompt for "reach, turn, run, leap,
vortex, arrive" collapses every beat into mush. Generate the shots separately
and cut them together.

## The arc

The film has a colour journey, and it is doing real work: it starts as bright
candy-pastel cartoon and **cools into the site's amber-on-near-black as the
vortex deepens**, so the last frame can dissolve straight into the live hero
without a jarring palette jump. Do not skip this — it is what makes the
transition land rather than look like two unrelated videos taped together.

## Global style string

Paste this, unchanged, into every shot. Consistency across shots comes from
repeating the style verbatim, not from rewording it.

> Flat 2D cartoon animation, bold black outlines of even weight, flat cel
> shading, candy-pastel palette of peach, mint, coral and cream with warm amber
> light, rounded friendly shapes, subtle paper grain.

## The shots

Each is a single continuous action with one camera move. Generate at least
four takes of each.

### Shot 1 — The reach (5s)

> First-person point of view. A young man stands a few steps ahead on a sunlit
> pastel street, looks directly into the lens, breaks into a grin and extends
> his open hand toward the camera in invitation. The camera holds at chest
> height with a gentle handheld sway and drifts a half step forward.

### Shot 2 — The turn and run (5s)

> First-person point of view. The man takes the camera's hand, spins on his
> heel and runs, glancing back over his shoulder and laughing. The camera
> follows close behind at running pace. Pastel buildings streak past on both
> sides. Far ahead in the centre of frame, a small cream vintage television
> grows steadily larger.

### Shot 3 — The leap (5s)

> First-person point of view. The man plants a foot and launches into the air
> toward a large cream vintage television, arms stretched forward. The camera
> launches with him. The screen swells to fill the frame and its surface
> ripples like liquid as they pass through it. Heavy motion blur, radiating
> speed lines, whip-fast forward camera.

### Shot 4 — The vortex (10s)

> First-person flight down a swirling tunnel of light. Ribbons of colour spiral
> past the camera. Rows of floating rectangular screens drift by on the left
> and right, glowing softly, their surfaces blank. The colours cool from candy
> pastel toward deep amber and near black as the tunnel deepens. A bright point
> of warm amber light sits far ahead and grows steadily. Fast continuous
> forward camera.

The blank screens are deliberate. They are **compositing slots** — see below.

### Shot 5 — Arrival (5s)

> First-person point of view. A point of warm amber light swells until it fills
> the frame and blows out to white. The white settles into a quiet dark room
> where a single vintage television glows amber against a far wall, dust
> drifting through the beam. The camera eases to a stop. Slow deceleration and
> a gentle settle.

## Two things Runway will get wrong

**1. Text.** Video models garble lettering. Never ask it to render
"TakeprofitTV" — it will come back as TAKEPRQFIT, warping frame to frame.
`docs/assets` has a clean cartoon television with the correct wordmark and the
TPTV mark on screen. Use it as the reference image for the set, and composite
the nameplate back on in post if a shot needs it legible.

**2. The YouTube clips and the Discord feed.** Runway cannot insert real
footage. That is why Shot 4 asks for *blank* glowing rectangles: they are
tracked slots. Drop the real clips and a Discord capture into them in an editor
(After Effects, Resolve, even CapCut with corner-pin). Generated screens
showing invented YouTube content would look fake and say nothing.

## Continuity between shots

Use the **last frame of each shot as the first frame of the next**. That is
what makes five clips read as one take. For the man, attach the same reference
images to every shot so he is the same person throughout — one clean, well-lit,
front-facing photo plus one three-quarter angle works better than five
casual snaps.

Shot 5 must end on `docs/assets/tptv-handoff-frame.png` — a 1920×1080 capture
of the real site hero. Feed it as the end keyframe if the model accepts one,
otherwise match it by hand in the grade. The film is finished when its last
frame and the site's first frame are indistinguishable.

## Putting it on the site

The full cut will run 20–30 seconds. **Do not make that a hero loop and do not
force it on every visit** — a 25-second unskippable intro is the fastest way to
lose the people you just paid to attract.

Ship it three ways:

1. **On the site:** a 3–4 second slice of the vortex-to-arrival as a silent
   looping hero. Under 2MB, WebM, poster frame for the first paint. Drops
   straight into `NEXT_PUBLIC_HERO_VIDEO` — `src/components/hero-room.tsx`
   already swaps the screen's typography for a video when that is set.
2. **Once per visitor:** the full cut as a skippable intro, gated on
   `localStorage`, with a Skip control visible from the first second, never
   shown to anyone whose OS asks for reduced motion.
3. **Everywhere else:** the full cut is the YouTube channel trailer and the
   Discord invite video, where 25 seconds is an asset rather than a toll.
