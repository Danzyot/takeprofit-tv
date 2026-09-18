# The hero film — production brief

The opening sequence: a first-person run that leaps into the TPTV television,
through a vortex, and lands on the website.

**This is not one Runway generation.** It is five shots. Runway holds roughly
one action per clip; asking a single prompt for "reach, turn, run, leap,
vortex, arrive" collapses every beat into mush. Generate the shots separately
and cut them together.

## The arc

The film has a colour journey, and it is doing real work: it starts warm and
saturated, and **drains to cold grey and near-black as the vortex deepens**, so
it arrives in the same world the website lives in. Do not skip this — it is what
makes the ending land rather than look like two unrelated videos taped together.

Match the destination exactly: the site's hero is a **cold grey** screen in a
dark room, lit by nothing but the tube, with a single amber power LED as the
only warm point in frame. That LED is the one piece of warmth that survives the
journey, which is a nice beat to land on.

## Look development comes first

Before any video, generate **one still** that settles the look, then reference it
in every shot. Everything else in this brief depends on that frame existing.

The style is **stylised 3D with cinematic lighting** — the register of a modern
animated feature. Colourful and characterful, but lit and graded like film.

That is a deliberate move away from flat vector cartoon, for two reasons. Flat
2D with hard outlines reads as clipart at video resolution, and it is the thing
video models handle worst: linework boils, outlines wobble frame to frame, and
flat fills band under compression. Volumetric light, soft shading and depth of
field are what these models are genuinely good at, so a stylised-3D target gets
you a better *and* more consistent result from the same credits.

Generate the style frame in an image model (Gen-4 Image, or one of the image
models hosted inside Runway), then save it as a Reference:

> A warm stylised 3D animated still in the register of a modern animated
> feature. A young man stands on a sunlit street of rounded pastel buildings,
> caught mid-stride, looking back over his shoulder with a grin. Soft global
> illumination, warm rim light along his shoulder, volumetric light shafts,
> shallow depth of field, rich saturated colour, gentle film grain, filmic
> colour grade.

Reroll that one frame until the look is right. It is the cheapest decision in
the whole production and every shot inherits from it.

## Global style string

Once the look frame is approved, paste this into every shot, unchanged.
Consistency comes from repeating it verbatim, not rewording it each time.

> Cinematic stylised 3D animation, modern animated feature quality. Rounded
> appealing character design, soft global illumination, warm rim light,
> volumetric light shafts, shallow depth of field, rich saturated colour,
> subtle film grain, filmic colour grade.

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
> and right, glowing softly, their surfaces blank. The colour drains from warm
> and saturated toward cold grey and near black as the tunnel deepens. A pale
> point of cold light sits far ahead and grows steadily. Fast continuous
> forward camera.

The blank screens are deliberate. They are **compositing slots** — see below.

### Shot 5 — Arrival (5s)

> First-person point of view. A pale point of cold light swells until it fills
> the frame and blows out to white. The white settles into a quiet dark room
> where a single vintage television glows cold grey against a far wall, its
> small amber power light the only warmth in frame, dust drifting through the
> beam. The camera eases to a stop. Slow deceleration and a gentle settle.

## Two things Runway will get wrong

**1. Text.** Video models garble lettering. Never ask it to render
"TakeprofitTV" — it will come back as TAKEPRQFIT, warping frame to frame.

`docs/assets/tptv-tv-cartoon.png` is a flat vector drawing of the set with the
wordmark and the TPTV mark correct. **It is a lettering plate, not a style
reference** — flat vector is not the look this film is going for. Use it only to
composite the nameplate back onto the television in post, and take the set's
actual look from the style frame above.

**2. The YouTube clips and the Discord feed.** Runway cannot insert real
footage. That is why Shot 4 asks for *blank* glowing rectangles: they are
tracked slots. Drop the real clips and a Discord capture into them in an editor
(After Effects, Resolve, even CapCut with corner-pin). Generated screens
showing invented YouTube content would look fake and say nothing.

## Locking his face: a two-stage pipeline

**Runway's References feature belongs to the image model, not the video model.**
There is no "attach three photos to a video generation" path. Identity is locked
one stage earlier:

1. **Gen-4 Image + References** — attach 1–3 reference photos of him, `@`-mention
   the saved reference in the prompt, and generate a *still* for each shot: the
   reach, the run, the leap. This is where you fight for his likeness, and stills
   are cheap to iterate.
2. **Image-to-video** — feed each approved still in as the **first frame** of its
   shot. The video model then only has to produce motion, not invent a face.

References pattern-matches from 2D; it does not build 3D geometry, so a large
angle change breaks identity. Shot 2 has him **glancing back over his shoulder** —
supply a three-quarter reference, not just a front-facing one, or that shot will
come back as a different person.

Detail also degrades across a generation: faces and fingers hold for roughly the
first two seconds and drift after. **Keep any shot that holds on his face to 5
seconds.** Save 10s for the vortex, where there is no face to wreck.

### Shot 1 is the expensive one

A first-person shot whose subject is an outstretched hand asks the model for the
two things it is worst at — hands, and precise hand-to-camera interaction. Budget
several takes for it specifically, and consider framing him from the chest up
with the hand entering frame rather than filling it.

If real performance matters more than a prompted gesture, **Act-Two** is the
right tool: it transfers a real driving performance — head, face, body, hands —
onto a character reference, up to about 30 seconds. Check whether your plan tier
includes it before designing around it.

## Continuity between shots

Use the **last frame of each shot as the first frame of the next**. That forward
chaining is what makes five clips read as one take.

**Do not plan on an end-frame keyframe.** Gen-3 Alpha Turbo had first-and-last
keyframes; Gen-3 was retired in July 2026 and Gen-4 Turbo does not offer a last
frame at all. Whether Gen-4.5 has shipped keyframes is unconfirmed — it was
promised at announcement and the current docs still list only text-to-video and
image-to-video. Verify in-app before building a plan that needs it.

### So don't make Runway land on the website at all

The original plan — make the final frame match the site hero exactly — depends
on a feature that may not exist, and matching by hand is fussy.

**End the film on the white flash instead, and have the website fade up from
white.** Shot 5 already blows out to white before settling; simply cut the film
at the whiteout. The site then does the second half of the transition in CSS,
where it is free, exact and reversible. `tptv-handoff-frame.png` stops being a
target Runway has to hit and becomes what it should have been: a grading
reference so the film's last colours match the site's first ones.

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

The full cut will run 20–30 seconds. **Do not make that a hero loop and do not
force it on every visit** — a 25-second unskippable intro is the fastest way to
lose the people you just paid to attract.

Ship it three ways:

1. **On the site:** a 3–4 second slice of the vortex-to-arrival as a silent
   looping hero. Under 2MB, WebM, poster frame for the first paint. Drops
   straight into `NEXT_PUBLIC_HERO_VIDEO` — `src/components/hero-room.tsx`
   already swaps the screen's typography for a video when that is set.
2. **Once per visitor:** the full cut as a skippable intro, gated on
   `localStorage`, ending on the whiteout that the page fades up from, with a
   Skip control visible from the first second, never shown to anyone whose OS
   asks for reduced motion.
3. **Everywhere else:** the full cut is the YouTube channel trailer and the
   Discord invite video, where 25 seconds is an asset rather than a toll.
