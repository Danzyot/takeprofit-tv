# The hero film — production brief

The opening sequence: a first-person run that dives into the TPTV television and
falls through a vortex into the website.

**This is not one Runway generation.** It is four clips. Runway holds roughly
one action per clip, and a single prompt covering turn, run, dive and vortex
collapses every beat into mush. Generate them separately and cut them together
— which, for four clips and hard cuts, is a few minutes in Runway's own editor.

## The film

Pure white void throughout. No street, no floor, no horizon, no shadows.

1. He stands close to camera with his back to us, turns his head back over his
   **left** shoulder and reaches back toward us with an open hand.
2. He runs forward into the white. An old black CRT floats ahead.
3. He dives **head first** into the screen.
4. Our own hands reach the glass.
5. We go through, lightning flaring around us.
6. A time vortex: **Discord chat bubbles right, YouTube panels left**, him
   flying ahead of us toward white light that fills the frame.

It opens on white and ends on white, so the website fades up out of that
whiteout. There is nothing to line up and no landing shot to match.

## The pipeline

Two tools, three steps.

1. **ChatGPT** — six photoreal stills, all 16:9.
2. **Runway** — image-to-video on each still.
3. **Runway** — assemble the six clips, export.

No compositing, no tracking, no grade, no grain, no external editor.

**Discord and YouTube are built into the vortex still, not composited.** They
are specified as glowing shapes — purple chat panels on the right wall, video
screens with red play buttons on the left — because lettering garbles in every
model and at vortex speed nobody reads text anyway. The "animation" is simply
the camera turning past them inside clip 6.

Everything must be **16:9**. Mixing ratios means black bars or a crop that chops
his head, and it only shows up after the clips are paid for.

## The look: photorealistic

Photoreal, shot as if on a cinema camera. This is the easiest thing to hand a
video model, because it *is* the training data — you get texture, depth of
field, motion blur and contact shadows for free, and those are exactly what
flat art could not supply.

Earlier passes tried flat 2D cartoon and it boiled. The reason is worth keeping
written down: video models predict where pixels go next frame, and flat colour
contains no features to track, bold outlines advertise every error at
two-pixel width, and crisp cartoon edges have no motion blur to hide behind.
Photoreal has all three.

**The void becomes a studio cyclorama.** A pure white field with a photoreal
person reads as a bad cutout, and gives the camera nothing to measure its own
movement against. The photoreal equivalent of the same idea is a **white studio
infinity background with soft gradient falloff and a soft contact shadow** —
still nowhere, still surreal, but with the depth cues the model needs.

**The character sheet is retired.** Go back to the real photographs of him.
Photoreal likeness is far easier than stylised likeness, because there is no
restyling step — the model only has to place a real person in a pose.

### Always state the camera

Two things models get wrong unless told, and both cost takes:

- **Camera height.** Without it you get the training-data average, which for
  "looking back over the shoulder" is a slightly elevated three-quarter angle.
  Say `The camera is at his eye level` and `35mm lens` — the lens note reads as
  human eye height and stops the model reaching for a dramatic wide.
- **Composition.** Models centre their subject unless told otherwise, and
  describing the *empty* space works better than describing where the subject
  goes: "he is on the left third of the frame, the right half is empty white
  space."

**The reference photograph carries its own camera angle.** A photo shot from
above returns frames shot from above, however the prompt is worded. Feed it
references taken at eye level.

### Consider filming half of it

Now that it is photoreal, shots 4 and 5 are a pair of hands reaching toward a
television, and shots 1 and 2 are a man in front of a white wall. That is a
phone, a white bedsheet and twenty minutes. Real footage beats generated
footage every time and costs nothing, which leaves Runway only the two shots
that cannot be filmed: the dive through the glass and the vortex.

## Three chained beats, not six cuts

The joins are the problem. Six clips generated from six independent stills have
nothing in common at their edges, so every join is a cut no matter how it is
trimmed, and a dissolve only softens it. The fix is not a transition. It is to
generate each clip **from the last frame of the one before it** — then the next
clip's first frame *is* the previous clip's last frame, and the join does not
exist.

Gen-4 takes a start image and no end image, so this is the only way to chain it.

### How to chain

1. Generate beat A from its still.
2. Download A and find its **last clean frame** — not necessarily the last one,
   because the final few frames of a generated clip are where the warping
   lives. Export that frame at full resolution.
