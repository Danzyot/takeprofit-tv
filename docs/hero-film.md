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

## The style: western adult animation

The look is **2D western adult animation** — the register of a modern American
comic-book cartoon. Clean confident linework, cel shading in a few bold steps,
heavy black shadow shapes, saturated comic colour, softly painted backgrounds
sitting behind crisp character art.

**Know the trade-off.** 2D cel is the harder ask of a video model: linework
boils, outlines wobble frame to frame, flat fills band under compression.
Stylised 3D with volumetric light is what these models do most reliably. This
look is worth the extra rerolls, but budget for them and mitigate:

- **Keep shots to 5 seconds** wherever a character is on screen — less time to
  drift. Only the vortex, which has no character, earns 10s.
- **Generate from a still, never from text.** A locked first frame is the single
  biggest defence against boil.
- **Keep backgrounds soft and uncluttered.** Wobble shows worst in busy painted
  detail, and this style calls for soft backgrounds anyway.
- **Grade with grain at the end.** A little grain masks a lot of shimmer.

If the 2D boils past usefulness, the fallback is the stylised-3D string at the
bottom of this file. Same shots, same beats.

### The style string

Paste into every shot, unchanged. Consistency comes from repeating it verbatim.

> Western adult animation in the style of a modern American comic-book cartoon.
> Clean confident 2D linework of even weight, cel shading in few bold tonal
> steps, heavy black shadow shapes, saturated comic-book colour, softly painted
> backgrounds behind crisp character art, dramatic rim light, subtle film grain.

## Look development comes first

Look dev is **two passes**, and doing it in one is the mistake that costs you a
day. Generating a full styled scene asks the model for a new pose, a new outfit,
a new background, a new camera angle *and* the man's face at the same time.
Identity is the first thing it drops, and you get a handsome cartoon stranger.

**Lock the head, then move him.**

### Pass 1 — the portrait

Change only the rendering. The photograph supplies the face; the prompt supplies
nothing but how it is drawn.

> Rotoscope this photograph into a western adult animated style. Trace his
> actual face and keep every proportion exactly as photographed — the width and
> length of his face, the spacing and shape of his eyes, the shape of his nose,
> mouth and jaw, and his real hairline. Render with clean even 2D linework and
> simple cel shading in a few flat tones, natural skin and hair colour, soft
> shading rather than heavy black shadow shapes. The drawing sits directly on
> the photograph's geometry.

**Rotoscope is the operative word.** It names the actual technique — keep the
real geometry, lay animation rendering over it — and it tells the model to
follow the photograph instead of redrawing from its own idea of a face.

**Strip the style terms that deform faces.** "Heavy black shadow shapes" and
"saturated comic-book colour" are the two that force a face into the style's
geometry rather than the subject's. Leave them out of this pass entirely. This
is not a compromise on the look: faces in this style are fairly naturalistic,
with clean lines and restrained shading, and the heavy shadow shapes are used
sparingly for dramatic beats. Dialling them down here is closer to the
reference, not further from it.

**No feature list, and never caricature.** An earlier version of this brief
asked for exaggerated distinctive features and a list of them. Both fail the
same way: a model does not exaggerate the person, it exaggerates toward an
archetype, and stacked intensifiers — "very thick eyebrows sitting low over his
eyes" plus "full lips" — return angry brows and a pout, each feature maxed
independently of the face it belongs to. If a note is genuinely needed, make it
short, factual and free of intensifiers.

**References: head shots only, and they must be good.** One sharp front-facing
photo with a neutral closed-mouth expression, one three-quarter, one profile,
shot at eye level in soft daylight — a phone by a window is fine. No full-body
shots and no props: an attached photo of an object becomes a subject the model
feels obliged to include, and it will turn up in every frame.

This is the biggest lever in the production and the one most likely to be
skipped. A soft video still, shot from above, mid-sentence, under flat overhead
light is not a reference — the model reconstructs the missing information from
its own defaults, and a generic face is exactly what those defaults are. No
prompt recovers from a bad input.

Run this pass at 1:1. You only want the head.

### Pass 1b — add the style back, carefully

Only once the portrait genuinely looks like him, push the style on that image:

> Keep this character's exact face and proportions unchanged. Strengthen the
> shading into bolder flat shapes and deepen the colour saturation.

