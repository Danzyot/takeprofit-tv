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

## The six clips

Each still is the first frame of its clip. The motion prompt describes motion
and nothing else — the still already carries subject, colour and style, and
re-describing them fights the image.

Draft everything on **Gen-4 Turbo** at 5 credits/sec. Re-run a keeper on
**Gen-4.5** at 12 only once its motion is right.

| # | Clip | Len | Model | Motion prompt |
|---|---|---|---|---|
| 1 | Reach | 5s | Turbo | `The man reaches his open hand further toward the camera and beckons. The camera drifts slowly forward toward him.` |
| 2 | Run | 5s | Turbo | `The man runs forward away from the camera toward the television. The camera follows him at running pace. The television grows larger.` |
| 3 | He dives in | 5s | Turbo | `The man dives forward into the television screen and disappears through it. The camera follows close behind him.` |
| 4 | POV at screen | 5s | Turbo | `The camera pushes forward toward the screen. The hands press into the glass and the static ripples where they touch.` |
| 5 | POV through | 5s | Turbo | `The camera plunges forward into the screen. The lightning flares and the light fills the frame.` |
| 6 | Vortex | 10s | **Gen-4.5** | `The camera flies forward down the tunnel behind the man. It turns right to the purple chat bubbles, then left to the video screens, then faces forward as the white light ahead grows and fills the frame.` |

Clip 6 is the only one that needs Gen-4.5: three camera moves in one prompt, and
Gen-4 blurs sequenced direction together. If it still comes back confused, split
it into two five-second clips — right turn, then left turn.

The white light filling frame at the end of clip 6 is the ending.

## The assembly

Put the six clips in order in Runway's editor and export. Hard cuts throughout —
each clip opens roughly where the last ended. Trim the first and last few frames
of any clip that warps; that is where generated clips are weakest.

Then the export gets cut to a loop, compressed and wired into
`NEXT_PUBLIC_HERO_VIDEO`, which `src/components/hero-room.tsx` already reads.

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