3. Trim A's tail back to that frame.
4. Feed that frame as the start image for beat B, with B's motion prompt.
5. Repeat for C.

If a finished generation offers **Extend**, use that instead of steps 2–4: it
continues from the end of the clip conditioned on the motion rather than on one
still, so it holds speed and direction better. Chaining by frame is the fallback
that always works.

What chaining costs you:

- Same model, same resolution, same aspect ratio on every beat. A mismatch shows
  up at the join as a colour or sharpness pop.
- **Each beat gets used in full.** The only trims that stay seamless are the head
  of the first beat and the tail of the last, because those ends join nothing.
  So three 5s beats is a 15s film, trimmed at both ends to about 12s — that is
  the reason for three beats and not six.
- The look, wardrobe and lighting ride on the start frame. Keep the prompt to
  motion only.

### The clean tunnel

The vortex is the one beat worth regenerating on its own, and not for its joins —
legs → vortex reads fine as a punch through the glass. It is worth it because the
plate has Runway's own **fake** Discord and YouTube panels baked into both walls,
so the real content composited on top has garbled interfaces fighting it
underneath. A clean tunnel makes the real content the only content in frame.

It does not chain off anything, so it can be generated first and in isolation.

**The still**, from an image model:

```
First-person POV photograph from inside a tunnel of light. Both of the
subject's arms reach forward into frame from the bottom corners, forearms in a
white long-sleeve top, hands open and spread, close to camera and in sharp
focus. Ahead, a corridor of streaming light rushes toward a white-hot core at
the centre of frame. Along the left wall, plain glowing rectangular panels in
warm red; along the right wall, plain glowing rectangular panels in cool
purple-blue. The panels are blank sheets of coloured light — no text, no logos,
no icons, no interface of any kind. Long motion-blurred streaks radiate from
the centre. A small distant figure in a white shirt falls away ahead into the
light. Photoreal, cinematic, wide lens, heavy bloom, 16:9.
```

**The motion**, Gen-4.5, 5s, 16:9:

```
The camera flies forward down the tunnel. The glowing panels rush past along
both walls and out of frame. The white light ahead grows until it fills the
whole frame.
```

One direction, one move. The earlier version asked for a right turn then a left
turn in the same prompt and Gen-4 blurred them together — the turns are not
needed anyway, because the walls are on both sides at once.

### The three beats

Draft on **Gen-4 Turbo** at 5 credits/sec. Re-run a keeper on **Gen-4.5** at 12
only once its motion is right. Beat C is the one worth 4.5.

| # | Beat | Len | Start image | Motion prompt |
|---|---|---|---|---|
| A | Turn, reach, run | 5s | still 1 | `He turns back over his left shoulder and reaches his left hand back toward the camera, then faces forward and runs. The camera moves forward with him at running pace. The small black television far ahead grows larger. Camera at eye level, 35mm.` |
| B | The dive | 5s | A's last clean frame | `He runs the last steps and dives head first into the television screen. His legs disappear through the glass. The camera keeps pushing forward and the television fills the frame.` |
| C | Through, and the vortex | 5s | B's last clean frame | `The camera pushes through the screen into a tunnel of streaming light. Rectangular glowing panels rush past along the left and right walls, cool purple on the right, red on the left. The white light ahead grows until it fills the frame.` |

Two notes on beat C. Ask for **panels of light**, not for chat windows or video
players — the real Discord and YouTube content is composited onto those walls
afterwards, and generated UI underneath only fights it. And ask for the colour
split, purple right and red left, because that is what makes the composite look
like it belongs rather than like it was pasted on.

The white light filling frame at the end of beat C is the ending.

## The assembly

Five beats, 10.96s. The Discord and YouTube animations are **not cuts of their
own** — they live on the walls of the vortex, Discord right and YouTube left,
composited into the plate so they are inside the shot rather than next to it.

| # | source | length | on screen |
|---|--------|--------|-----------|
| 1 | reach              | 1.50 | 0.00 |
| 2 | run                | 1.50 | 1.50 |
| 3 | dive               | 1.50 | 3.00 |
| 4 | legs through       | 1.40 | 4.50 |
| 5 | vortex + walls     | 5.04 | 5.90 |

**The sixth plate is cut.** POV alone at the television showed the set empty and
further away than the shot before it, so on screen the man vanished and the
television stepped backwards. The legs plate already has the POV hands in frame,
so it *is* the POV shot and nothing is lost by going straight from it into the
screen.