If this breaks the likeness, you have found the ceiling. **Stay at the lower
stylisation level and run the whole film there.** Consistency across five shots
is worth more than maximum style on one frame.

### Stills do not have to be made in Runway

The image stage and the video stage are independent — Runway needs a first
frame and does not care what drew it. If another image tool holds the likeness
better, use it for all five stills and bring the finished frames back for the
video pass. Whichever tool wins, stay on it for every still; switching midway
is how five shots stop looking like one film.

### When to stop prompting

If good photographs plus the prompt above do not produce a recognisable likeness
within **two or three attempts, stop tweaking words.** Past that point prompt
iteration is diminishing returns and it spends credits for nothing. Two real
alternatives:

- **Act-Two** drives an animated character from actual footage of him
  performing, instead of reconstructing his face from a photograph. It is the
  tool built for animating a specific person, and this film is first-person POV
  of him throughout — this may be the primary path rather than the fallback.
- **Commission the character design.** One turnaround sheet from an
  illustrator settles the likeness permanently, and every still and shot
  references that instead of re-fighting it each generation. For the centrepiece
  film of a brand that is a normal production cost.

### Pass 2 — the look frame

Once the portrait is unmistakably him, use **that** as the reference and put him
in the world: the sunlit street, mid-stride, looking back over his shoulder with
a grin. Switch to 16:9 here. This frame is the style bible every shot inherits
from.

### Do not leave look dev until the frame passes all four

- It looks like **him** at a glance, not a man with similar hair.
- Linework is **clean and even in weight** — nothing scratchy or inconsistent.
- Shadows are **bold flat shapes**, not soft gradients. That is the tell of this
  style; gradients drift it toward generic 3D.
- The background is **softer than he is** — painted, not detailed.

### Which image model

There is no reliable ranking here — test rather than trust a recommendation,
including this one. In practice on this project GPT Image held the likeness
noticeably better than Nano Banana Pro, which produced the more beautiful
illustration and the less recognisable man. Run the same prompt and the same
photograph through two or three and judge them on one question: is that him.

Fall back to **Gen-4** if likeness keeps drifting through pass 1 — its saved
Reference is built for reusing one character across many generations. If it
still will not hold, that is the signal to look at **Act-Two**, which drives an
animated character from real footage of him rather than redrawing him from a
photo.

Whichever wins, **stay on it for every still**; switching models midway is how
five shots stop looking like one film. This choice covers stills only — the
video stage is still Gen-4 Turbo for drafts and Gen-4.5 for keepers.

## The shots

Each is a single continuous action with one camera move. Generate at least four
takes of each video shot.

Every shot has **two prompts, used in two different tools**:

| | Tool | Produces |
|---|---|---|
| **Frame** prompt | the image model | the still |
| **Motion** prompt | Runway, image-to-video | the clip |

The motion prompt describes motion and almost nothing else, because the still
already carries subject, colour, lighting and style — Runway documents that
re-describing them fights the image.

**Attach the character sheet to every frame prompt** that has him in it, and
say "the character in the reference image, same style, same face and outfit".
The sheet locks wardrobe and build as well as face, which is why a full-body
turnaround beats a portrait. Shots 4 and 5 have no character.

Approve all five stills before generating a single second of video.

### Shot 1 — The reach (5s)

**Frame:** The character in the reference image, drawn in exactly the same
animated style with the same face, hair, white t-shirt, silver chain, black
trousers and white sneakers. He stands a few steps away on a sunlit city street,
facing the viewer at eye level, beginning to raise his open hand toward the
camera, relaxed and smiling. Full body in frame. Clean even 2D linework, simple
cel shading in a few flat tones, softly painted background buildings behind him.
16:9.

**Motion:** `The man extends his open hand toward the camera. The camera sways gently and drifts a half step forward.`

### Shot 2 — The turn and run (5s)

**Frame:** The character in the reference image, same style, same face and
outfit. He is turning away from the viewer mid-stride on the same sunlit city
street, glancing back over his shoulder toward the camera and laughing, one arm
reaching back. An old television set sits small in the distance at the end of
the street. Clean even 2D linework, simple cel shading, softly painted
background. 16:9.

**Motion:** `The man turns and runs away from the camera, glancing back over his shoulder. The camera follows close behind at running pace. The buildings streak past on both sides.`

### Shot 3 — The leap (5s)

**Frame:** The character in the reference image, same style, same face and
outfit. He is mid-leap seen from behind and slightly below, body stretched
forward, arms out, launching toward a large old television set directly ahead
whose screen glows. Clean even 2D linework, simple cel shading, softly painted
background. 16:9.

**Motion:** `The man leaps forward toward the television. The camera rushes after him and passes through the screen, which ripples like liquid. Radiating speed lines and bold motion smears.`

### Shot 4 — The vortex (10s)

**Frame:** A tunnel of swirling saturated colour seen from inside, looking
straight down its length. Rows of floating rectangular screens line both walls,
glowing softly, their surfaces blank and featureless. A pale point of cold light
far ahead at the centre. Same animated style: clean even 2D linework, simple cel
shading in a few flat tones. 16:9.

**Motion:** `The camera flies forward down the tunnel. Ribbons of colour spiral past. The screens drift by on both sides. The colour drains toward cold grey and near black and the pale light ahead grows.`

### Shot 5 — Arrival (5s)

**Frame:** A quiet dark room. A single old television set against the far wall,
its screen glowing cold grey, a small amber power light beneath it. Dust
drifting through the beam from the screen. Same animated style: clean even 2D
linework, simple cel shading in a few flat tones, deep shadows. 16:9.

**Motion:** `A pale light swells until it fills the frame and blows out to white, then settles on the television in the dark room. The camera slows to a stop.`

### Two things not to fight for

**Leave the television blank in shots 3 and 5.** Do not ask for "TAKEPROFIT TV"
on the screen — image and video models both garble lettering, and you will burn
takes chasing a clean logo. The wordmark is composited in post from
`docs/assets/tptv-tv-cartoon.png`.

**Keep the screens in shot 4 blank.** That is the design, not a failure. They
are tracked slots for real YouTube clips and a Discord capture.

## The Runway workflow, step by step

**0. Verify six things first.** They are listed near the end of this file. All
six are five minutes in the app and one of them — the policy on depicting an
identifiable real person — can stop the whole production after you have already
spent on look dev.

**1. Gather two reference photos.** **One sharp front-facing head shot with a
neutral closed-mouth expression, one three-quarter.** Head shots only — no
full-body, no props. An attached photo of an object becomes a subject the model
feels obliged to draw, and it will appear in every frame. Shot 2 glances back
over his shoulder, and image models pattern-match in 2D rather than
reconstructing a head, so without the second angle that shot returns a stranger.

**2. Look dev, in two passes.** Pass 1 converts the portrait and nothing else,
until it is unmistakably him. Pass 2 puts that approved head into the world.
Do not compress these into one generation — asking for a new pose, outfit,
background, camera angle and his face together is how you get a handsome
stranger. Stills are cheap; spend patience here rather than credits.

**3. Five shot stills.** One per shot, again in the image model, using the
Reference for him and the approved look frame for the style. Shots 4 and 5 have
no character, so they take the style reference only. Approve all five before you
generate a single second of video.

**4. Motion.** Load each still into image-to-video as the first frame and give
it that shot's **motion** prompt only. Block everything out on **Gen-4 Turbo**
at 5 credits/sec; once framing and motion are locked, run the keeper on
**Gen-4.5** at 12. Same money, roughly 2.4× the attempts.

**5. Chain.** Take the last frame of each approved clip and use it as the first
frame of the next. That forward chaining is what makes five clips read as one
take. Do not plan on an end-frame keyframe — see below.

**6. Post.** Composite the wordmark plate onto the television, drop your real
YouTube clips and a Discord capture into the blank screens in shot 4, grade the
five clips to match, add grain, and cut the film at the whiteout in shot 5.

**7. Web.** Send me the file. I will cut the loop, compress it, and wire it up.

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

## Fallback style: stylised 3D

If 2D cel boils too badly to use, this is the same film in the register these
models handle most reliably. Swap the style string, regenerate the look frame,
keep every shot and beat identical.

> Cinematic stylised 3D animation, modern animated feature quality. Rounded
> appealing character design, soft global illumination, warm rim light,
> volumetric light shafts, shallow depth of field, rich saturated colour,
> subtle film grain, filmic colour grade.