Joins are a 150ms dissolve. That is a stopgap: once the beats are generated as a
chain the joins carry themselves and the dissolves come out.

### What the joins actually cost

Three of the five joins in the six-plate cut were broken, and it is worth being
precise about which, because only two of them need Runway:

| join | verdict |
|---|---|
| reach → run | **broken.** He is a close-up facing camera, then instantly far away mid-run. The reach plate never turns him round. |
| run → dive | **broken.** Mid-run with the television small and distant, then airborne with it filling frame. Several metres missing. |
| dive → legs | fine as a cut. The camera moves, the action continues — ordinary cutting. |
| legs → POV | **broken, and free to fix.** Fixed by cutting the POV plate, as above. |
| POV → vortex | fine as a cut, and now reads better as legs → vortex: the punch through the glass. |

So the chain is worth two generations, not three. Beats A and B below fix the
two joins that are genuinely broken; the existing vortex can stay, or be
regenerated separately for the clean-tunnel reason in the assembly notes.

### The vortex walls

The walls are two long strips lying along the tunnel in CSS 3D, one either side,
with the cards laid out across each strip. The strip's local X *is* tunnel
depth, so sliding one strip in X is what makes its cards stream past the camera —
one transform, and perspective does the scaling for free.

What makes it sit inside the plate rather than on top of it:

- **The stage's perspective origin is the plate's vanishing point** (60% / 35%),
  so both walls converge exactly where the light is.
- **The flow is eased, not linear** (`p^1.32`). The plate accelerates into the
  blowout; a constant slide reads as a sticker sliding over the shot.
- **Every edge of the strip is feathered** with a two-axis mask, so cards fade in
  at the vanishing point and blur out past the frame instead of ending on a line.
- **The walls wash out from 3.25s** as the light takes the frame.
- **The walls are pushed out to ±940px** so the tunnel's core, and the figure
  falling through it, stay clear.
- **Every card is lit by the tunnel**: a rim glow in the wall's colour, a wash of
  that colour across its face, and a motion blur that grows with how fast the
  card is going past. Nothing in the plate is sharp — it is all speed and bloom —
  so a crisp rectangle is the loudest "pasted on" tell there is.

The one thing left that reads as clutter is not the composite. The plate has
Runway's own **fake** Discord and YouTube panels baked into both walls, so there
are two sets of UI in the shot competing: garbled ones underneath, real ones on
top. That is why beat C's prompt asks for panels of light and no interfaces —
with a clean tunnel the real content is the only content in frame.

The Discord side runs the giveaway live: the counter climbs to 1,500, the timer
runs down, and the embed flips to the winners at 2.00s — while the card is at its
most readable, which is what the ordering of the cards on the strip is for.

Then the export gets cut to a loop, compressed and wired into
`NEXT_PUBLIC_HERO_VIDEO`, which `src/components/hero-room.tsx` already reads.

### Gotchas if this is rebuilt

The clips carry no usable seek index — setting `currentTime` on one lands back
on frame 0 and stays there, silently, so any cut with an in-point plays its
first frame frozen for its whole length. Either pre-trim the clip, or start it
early behind the previous cut and raise it when it gets to the in-point.

Cut by raising the incoming clip on top and retiring the outgoing one two frames
later. Hiding the outgoing clip on the same frame leaves one frame of black at
every cut — eight black flashes across the film.

The Runway clips converted through ezgif come back **VP9 at 1280×720**. The
downscale is ezgif's, not Runway's; a 1080p master needs a conversion that keeps
the resolution. VP9 also rules out most local tooling, which only decodes VP8 —
which is why the inserts, not the plates, are the ones that get pre-trimmed.

## Likeness: what was learned the hard way

Photoreal removes most of this problem, because the model only has to place a
real person in a pose rather than reinvent him in a style. The notes below cost
several rounds to find and still apply to any reference-driven generation.

- **Reference photographs decide everything.** Sharp, eye level, soft daylight,
  neutral closed-mouth expression. One front-facing, one three-quarter. A soft
  video still shot from above, mid-sentence, under flat overhead light is not a
  reference — the model rebuilds the missing information from its own defaults,
  and those defaults are a generic face.
- **Head shots only, no props.** An attached photograph of an object becomes a
  subject the model feels obliged to include. A golf bag in an early reference
  turned up in every single output.
- **Ask for accuracy, never caricature.** A model does not exaggerate the
  person, it exaggerates toward an archetype.
- **Do not stack intensifiers.** "Very thick eyebrows sitting low over his eyes"
  plus "full lips" returns angry brows and a pout, each feature maxed
  independently of the face it belongs to.
- **The image stage does not have to happen in Runway.** GPT Image held the
  likeness noticeably better than Runway's own image models here. Runway needs a
  first frame and does not care what drew it.

### The riskiest clip

Clip 1 puts an open hand near the lens, and hands are what these models handle
worst. Photoreal helps — hands with skin texture and shading are far more
common in training data than flat drawn ones — but still budget extra takes, and
pull him back from the camera if the hand will not hold. A clean hand a step
further away beats a close-up of a claw.

Faces and fingers hold for roughly the first two seconds of a generation and
drift after. **Keep every clip with him in it to 5 seconds and use its first
two.** Six clips at two usable seconds each is a twelve-second film, which is
the right length anyway.

## Continuity between clips

Use the **last frame of each clip as the first frame of the next**. That forward
chaining is what makes four clips read as one take, and it is the only
continuity technique this film needs.

**Do not plan on an end-frame keyframe.** Gen-3 Alpha Turbo had first-and-last
keyframes; Gen-3 was retired in July 2026 and Gen-4 Turbo has no last-frame
input. Whether Gen-4.5 has shipped keyframes is unconfirmed — promised at
announcement, absent from the current docs. Nothing here depends on it.

**Nothing has to match the website.** The film happens in a white void and ends
on a white blowout, and the site fades up out of that white in CSS. There is no
frame to hit, no palette to match and no landing shot to grade. That is the
whole reason the white void is worth keeping even though a background would be
prettier.

## Which model, and what it costs

Credits are the real constraint, so spend them in the right order.

| Model | Credits/sec | 10s clip | Use it for |
|---|---|---|---|
| **Gen-4 Turbo** | 5 | 50 | Blocking out framing and motion. Draft everything here. |
| **Gen-4.5** | 12 | 120 | The final take, once a shot is locked. Current flagship. |

Standard (~625 credits/month) buys roughly **five** 10-second Gen-4.5 takes — not
a production budget once rerolls are counted. Pro (~2,250) is about eighteen.
Drafting on Turbo and committing on Gen-4.5 stretches the same money about 2.4×.

One prompting note that depends on the model: the "one action per prompt" rule is
a **Gen-4** rule. Gen-4.5 is documented as handling sequenced instructions and
camera choreography within a single prompt, so on 4.5 you can push more
direction into each shot than the prompts above carry. The five-shot split still
stands — 25 seconds is not one generation on any model.

**Never use negative prompts.** Runway documents that Gen-4 interprets what
should happen, not what to avoid, and that negative phrasing can produce the
opposite. "No camera shake" can give you shake; write "locked camera" instead.
Plenty of blog advice says otherwise — it contradicts Runway's own guide.

## Before you spend anything

Six things are worth five minutes in the app, because every Runway domain is
blocked from this environment and none of them could be confirmed from here:

1. Does Gen-4.5 accept an end-frame keyframe yet?
2. Is Extend available on Gen-4.5, and what is the cap?
3. Gen-4.5 native resolution — 720p or 1080p — and which aspect ratios.
4. Does Gen-4.5 take References directly, or is References still image-stage only?
5. Is Act-Two included on your plan tier?
6. **Runway's current policy on depicting a real, identifiable person.** You have
   his consent, but moderation can still block a generation, and a pipeline that
   fails after the look-dev spend is the most expensive way to find out.

## Putting it on the site

Four clips trim to roughly 12–18 seconds. **Do not make that a hero loop and do
not force it on every visit** — an unskippable intro is the fastest way to lose
the people you just paid to attract.

Ship it three ways:

1. **On the site:** a silent 3–4 second slice of the vortex as a looping hero.
   Under 2MB, WebM, poster frame for the first paint. Drops straight into
   `NEXT_PUBLIC_HERO_VIDEO` — `src/components/hero-room.tsx` already swaps the
   screen's typography for a video when that is set.
2. **Once per visitor:** the full cut as a skippable intro, gated on
   `localStorage`, ending on the whiteout the page fades up from, with a Skip
   control visible from the first second, never shown to anyone whose OS asks
   for reduced motion.
3. **Everywhere else:** the full cut is the YouTube channel trailer and the
   Discord invite video, where the length is an asset rather than a toll.
